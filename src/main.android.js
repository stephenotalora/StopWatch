/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import { AppRegistry } from 'react-native';
import StopWatch from './components/views/StopWatch';

class Root extends StopWatch {
  static defaultProps = {
    ...StopWatch.defaultProps
  }
}

AppRegistry.registerComponent('App', () => Root);
