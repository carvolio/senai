import {
    StyleSheet,
    Text,
    View,
    telaCalculo,
    component,
    TextInput,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';
    import React from 'react';
    import MaskInput from 'react-native-mask-input';

    const {width, height } = Dimensions.get('screen')
  
    const user = [
      {username: "user1", password: "password1"},
      {username: "user2", password: "password2"},
      {username: "user3", password: "password3"},
    ];

    export default function Login({navigation}) {
        const [username, setUsername] = React.useState(' ');
        const [password, setPassword] = React.useState(' ');
        
        const validation = () => {
            if (username === 'user1' && password === 'password1') {
                navigation.navigate('telaCalculo', {name: 'telaCalculo'});
            } else if (username === 'user2' && password === 'password2') {
                navigation.navigate('telaCalculo', {name: 'telaCalculo'});
            } else if (username === 'user3' && password === 'password3') {
                navigation.navigate('telaCalculo', {name: 'telaCalculo'});
            } else {
                console.error('Invalid username or password');
            }
        };

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.textInput} onChangeText={setUsername} placeholder='Digite o usuário'/>
                    <TextInput style={styles.textInput} onChangeText={setPassword} placeholder='Digite a senha'/>
                    <TouchableOpacity onPress = {validation}>
                        <Text>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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