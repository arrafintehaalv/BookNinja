import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { GlobalVariable } from '../utility/utility';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#000007',
  },
  headerWrapper: {
    alignItems: 'center',
    paddingVertical: '10%',
  },
  textBook: {
    color: '#abc',
    fontSize: 30,
  },
  textIndividualBook: {
    color: 'green',
    paddingVertical: '3%',
    paddingHorizontal: '12%',
  },
});

const BookList = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  async function getBookList() {
    let TOKEN = await AsyncStorage.getItem(GlobalVariable.ACCESS_TOKEN);
    console.log('Token from Storage', TOKEN);
    return fetch('http://127.0.0.1:8081/api/books', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TOKEN,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('Hello From BookList', json);
        setData(json.success);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    getBookList();
  }, []);

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <Text style={styles.textBook}>All Books</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('BookDetails', {
                      title: item.title,
                      author: item.author,
                      text: item.text,
                      created_at: item.created_at,
                      updated_at: item.updated_at,
                    });
                  }}>
                  <Text style={styles.textIndividualBook}>
                    {item.id}. {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default BookList;
