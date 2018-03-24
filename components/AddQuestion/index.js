import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardForm from './CardForm'
import { addCardToDeck } from '../../actions'

class AddCard extends Component {
    submit = ({ question, answer }) => {
        const { title, addCardToDeck, navigation } = this.props
        addCardToDeck({title, question, answer })
        navigation.goBack()
    }

    render() {
        return (
            <CardForm onSubmit={(question) => this.submit(question)} />
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { title } = navigation.state.params

    return { title }
}
  
const mapDispatchToProps = (dispatch) => bindActionCreators({ addCardToDeck }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)