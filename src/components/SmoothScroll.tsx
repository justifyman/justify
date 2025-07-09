import { FC, useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const targetScrollRef = useRef(0);
  const velocityRef = useRef(0);
  const isScrollingRef = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    // Smooth scrolling parameters
    const friction = 0.08; // Higher = more friction (slower)
    const acceleration = 0.12; // Higher = more responsive

    const updateScroll = () => {
      const difference = targetScrollRef.current - scrollPositionRef.current;
      
      // Apply acceleration towards target
      velocityRef.current += difference * acceleration;
      
      // Apply friction
      velocityRef.current *= (1 - friction);
      
      // Update position
      scrollPositionRef.current += velocityRef.current;
      
      // Apply transform
      content.style.transform = `translateY(${-scrollPositionRef.current}px)`;
      
      // Continue animation if still moving
      if (Math.abs(velocityRef.current) > 0.1 || Math.abs(difference) > 0.1) {
        animationFrameRef.current = requestAnimationFrame(updateScroll);
      } else {
        isScrollingRef.current = false;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const scrollAmount = e.deltaY * 1.5; // Adjust sensitivity
      const maxScroll = content.scrollHeight - window.innerHeight;
      
      targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + scrollAmount));
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        updateScroll();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = 100;
      const maxScroll = content.scrollHeight - window.innerHeight;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          targetScrollRef.current = Math.min(maxScroll, targetScrollRef.current + scrollAmount);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          targetScrollRef.current = Math.max(0, targetScrollRef.current - scrollAmount);
          break;
        case 'Home':
          e.preventDefault();
          targetScrollRef.current = 0;
          break;
        case 'End':
          e.preventDefault();
          targetScrollRef.current = maxScroll;
          break;
        default:
          return;
      }
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        updateScroll();
      }
    };

    const handleResize = () => {
      const maxScroll = content.scrollHeight - window.innerHeight;
      targetScrollRef.current = Math.min(targetScrollRef.current, maxScroll);
    };

    // Touch handling for mobile
    let touchStartY = 0;
    let touchStartTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const maxScroll = content.scrollHeight - window.innerHeight;
      
      targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + deltaY * 2));
      touchStartY = touchY;
      
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        updateScroll();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchStartY - touchEndY;
      const deltaTime = touchEndTime - touchStartTime;
      
      // Add momentum based on swipe velocity
      if (deltaTime < 300 && Math.abs(deltaY) > 30) {
        const velocity = deltaY / deltaTime;
        const momentum = velocity * 200; // Adjust momentum strength
        const maxScroll = content.scrollHeight - window.innerHeight;
        
        targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + momentum));
        
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          updateScroll();
        }
      }
    };

    // Add event listeners
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const offsetTop = rect.top + scrollPositionRef.current;
          targetScrollRef.current = offsetTop;
          
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            updateScroll();
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('click', handleAnchorClick);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="fixed inset-0 overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div 
        ref={contentRef}
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;