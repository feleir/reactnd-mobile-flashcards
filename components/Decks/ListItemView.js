import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default ListItemView = ({ deck, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.listItem}
            onPress={() => onPress()}
        >
            <Text>{deck.title}</Text>
            <Text>{deck.questions} cards.</Text>
        </TouchableOpacity>
    )
}