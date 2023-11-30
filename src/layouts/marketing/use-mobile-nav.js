import { useCallback, useEffect, useState } from 'react';

import { usePathname } from 'src/hooks/use-pathname';

export const useMobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    handleOpen,
    handleClose,
    open
  };
};
