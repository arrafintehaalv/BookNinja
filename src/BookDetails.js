import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#000007',
  },
  container: {
    margin: '10%',
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBookDetails: {
    fontSize: 30,
    color: '#5b005b',
    paddingBottom: '10%',
  },
  textDetail: {
    fontSize: 18,
    color: '#abc',
  },
  textDetailPlaceholder: {
    fontSize: 22,
    color: 'green',
  },
  contentWrapper: {
    paddingBottom: '5%',
  }
});

const BookDetails = ({ navigation }) => {
  const title = navigation.getParam('title', '');
  const author = navigation.getParam('author', '');
  const text = navigation.getParam('text', '');
  const created_at = navigation.getParam('created_at', '');
  const updated_at = navigation.getParam('updated_at', '');
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.detailsWrapper}>
            <Text style={styles.textBookDetails}>Book Details</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.textDetailPlaceholder}>Title:</Text>
            <Text style={styles.textDetail}>{title}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.textDetailPlaceholder}>Author:</Text>
            <Text style={styles.textDetail}>{author}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.textDetailPlaceholder}>Description:</Text>
            <Text style={styles.textDetail}>{text}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.textDetailPlaceholder}>Created At:</Text>
            <Text style={styles.textDetail}>{created_at}</Text>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.textDetailPlaceholder}>Updated At:</Text>
            <Text style={styles.textDetail}>{updated_at}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default BookDetails;
