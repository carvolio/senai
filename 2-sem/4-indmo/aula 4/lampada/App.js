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
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch value={habilitado} onValueChange={ habilitar }/>
      <Image
        source={{ uri:(habilitado) ? "./assets/lampada1.png" : "./assets/lampada0.png" }}
        style={styles.lampada}
      />
      <Text>Open up App.js to start working on your app!</Text>
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
