import { useContext } from 'react';

import { SettingsContext } from 'src/contexts/settings';

export const useSettings = () => useContext(SettingsContext);
