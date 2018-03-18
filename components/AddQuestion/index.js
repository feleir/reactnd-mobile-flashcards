import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import QuestionForm from './QuestionForm'
import { addOrUpdateDeck } from '../../actions'

class AddCard extends Component {
    submit = (question) => {
        const { deck, addOrUpdateDeck, navigation } = this.props
        const updatedDeck = { ... deck }
        updatedDeck.questions.push(question)
        addOrUpdateDeck(updatedDeck)
        navigation.goBack()
    }

    render() {
        return (
            <QuestionForm onSubmit={(question) => this.submit(question)} />
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { deck } = navigation.state.params;

    return { deck };
}
  
const mapDispatchToProps = (dispatch) => bindActionCreators({ addOrUpdateDeck }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);  