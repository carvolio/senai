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

const user = {
    username: "user",
    pass: "123"
}

export default function telaEscolha({ navigation }) {

    const [username, setUsername] = React.useState('user')
    const [pass, setPass] = React.useState('123')

    const validaUsuario = () => {
        if (pass === user.pass && username === user.username) {
            navigation.navigate("telaEscolha", { name: 'telaEscolha' })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Formulario de cadastro</Text>
                <MaskInput
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    value={username}
                    placeholder="Digite seu usuario"
                />
                <MaskInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPass(masked)}
                    value={pass}
                    placeholder="Digite sua senha"
                    keyboardType="inputMode"
                />
                <TouchableOpacity onPress={validaUsuario}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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