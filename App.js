import HomeCycling from './pages/HomeCycling';
import Routes from './pages/Routes';
import Alarm from './pages/Alarm';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeCycling} />
        <Stack.Screen name="Routing" component={Routes}/>
        <Stack.Screen name="Alarm" component={Alarm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}