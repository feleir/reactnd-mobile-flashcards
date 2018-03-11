import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { connect } from 'react-redux'

const ListItemView = ({ quiz }) => {
    return (
        <View style={styles.listItem}>
            <Text>{quiz.title}</Text>
            <Text>{quiz.questions} cards.</Text>
        </View>
    )
}

class QuizList extends Component {
    render = () => {
        return (
            <View>
                <FlatList
                    style={styles.mainList}
                    data={this.props.quizes}
                    renderItem={({item}) => <ListItemView quiz={item} key={item.id} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainList: {
      paddingBottom: 130,
      marginBottom: 0
    },
    listItem: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: '#47315a',
        borderBottomWidth: 5
    }
  })

function mapStateToProps(state, { navigation }) {
    const quizes = Object.entries(state).map(([id, quiz]) => {
        return {
            id: id,
            title: quiz.title,
            questions: quiz.questions.length
        }
    })
    return {
        quizes
    }
}

export default connect(mapStateToProps)(QuizList)