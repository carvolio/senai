import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 10}}>Senai 2024</Text>
      <StatusBar style="auto" />
      <Image 
        source={{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6caca08-29da-4ba0-8efe-f3d61e0cc332/deb8vyj-05ba93c9-6ce6-474e-9a35-b22b3028442d.png/v1/fill/w_894,h_894,q_70,strp/pochita___chainsaw_man_by_charrtime_deb8vyj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2M2Y2FjYTA4LTI5ZGEtNGJhMC04ZWZlLWYzZDYxZTBjYzMzMlwvZGViOHZ5ai0wNWJhOTNjOS02Y2U2LTQ3NGUtOWEzNS1iMjJiMzAyODQ0MmQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UcgWb7rEtGnXIJ3UYa7vjiWuIetZDyKfFnbvFNVtjP8"}}
        style={{height: 500, width: 500, borderRadius: 5}}>
      </Image>
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
});
