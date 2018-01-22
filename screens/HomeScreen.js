import React, { Component } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements"; // 0.19.0
import { Constants } from 'expo';
import "@expo/vector-icons"; // 6.2.2

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=100");
    const json = await response.json();
    this.setState({ data: json.results });
  };
  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <ListItem
                roundAvatar
                avatar={{ uri: item.picture.thumbnail }}
                title={`${item.name.title} ${item.name.first} ${item.name.last}`}
                subtitle={ `${item.cell}`}
              />}
          />
        </List>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});