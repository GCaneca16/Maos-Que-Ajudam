import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Conta criada com sucesso!');
        const user = userCredential.user;
        Alert.alert('Conta criada com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao criar conta:', error);
        Alert.alert('Erro ao criar conta:', error.message);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('Login realizado com sucesso!');
        const user = userCredential.user;
        Alert.alert('Login realizado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
        Alert.alert('Erro ao fazer login:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Esqueceu a password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputField: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  loginButton: {
    width: '80%',
    paddingVertical: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountButton: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default LoginScreen;
