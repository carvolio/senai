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
import { useState } from 'react';
import MaskInput from 'react-native-mask-input';

const {width, height } = Dimensions.get('screen');

    export default function app() {
        const [valor, setValor] = useState();
        const [juros, setJuros] = useState();
        const [total, setTotal] = useState();
        const calcularJuros = () => {
            let total = (valor * juros) / 100;
            setTotal(total);
        }        

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text>Calcular Juros</Text>
                    <TextInput inputMode='numeric' onChangeText={setValor} style={styles.textInput} placeholder='Digite o Valor' />
                    <TextInput inputMode='numeric' onChangeText={setJuros} style={styles.textInput} placeholder='Digite o Juros' />
                    <TouchableOpacity onPress = {calcularJuros}>
                        <Text>
                            Calcular
                        </Text>
                    </TouchableOpacity>
                    <Text>O valor do juros é R$ {total}</Text>
                </View>
            </View>)
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15
        },
        form: {
            backgroundColor: '#f6f6f6',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 6,
            gap: 10,
        },
        textInput: {
            padding: 5,
            height: 40,
            backgroundColor: 'white',
            width: 200,
            borderRadius: 6,
            borderWidth: 0,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0
        },
    });