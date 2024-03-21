import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './componentes/login';
import telaCalculo from './componentes/telaCalculo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Bem vindo'}} />
      <Stack.Screen
        name="telaCalculo"
        component={telaCalculo}
        options={{title: 'Calcule Seus Juros e Idade'}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};