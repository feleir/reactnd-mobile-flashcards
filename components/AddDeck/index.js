import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DeckForm from './DeckForm'
import { addDeck } from '../../actions'

class AddDeck extends Component {
    submit = (title) => {
        const { addDeck, navigation } = this.props
        addDeck(title)
        navigation.goBack()
    }

    render() {
        return (
            <DeckForm onSubmit={(title) => this.submit(title)} />
        )
    }
}

function mapStateToProps(state, { navigation }) {
    const { deck } = navigation.state.params

    return { deck }
}
  
const mapDispatchToProps = (dispatch) => bindActionCreators({ addDeck }, dispatch)

export default connect(null, mapDispatchToProps)(AddDeck)