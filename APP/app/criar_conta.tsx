import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const criar_conta = ({navigation}) => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [estaca, setEstaca] = useState('');
  const [alaRamo, setAlaRamo] = useState('');
  const [telemovel, setTelemovel] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    if (!validateEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, insira um endereço de email válido.');
      return;
    }

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

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Voltar</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.inputField}
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChangeText={text => setNomeCompleto(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Estaca"
        value={estaca}
        onChangeText={text => setEstaca(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Ala / Ramo"
        value={alaRamo}
        onChangeText={text => setAlaRamo(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Telemóvel"
        keyboardType="phone-pad"
        value={telemovel}
        onChangeText={text => setTelemovel(text)}
      />
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
    backgroundColor: '#fef7e8',
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    fontSize: 18,
    color: 'black',
  },
  inputField: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  createAccountButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: 'blue',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default criar_conta;
