import { useEffect } from 'react';

const useInfiniteScroll = (ref, onIntersect) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onIntersect]);
};

export default useInfiniteScroll;
