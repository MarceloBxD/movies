import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Crystal from '../assets/crystal.jpg';

export default function Home({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState([]);
  alert(JSON.stringify(users));

  let passwordAreEquals = password === confirmPassword;
  const validate = () => {
    if (email === '' && password === '' && confirmPassword === '') {
      alert('Preencha os campos!');
    } else if (password === '') {
      alert('Preencha o campo senha!');
    } else if (confirmPassword === '') {
      alert('Preencha o campo confirmar senha!');
    } else if (!passwordAreEquals) {
      alert('As senhas não são iguais!');
    } else {
      alert('Cadastro realizado com sucesso!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsers([...users, {email, password}]);
    }
  };

  const handleSignUp = () => {
    validate();
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={Crystal} />
        <Text
          style={{
            alignSelf: 'center',
            paddingTop: 50,
            fontWeight: '500',
            fontSize: 18,
          }}>
          Crie sua conta para ter acesso as nossas dietas!
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
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={t => setConfirmPassword(t)}
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
        onPress={() => navigation.navigate('HomeLogin')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/next.png')}
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
