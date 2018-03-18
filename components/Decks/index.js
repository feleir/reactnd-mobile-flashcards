import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import ListItemView from './ListItemView'
import AddDeckButton from './AddDeckButton'
import styles from './styles'
import { white } from '../../utils/colors'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchDecks } from '../../actions'


class Decks extends Component {
    static navigationOptions = ({ navigation }) => ({ 
        title: 'All quizzes',
        headerRight: <AddDeckButton navigation={navigation} />
     })

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
                            onPress={() => navigation.navigate('Deck', { deck: item })} 
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