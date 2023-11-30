import { useEffect } from 'react';

import { gtm } from 'src/libs/gtm';

export const usePageView = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);
};
