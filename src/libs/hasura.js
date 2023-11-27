import { initializeApp } from 'hasura/app';

import { hasuraConfig } from 'src/config';

export const hasuraApp = initializeApp(hasuraConfig);
