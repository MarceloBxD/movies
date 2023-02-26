import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLoadMovies = async () => {
      setIsLoading(true);

      const req = await fetch('https://api.b7web.com.br/cinema/');
      const json = await req.json();

      if (json) {
        setMovies(json);
      }
      setIsLoading(false);
    };
    handleLoadMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="red" />
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              margin: 10,
              fontWeight: 'bold',
            }}>
            Carregando...
          </Text>
        </View>
      )}
      {!isLoading && (
        <View>
          <Text style={styles.text}>{movies.length} filmes 😊</Text>
          <FlatList
            data={movies}
            renderItem={({item}: any) => (
              <View
                style={{
                  gap: 10,
                  marginBottom: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Image
                  source={{uri: item.avatar}}
                  style={{width: 200, height: 200}}
                />
              </View>
            )}
            keyExtractor={item => item.titulo}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
