import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Game from './containers/Game'


ReactDOM.render(
  <Game />, 
  document.getElementById('root'));
registerServiceWorker();