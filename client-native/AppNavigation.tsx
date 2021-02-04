import { createAppContainer } from  'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthConfig from './Container/AuthConfig';
import LandingPage from './Container/LandingPage/landingpage';
import MainPage from './Container/MainPage/mainpage';

const AuthNavigator = createStackNavigator(
  {
    LoadingScreen: {
      screen: AuthConfig,
      navigationOptions: {
        headerShown: false
      }
    },
    MainPage: MainPage,
    LandingPage: LandingPage
  }
);

export default createAppContainer(AuthNavigator);