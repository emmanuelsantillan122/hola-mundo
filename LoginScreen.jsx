import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const validarLogin = () => {
    if (email === 'emmanuel@gmail.com' && password === 'hola123') {
      console.log('Inicio de sesión exitoso. Usuario:', email);
      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } else {
      console.log('Credenciales incorrectas. Usuario:', email);
      Alert.alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Sales</Text>

      <Image source={require('../../assets/avatar/autos1.png')} style={styles.image} />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Iniciar sesión" onPress={validarLogin} color="red" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Corrección: era backgroundI, se cambió a backgroundColor
  },
  title: {
    fontSize: 40,
    fontStyle: 'italic',
    marginBottom: 50,
    backgroundColor: 'red',
    borderRadius: 80,
    color: 'white'
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 70,
    borderRadius: 100,
  },
  form: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 80,
  },
});

export default LoginForm;
