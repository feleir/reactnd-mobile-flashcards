import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { purple } from '../../utils/colors'

import Question from './Question'
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications'
import styles from './styles'

const initialState = {
  isOver: false,
  index: 0,
  correctAnswersNumber: 0
}

class Quiz extends Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  }

  static navigationOptions = () => ({ title: 'Quiz' })

  state = initialState

  handleAnswer = isCorrect => {
    this.setState((prevState, props) => {
      const { questions } = props
      const isOver = prevState.index === questions.length - 1

      if (isOver) {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(9)
        tomorrow.setMinutes(0)

        clearLocalNotification()
          .then(() => setLocalNotification(tomorrow))
      }

      return {
        isOver,
        index: prevState.index + (isOver ? 0 : 1),
        correctAnswersNumber: prevState.correctAnswersNumber + (isCorrect ? 1 : 0)
      }
    })
  }

  restart = () => this.setState(initialState)

  render() {
    const { questions, navigation } = this.props
    const { isOver, index, correctAnswersNumber } = this.state
    const question = questions[index]

    if (isOver) {
      const correctAnswersPercent = Math.round(correctAnswersNumber / questions.length * 100)

      return (
        <View style={styles.view}>
          <View style={styles.cardTextView}>
            <Text style={[styles.text, styles.header]}>
              {`Results: ${correctAnswersPercent}% of correct answers`}
            </Text>
          </View>
          <Button title="Back to Deck" onPress={() => navigation.goBack()} />
          <View style={styles.separatedItem}>
            <Button
              title="Restart Quiz"
              color={purple}
              onPress={this.restart}
            />
          </View>
        </View>
      )
    }

    return (
      <View style={styles.view}>
        <Question 
            question={question}
            handleAnswer={this.handleAnswer} 
            index={index}
            length={questions.length}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => {
    const { questions } = navigation.state.params

    return { questions }  
}

export default connect(mapStateToProps)(Quiz)