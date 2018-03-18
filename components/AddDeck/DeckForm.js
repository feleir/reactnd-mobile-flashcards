import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import t from 'tcomb-form-native'

import { styles, formStyles } from './styles'

const DeckModel = t.struct({
    title: t.String,
})

const Form = t.form.Form

const options = {
    auto: 'placeholders',
    fields: {
        title: {
            error: 'Please enter a valid deck title.',
            multiline: true,
            numberOfLines: 1,
            blurOnSubmit: false
        },
    }
}

export default class QuestionForm extends Component {
    submit = () => {
        const formValue = this._form.getValue()
        if (formValue) {
            const { title } = formValue
            this.props.onSubmit(title)
        }        
    }

    render() {
        return (
            <View style={styles.container}>
                <Form 
                    type={DeckModel} 
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