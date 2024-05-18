import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Buscar = () => {
  return (
    <View style={styles.container}>
       <Image source={{ uri: 'assets/darth-vader.jpg' }} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14213d',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    width: 230,
    height: 150,
    borderRadius: 5,
    border: '2px solid  #ffFF',
  }
});

export default Buscar;