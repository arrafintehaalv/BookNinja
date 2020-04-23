import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { resetAction } from '../utility/navigation';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000007',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '12%',
  },
  textRegistration: {
    fontSize: 30,
    color: '#5b005b',
  },
  registrationFormWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  inputStyle: {
    color: '#fff',
    borderColor: 'green',
    borderBottomWidth: 1,
    width: '70%',
  },
  buttonStyle: {
    bottom: 0,
    backgroundColor: '#1a2b3c',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  textButton: {
    fontSize: 20,
    color: '#abc',
  },
  scrollContainer: {
    width: '100%',
    marginBottom: '10%',
  },
});

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [dob, setDob] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  function registrationApi() {
    return fetch('http://127.0.0.1:8081/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        country: country,
        dob: dob,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Hello From registration', json);
        if (json.success) {
          alert('Successfully Registered!');
          navigation.dispatch(resetAction('Home'));
        } else if (json.error) {
          let allError = '';
          if (json.error.name) {
            allError += json.error.name.map((e) => e) + '\n';
          }
          if (json.error.email) {
            allError += json.error.email.map((e) => e) + '\n';
          }
          if (json.error.password) {
            allError += json.error.password.map((e) => e) + '\n';
          }
          if (json.error.country) {
            allError += json.error.country.map((e) => e) + '\n';
          }
          if (json.error.dob) {
            allError += json.error.dob.map((e) => e);
          }
          // alert(JSON.stringify(json.error));
          alert(allError);
        } else {
          alert('Email already taken');
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.headerWrapper}>
            <Text style={styles.textRegistration}>Registration Form</Text>
          </View>
          <View style={styles.registrationFormWrapper}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Name"
              placeholderTextColor="red"
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              placeholderTextColor="red"
              keyboardType="email-address"
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              placeholderTextColor="red"
              secureTextEntry
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="red"
              secureTextEntry
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setCountry(text)}
              value={country}
              placeholder="Country"
              placeholderTextColor="red"
              returnKeyType="next"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setDob(text)}
              value={dob}
              placeholder="Date of Birth(Ex: 25/10/1998)"
              placeholderTextColor="red"
              returnKeyType="done"
            />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => registrationApi()}>
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default RegistrationPage;
