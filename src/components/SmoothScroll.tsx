import { FC, useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const scrollAmount = e.deltaY * 0.8; // Reduce sensitivity for smoother feel
      
      scrollContainer.scrollBy({
        top: scrollAmount,
        behavior: 'auto' // We'll handle the smoothness with CSS
      });

      // Add momentum effect
      if (!isScrolling) {
        isScrolling = true;
        scrollContainer.style.scrollBehavior = 'auto';
      }

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Set timeout to end scrolling state
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        scrollContainer.style.scrollBehavior = 'smooth';
      }, 150);
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = window.innerHeight * 0.8;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollContainer.scrollBy({ top: scrollAmount, behavior: 'smooth' });
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollContainer.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
          break;
        case 'Home':
          e.preventDefault();
          scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          e.preventDefault();
          scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
          break;
      }
    };

    // Handle anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          scrollContainer.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="smooth-scroll-container"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        scrollBehavior: 'smooth'
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;