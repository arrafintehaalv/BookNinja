import React from 'react';
import RegistrationPage from './RegistrationPage';
import { createAppContainer } from 'react-navigation';
import AppNavigator from '../route/index';
const AppContainer = createAppContainer(AppNavigator);
const App = ({ navigation }) => {
  return (
    <>
      <AppContainer />
    </>
  );
};

export default App;
