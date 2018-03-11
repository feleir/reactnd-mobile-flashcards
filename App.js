import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import decksReducer from './reducers'

import Navigator from './components/Navigator'
import AppStatusBar from './components/AppStatusBar'

const store = createStore(
  decksReducer,
  applyMiddleware(thunk)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar barStyle='light-content' backgroundColor="#5E8D48" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
