import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { auth } from '../Auth/Auth';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#000007',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    color: '#fff',
    borderColor: 'green',
    borderBottomWidth: 1,
    width: '70%',
  },
  buttonStyle: {
    marginTop: '10%',
    backgroundColor: '#1a2b3c',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  loginForm: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%',
  },
  textButton: {
    fontSize: 20,
    color: '#abc',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 30,
    color: '#5b005b',
  },
});

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);
  function getLoginApi() {
    return fetch('http://127.0.0.1:8081/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Hello From json', json);
        alert(json.error ? json.error : 'Login Successful');
        if (!json.error) {
          auth(json, navigation);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.textLogin}>Login Form</Text>
        </View>
        <View style={styles.loginForm}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            placeholderTextColor="red"
            keyboardType="email-address"
            autoFocus={true}
            returnKeyType="next"
          />
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
            placeholderTextColor="red"
            secureTextEntry
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => getLoginApi()}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginPage;
