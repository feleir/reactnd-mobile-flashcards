import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import decksReducer from './reducers'

import Navigator from './components/Navigator'
import { setLocalNotification } from './utils/notifications'

const store = createStore(
  decksReducer,
  applyMiddleware(thunk)
)

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true)

    const today = new Date()
    today.setMinutes(today.getMinutes() + 1)

    setLocalNotification(today)
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
