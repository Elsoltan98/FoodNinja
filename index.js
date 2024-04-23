/**
 * @format
 */
// eslint-disable-next-line no-undef
if (__DEV__) {
  // eslint-disable-next-line no-undef
  require('./ReactotronConfig');
}

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
