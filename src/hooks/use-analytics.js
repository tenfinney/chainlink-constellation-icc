import { useEffect } from 'react';
import { gtm } from 'src/libs/gtm';

export function useAnalytics(config) {
  useEffect(() => {
    gtm.initialize(config);
  }, [config]);
}
