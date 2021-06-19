import { useEffect } from 'react';

const useStopSroll = (isShow) => {
  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = 'hidden';
      document.querySelector('html').scrollTop = window.scrollY;
    }

    if (isShow) {
      window.addEventListener('scroll', disableScroll);
    }

    return () => {
      window.removeEventListener('scroll', disableScroll);
      document.body.style.overflow = 'visible';
    };
  }, [isShow]);
};

export default useStopSroll;
