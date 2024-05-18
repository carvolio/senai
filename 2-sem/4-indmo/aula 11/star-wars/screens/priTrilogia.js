import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Buscar = () => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: 'assets/pritrilogia.jpg' }} style={styles.image}/>
      <Text style={styles.text1}>Um Mundo de Possibilidades: Desvendando a Magia de Star Wars</Text>
      <Text style={styles.text2}>Em uma galáxia muito, muito distante, a Força nos une em uma jornada épica pela primeira trilogia de Star Wars. Prepare-se para desvendar os segredos do universo, explorar os mistérios da Força e reviver momentos inesquecíveis ao lado de heróis e vilões icônicos.

Neste curso imersivo, você embarcará em uma viagem profunda pela história, pelos personagens e pelos temas atemporais que consagraram a trilogia como um clássico atemporal. Através de análises aprofundadas, discussões enriquecedoras e a paixão de uma comunidade vibrante, você terá a oportunidade de ir além da superfície da narrativa e descobrir novas camadas de significado.

Junte-se a nós e prepare-se para ser transportado para um universo de aventura, ação e emoção! Explore a Força, desvende os mistérios da galáxia e descubra por que Star Wars continua a encantar e inspirar gerações após gerações.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14213d',
  },
  text1: {
    fontSize: 20,
    color: 'white',
    margin: 18,
  },
  text2: {
    fontSize: 17,
    color: 'white',
    margin: 18,
  },
  image: {
    width: 230,
    height: 150,
    borderRadius: 5,
    border: '2px solid  #9381FF',
  }
});

export default Buscar;