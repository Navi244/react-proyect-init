import Login from './pages/login';
import HomeCycling from './pages/HomeCycling';
import Routes from './pages/Routes';
import Alarm from './pages/Alarm';
import Light from './pages/Light';
import Statistics from './pages/Statistics';
import Friends from './pages/Friends';
import Training from './pages/Training';
import MainHeader from './components/MainHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BleManager from './config/bleManager/bleManager'
const Stack = createNativeStackNavigator();

export default function App() {
  const ble = new BleManager();
  // ble.start({ showAlert: false }).then(() => {
  //   console.log("Module initialized");
  // })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerTitle:()=> <MainHeader title="Login" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
          }
        }}/>
        <Stack.Screen name="Home" component={HomeCycling} options={{
            headerTitle:()=> <MainHeader title="Inicio" />,
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle: {
            }
          }}/>
        <Stack.Screen name="Routing" component={Routes} options={{
            headerTitle:()=> <MainHeader title="Enrutamiento" />,
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}/>
        <Stack.Screen name="Alarm" component={Alarm} options={{
          headerTitle:()=> <MainHeader title="Alarma" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}/>
        <Stack.Screen name="Light" component={Light} options={{
          headerTitle:()=> <MainHeader title="Luz" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name="Statistics" component={Statistics} options={{
          headerTitle:()=> <MainHeader title="Estadisticas" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}/>
        <Stack.Screen name="Friends" component={Friends} options={{
          headerTitle:()=> <MainHeader title="Amigos" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}/>
        <Stack.Screen name="Training" component={Training} options={{
          headerTitle:()=> <MainHeader title="Entrenamiento" />,
          headerStyle: {backgroundColor: '#f4511e'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}