import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <View style={styles.container}>
      <Image
            source={require('../assets/images/directory.png')}
            style={{ width: 200 , height: 200 }}
          />
          <Text style={styles.gap}></Text>
          <Text style={styles.paragraph}>
            Maldives E-Directory is the most comprehensive and reliable E-Directory Service in Maldives.
         </Text>
         <Text style={styles.gap}></Text>
         <Text style={styles.paragraph}>
            We believe in great design and take pride in creating wonderful user experiences.
         </Text>
       <Text style={styles.gap}></Text>
         <Text style={styles.paragraph}>
            Maldives E Directory is updated through out the year giving the best search results for all users. 
         </Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 7,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});

