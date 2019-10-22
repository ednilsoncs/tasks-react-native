import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
  },
  {
    initialRouteName: __DEV__ ? 'Home' : 'Home',
  }),
);
export default Routes;
