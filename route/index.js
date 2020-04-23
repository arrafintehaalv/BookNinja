import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from '../src/App';
import RegistrationPage from '../src/RegistrationPage';
import LoginPage from '../src/LoginPage';
import HomeScreen from '../src/HomeScreen';
import BookList from '../src/BookList';
import BookDetails from '../src/BookDetails';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RegistrationPage,
    LoginPage,
    BookList,
    BookDetails,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
