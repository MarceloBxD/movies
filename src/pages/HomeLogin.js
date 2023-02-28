import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

export default function HomeLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            alignSelf: 'center',
            paddingTop: 50,
            fontWeight: '500',
            fontSize: 18,
          }}>
          Entre com seu email e senha para acessar as dietas! 😊
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={t => setEmail(t)}
          style={styles.input}
          placeholder="marcos@email.com"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={t => setPassword(t)}
          style={styles.input}
          secureTextEntry
          placeholder="*******"
        />

        <Button
          onPress={() => handleSignUp()}
          color="#000"
          title="Finalizar Cadastro"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          left: 20,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../assets/left-arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginBottom: 10,
  },
  form: {
    marginTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 75,
  },
});
