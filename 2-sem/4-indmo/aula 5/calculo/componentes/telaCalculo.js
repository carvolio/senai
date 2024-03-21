import {
    StyleSheet,
    Text,
    View,
    component,
    TextInput,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';
    import React from 'react';
    import MaskInput from 'react-native-mask-input';

    const {width, height } = Dimensions.get('screen')

    export default function telaCalculo({navigation}) {
        const [valor, setValor] = React.useState(' ');
        const [juros, setJuros] = React.useState(' ');
        const [total, setTotal] = React.useState(' ');
        const calcularJuros = () => {
            let total = (valor * juros) / 100;
            setTotal(total);
        }

        const [dataNas, setDataNas] = React.useState(' ');
        const [dataAtu, setDataAtu] = React.useState(' ');
        const [idadeAtual, setIdadeAtual] = React.useState(' ');
        const calcularIdade = () => {
            let idadeAtual = dataAtu - dataNas;
            console.log(idadeAtual);
            setIdadeAtual(idadeAtual);
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

                <View style={styles.form}>
                    <Text>Calcular Idade</Text>
                    <TextInput inputMode='numeric' onChangeText={setDataNas} style={styles.textInput} placeholder='Digite o ano de nascimento' />
                    <TextInput inputMode='numeric' onChangeText={setDataAtu} style={styles.textInput} placeholder='Digite o ano atual' />
                    <TouchableOpacity onPress = {calcularIdade}>
                        <Text>
                            Calcular
                        </Text>
                    </TouchableOpacity>
                    <Text>A idade atual é {idadeAtual}</Text>
                </View>
            </View>)
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        form: {
            width: width ,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
        },
        textInput: {
            padding: 5,
            width: 200,
            height: 40,
            borderWidth: 1,
            borderColor: '#006eff',
            borderRadius: 3,  
        }
      });