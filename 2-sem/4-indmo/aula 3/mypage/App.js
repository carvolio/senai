import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, marginBottom: 65}}>My Page</Text>
      <Image 
        source={{uri:"assets/IMG1.jpg"}}
        style={styles.image}>
      </Image>
      <Text style={{fontSize: 25, margin: 20}}>Guilherme Carvalho de Oliveira</Text>
      <Text style={{fontSize: 20, marginTop: 20}}>Jaguariúna-SP, 22 Anos</Text>
      <Text style={{fontSize: 20}}>gui.car.dev@gmail.com</Text>
      <Text style={{fontSize: 20, marginTop: 45}}>Técnico em Desenvolvimento de Sistemas - A Concluir em 2024</Text>
      <Text style={{fontSize: 20}}>Técnico em Quimíca - ETEC João Belarmino - Completo em 2018</Text>
      <Text style={{fontSize: 20}}>Ensino Médio - ETEC João Belarmino - Completo em 2018</Text>
      <a style={{fontSize: 22, marginTop: 25}} href="https://github.com/caroliflow">Github</a>
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
  image: {
    width: 200, 
    height: 200,
    borderRadius: 100, 
  }
});

