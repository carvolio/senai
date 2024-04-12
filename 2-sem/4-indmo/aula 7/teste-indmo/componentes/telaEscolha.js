import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen')

export default function App({ navigation }) {
    const mudarTela1 = () => {
        navigation.navigate("tela1", { name: 'tela1' })
    };
    const mudarTela2 = () => {
        navigation.navigate("tela2", { name: 'tela2' })
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={mudarTela1}>
                <Text style={styles.btn}>
                    Switch
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={mudarTela2}>
            <Text style={styles.btn}>
                Calcular Juros
            </Text>
        </TouchableOpacity>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    btn: {
        backgroundColor: '#f6f6f6',
        padding: 20,
        borderRadius: 6
    },
});