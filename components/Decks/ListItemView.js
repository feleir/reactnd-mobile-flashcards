import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'
export default ListItemView = ({ deck, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.listItem}
            onPress={() => onPress()}
        >
            <Text style={styles.listItemTitle}>{deck.title}</Text>
            <Text style={styles.listItemQuestionCount}>{deck.questions} cards.</Text>
        </TouchableOpacity>
    )
}