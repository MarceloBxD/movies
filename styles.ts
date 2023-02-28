import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 10,
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderRadius: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  containerSinopsys: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  loginButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
});
