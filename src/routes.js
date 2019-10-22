import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
  },
  {
    initialRouteName: __DEV__ ? 'Home' : 'Home',
  }),
);
export default Routes;
