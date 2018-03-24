import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import t from 'tcomb-form-native'

import { styles, formStyles } from './styles'

const CardModel = t.struct({
    question: t.String,
    answer: t.String
})

const Form = t.form.Form

const options = {
    auto: 'placeholders',
    fields: {
        question: {
            error: 'Please enter a valid question.',
            multiline: true,
            numberOfLines: 3,
            blurOnSubmit: false,
            stylesheet: formStyles
        },
        answer: {
            error: 'Please enter a valid answer.',
            multiline: true,
            numberOfLines: 3,
            blurOnSubmit: false,
            stylesheet: formStyles
        }
    }
}

export default class CardForm extends Component {
    submit = () => {
        const formValue = this._form.getValue()
        if (formValue) {
            const { question, answer } = formValue

            this.props.onSubmit({ question, answer })
        }        
    }

    render() {
        return (
            <View style={styles.container}>
                <Form 
                    type={CardModel} 
                    ref={c => this._form = c}
                    options={options}
                />
                <Button
                    title="Submit"
                    onPress={this.submit}
                /> 
            </View>
        )
    }
}