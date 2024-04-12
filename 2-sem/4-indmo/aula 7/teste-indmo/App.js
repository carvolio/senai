import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './componentes/login';
import telaEscolha from './componentes/telaEscolha';
import tela1 from './componentes/tela1';
import tela2 from './componentes/tela2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}} />
      <Stack.Screen
        name="telaEscolha"
        component={telaEscolha}
        options={{title: 'Home'}} />
      <Stack.Screen
        name="tela1"
        component={tela1}
        options={{title: 'Switch'}} />
      <Stack.Screen
        name="tela2"
        component={tela2}
        options={{title: 'Calcular Juros'}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};
