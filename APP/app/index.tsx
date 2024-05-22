import React, { createContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
//import * as Google from "expo-google-app-auth";

cost AuthContext = createContext({});
const config = {
  androidClientId:'',
  iosClientId: '',
  scopes:["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
}
export const AuthContext =({children}) =>{
  const signInWithGoogle = async() => {
     Google.logInAsync(config).then(async(logInResult)=>{
      if(logInResult.type === 'success'){
        //login....
      }
     })
  }
  return(
    <AuthContext.Provider
    value={{
      user: null,
      signInWithGoogle,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const LoginScreen = () => {
  const {signInWithGoogle} = useAuth();
  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Esqueceu a password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton}>
        <Text>Criar conta</Text>
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
    color: 'blue',
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
});

export default LoginScreen;
