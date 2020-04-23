import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#000007',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontSize: 30,
    color: '#5b005b',
  },
  textBookNinja: {
    fontSize: 45,
    color: '#5c3276',
  },
  lowerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  textRegister: {
    fontSize: 30,
    color: '#551034',
  },
  textLogin: {
    fontSize: 30,
    color: '#551034',
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.textWelcome}>Welcome To</Text>
          <Text style={styles.textBookNinja}>BookNinja</Text>
        </View>
        <View style={styles.lowerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationPage')}>
            <Text style={styles.textRegister}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
