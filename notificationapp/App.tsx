/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppRegistry} from 'react-native/types';
import App from './src/screens';
import {name as appName} from './app.json';

import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Killed State Notification.', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
