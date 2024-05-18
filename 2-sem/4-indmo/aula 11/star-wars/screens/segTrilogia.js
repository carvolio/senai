import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Buscar = () => {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'assets/segtrilogia.jpg' }} style={styles.image}/>
        <Text style={styles.text1}>República em Ruínas: A Ascensão dos Separatistas na Trilogia Prequela de Star Wars</Text>
        <Text style={styles.text2}>Na trilogia prequela de Star Wars, mergulhamos em um período turbulento da galáxia, onde a República Galáctica se encontra em declínio e a sombra da guerra se aproxima. A Força está dividida, a paz está ameaçada e o futuro da galáxia paira incerto.

Acompanhamos a ascensão de Anakin Skywalker, um jovem Jedi com um destino grandioso e um passado marcado pela tragédia. Testemunhamos a formação da República Separatista, liderada pelo misterioso Conde Dooku, e a eclosão das Guerras Clônicas, um conflito épico que colocará à prova a lealdade, a bravura e os próprios laços da Força.

Em meio à guerra, heróis como Obi-Wan Kenobi, Mace Windu e Yoda lutam para manter a paz e proteger a República, enquanto personagens como Padmé Amidala e Palpatine navegam pelas complexas intrigas políticas que ameaçam consumir tudo. Prepare-se para reviver batalhas épicas, duelos de sabres de luz eletrizantes e momentos de grande drama, enquanto desvendamos os segredos que levarão à ascensão do Império e à queda da República.</Text>
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