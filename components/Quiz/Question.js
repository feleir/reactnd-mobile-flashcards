import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'

import { red, green } from '../../utils/colors'
import styles from './styles'

export default class Question extends Component {
    state = {
        showQuestion: true,
    }

    componentWillReceiveProps() {
        this.setState(() => ({ showQuestion: true }))
    }
    flipCard = () => {
        this.setState(state => ({ showQuestion: !state.showQuestion }));
    }

    render() {
        const { question, handleAnswer, index, length } = this.props
        const { showQuestion } = this.state

        const cardText = showQuestion ? question.question : question.answer
        const buttonText = showQuestion ? 'Show answer' : 'Show question'

        return (
            <View style={styles.card}>
                <Text style={styles.text}>{`${index + 1} / ${length}`}</Text>
                <TouchableOpacity style={styles.cardTextView} onPress={this.flipCard}>
                    <Text style={[styles.text, styles.header]}>{cardText}</Text>
                    <Text style={[styles.text, styles.flipButton, styles.separatedItem]}>
                    {buttonText}
                    </Text>
                </TouchableOpacity>
                <Button
                    title="Correct"
                    color={green}
                    onPress={() => handleAnswer(true)}
                />
                <View style={styles.separatedItem}>
                    <Button
                    title="Incorrect"
                    color={red}
                    onPress={() => handleAnswer(false)}
                    />
                </View>
            </View>
        )
    }
} 
