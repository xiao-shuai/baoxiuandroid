/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen';
import AV from 'leancloud-storage'; 
AppRegistry.registerComponent(appName, () => {
    SplashScreen.hide();
    AV.initialize('KJEHExsBtyWPDvm6i6adIMng-gzGzoHsz', '2Bflgjc0l0FYdrnwOyO4XzSo');
    return App
});
