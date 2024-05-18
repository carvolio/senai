import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Buscar = () => {
    return (
      <View style={styles.container}>
          <Image source={{ uri: 'assets/tritrilogia.jpeg' }} style={styles.image}/>
        <Text style={styles.text1}>A Rebelião Contra o Império: Uma Luta pela Liberdade na Trilogia Sequela de Star Wars</Text>
        <text style={styles.text2}>Na trilogia sequela de Star Wars, a galáxia se encontra sob o domínio opressivo do Império Galáctico, liderado pelo cruel Darth Vader. Uma nova geração de heróis emerge para desafiar a tirania e restaurar a esperança em um universo dominado pelo medo.

Acompanhamos a jornada de Rey, uma jovem sucateira que descobre seus poderes na Força e se junta à luta da Resistência, liderada pela General Leia Organa. Ao lado de Finn, um antigo stormtrooper, e Poe Dameron, um piloto habilidoso, Rey enfrenta os desafios impostos pelo Império, incluindo a ameaça constante do Líder Supremo Kylo Ren, filho de Leia e Han Solo, que sucumbiu ao lado sombrio da Força.

Em meio à guerra, heróis como Luke Skywalker, agora um recluso atormentado por seu passado, e Chewbacca, o leal wookiee, retornam para auxiliar na luta pela liberdade. Testemunhamos batalhas espaciais épicas, duelos de sabres de luz eletrizantes e momentos de grande drama, enquanto a Força guia os heróis em sua busca por justiça e paz. A trilogia sequela explora temas como legado, redenção e a importância de lutar pelo que é certo, mesmo diante de obstáculos aparentemente insuperáveis. Prepare-se para se emocionar com a saga final da família Skywalker e celebrar a vitória da esperança sobre a tirania.</text>
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