import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamListApp} from '../types';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator<StackParamListApp>();

const AppNav = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="blue" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
