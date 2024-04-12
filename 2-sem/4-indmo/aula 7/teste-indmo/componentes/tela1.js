import {
    StyleSheet,
    Text,
    View,
    Image, 
    Switch,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { useState, React } from 'react';
import MaskInput from 'react-native-mask-input';


export default function App() {
    const [ habilitado, setHabilitado ] = new useState(false);
    const habilitar = () => {
    setHabilitado(!habilitado);
     };
    return (
        <View style={styles.container}>
            <Switch value={habilitado} onValueChange={ habilitar }/>
            <Image
                source={{ uri:(habilitado) ? "./assets/lampada1.png" : "./assets/lampada0.png" }}
                style={styles.lampada}
            />
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      width: 400,
      height: 400,
    },
    lampada: {
      margin: 40,
      width: 200,
      height: 200,
    }
  });