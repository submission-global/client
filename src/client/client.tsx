import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HomePage } from '../shared/app/pages/HomePage';

ReactDOM.hydrate(
  <HomePage />,
  document.getElementById('root')
);
