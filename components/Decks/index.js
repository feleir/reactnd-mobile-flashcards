import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import ListItemView from './ListItemView'
import styles from './styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDecks } from '../../actions'


class Decks extends Component {
    componentDidMount() {
        this.props.fetchDecks()
    }

    render = () => {
        const { decks, navigation } = this.props

        return (
            <View>
                <FlatList
                    style={styles.mainList}
                    data={decks}
                    renderItem={
                        ({item}) => <ListItemView 
                            deck={item}
                            onPress={() => navigation.navigate('Deck', { item })} 
                        />
                    }
                    keyExtractor={(deck, index) => deck.title}
                />
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) =>  {
    const decks = Object.entries(state).map(([id, quiz]) => {
        return {
            id: id,
            title: quiz.title,
            questions: quiz.questions.length
        }
    })
    return {
        decks,
        navigation
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchDecks }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Decks)