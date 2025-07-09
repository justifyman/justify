import { FC, useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const targetScrollRef = useRef(0);
  const velocityRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Smooth scrolling animation loop
    const animate = () => {
      const current = scrollPositionRef.current;
      const target = targetScrollRef.current;
      const diff = target - current;

      // Easing function for smooth deceleration
      const ease = 0.08;
      const velocity = diff * ease;
      
      // Apply momentum with friction
      velocityRef.current += velocity;
      velocityRef.current *= 0.9; // Friction
      
      scrollPositionRef.current += velocityRef.current;

      // Update scroll position
      scrollContainer.scrollTop = scrollPositionRef.current;

      // Continue animation if there's still movement
      if (Math.abs(diff) > 0.5 || Math.abs(velocityRef.current) > 0.1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Adjust scroll target based on wheel input
      const scrollSpeed = 1.2;
      targetScrollRef.current += e.deltaY * scrollSpeed;
      
      // Clamp to valid scroll range
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));
      
      // Start animation if not already running
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Handle keyboard navigation with smooth scrolling
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = window.innerHeight * 0.8;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          targetScrollRef.current += scrollAmount;
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          targetScrollRef.current -= scrollAmount;
          break;
        case 'Home':
          e.preventDefault();
          targetScrollRef.current = 0;
          break;
        case 'End':
          e.preventDefault();
          targetScrollRef.current = scrollContainer.scrollHeight - scrollContainer.clientHeight;
          break;
        default:
          return;
      }
      
      // Clamp to valid range
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));
      
      // Start animation
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          targetScrollRef.current = offsetTop;
          
          if (!animationFrameRef.current) {
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        }
      }
    };

    // Initialize scroll position
    scrollPositionRef.current = scrollContainer.scrollTop;
    targetScrollRef.current = scrollContainer.scrollTop;

    // Add event listeners
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleAnchorClick);

    // Handle touch scrolling for mobile
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
      
      targetScrollRef.current += deltaY * 2;
      touchStartY = touchY;
      
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));
      
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndTime = Date.now();
      const touchDuration = touchEndTime - touchStartTime;
      const touchEndY = e.changedTouches[0].clientY;
      const touchDistance = touchStartY - touchEndY;
      
      // Add momentum based on swipe velocity
      if (touchDuration < 300 && Math.abs(touchDistance) > 30) {
        const velocity = touchDistance / touchDuration;
        targetScrollRef.current += velocity * 200;
        
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll));
        
        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleAnchorClick);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="smooth-scroll-container"
      style={{
        height: '100vh',
        overflowY: 'hidden', // Hide native scrollbar since we're handling it
        overflowX: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;