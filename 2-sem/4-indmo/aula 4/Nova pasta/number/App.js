import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import { useState } from 'react';

const icon = require("./assets/icon.png");
export default function App() {
  const [ habilitado, setHabilitado ] = new useState(false);
  const habilitar = () => {
    setHabilitado(!habilitado);
  };
  return (
    <View style={styles.container}>
      <Switch value={habilitado} onValueChange={ habilitar }/>
      <Image
        source={{ uri:(habilitado) ? "./assets/one.png" : "./assets/zero.png" }}
        style={styles.lampada}
      />
      <Text>By Guilherme Carvalho</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lampada: {
    margin: 40,
    width: 200,
    height: 200,
  }
});