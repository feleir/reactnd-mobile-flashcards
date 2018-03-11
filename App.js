import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import quizReducer from './reducers/quiz'

import QuizList from './components/QuizList'
import AppStatusBar from './components/AppStatusBar'

const store = createStore(quizReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar barStyle='light-content' backgroundColor="#5E8D48" />
          <QuizList />
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
