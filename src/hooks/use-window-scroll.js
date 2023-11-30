import { useEffect } from 'react';
import throttle from 'lodash/throttle';

export const useWindowScroll = (config) => {
  useEffect(() => {
    const { handler, delay } = config;

    const withThrottle = throttle(handler, delay);

    window.addEventListener('scroll', withThrottle);

    return () => {
      window.removeEventListener('scroll', withThrottle);
    };
  }, [config]);
};
