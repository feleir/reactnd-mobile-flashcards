import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import ListItemView from './ListItemView'
import AddDeckButton from './AddDeckButton'
import styles from './styles'
import { white } from '../../utils/colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDecks, deleteDeck } from '../../actions'


class Decks extends Component {
    static navigationOptions = ({ navigation }) => ({ 
        title: 'All quizzes',
        headerRight: <AddDeckButton navigation={navigation} />
     })

    componentDidMount() {
        this.props.getDecks()
    }

    render = () => {
        const { decks, navigation, deleteDeck } = this.props

        return (
            <View>
                <FlatList
                    style={styles.mainList}
                    data={decks}
                    renderItem={
                        ({item}) => <ListItemView 
                            deck={item}
                            onPress={() => navigation.navigate('Deck', { deck: item })} 
                            onDelete={(title) => deleteDeck(title)}
                            onStartQuiz={(questions) => navigation.navigate('Quiz', { questions })}
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
            questions: quiz.questions
        }
    })
    return {
        decks,
        navigation
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ getDecks, deleteDeck }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Decks)