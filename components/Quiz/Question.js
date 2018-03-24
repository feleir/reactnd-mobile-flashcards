import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, Animated } from 'react-native'

import { red, green } from '../../utils/colors'
import styles from './styles'

export default class Question extends Component {
    state = {
        showQuestion: true,
        bounceValue: new Animated.Value(1)
    }

    componentWillReceiveProps() {
        this.setState(() => ({ showQuestion: true }))
    }
    flipCard = () => {
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.5}),
            Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start()
        this.setState(state => ({ showQuestion: !state.showQuestion }))
    }

    render() {
        const { question, handleAnswer, index, length } = this.props
        const { showQuestion, bounceValue } = this.state

        const cardText = showQuestion ? question.question : question.answer
        const buttonText = showQuestion ? 'Show answer' : 'Show question'

        return (
            <View style={styles.card}>
                <Text style={styles.text}>{`${index + 1} / ${length}`}</Text>
                <Animated.View  style={[styles.cardTextView, { transform: [{scale: bounceValue}] }]}>
                    <TouchableOpacity onPress={this.flipCard}>
                        <Text style={[styles.text, styles.header]}>{cardText}</Text>
                        <Text style={[styles.text, styles.flipButton, styles.separatedItem]}>
                            {buttonText}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
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
