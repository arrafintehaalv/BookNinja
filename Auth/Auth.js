import AsyncStorage from '@react-native-community/async-storage';
import { GlobalVariable } from '../utility/utility';
import { resetAction } from '../utility/navigation';

export const auth = async (res, nav) => {
  try {
    await AsyncStorage.setItem(GlobalVariable.ACCESS_TOKEN, res.success.token);
    nav.dispatch(resetAction('BookList'));
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
};
