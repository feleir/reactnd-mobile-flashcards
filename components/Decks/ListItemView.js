import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Platform } from 'react-native'
import Swipeable from 'react-native-swipeable'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import styles from './styles'
import { green, white, red } from '../../utils/colors'

export default ListItemView = ({ deck, onPress, onDelete, onStartQuiz }) => {
    const isIOS = Platform.OS === 'ios'
    const { title, questions } = deck 
    return (
        <Swipeable
            rightContent={(
                    <View style={[styles.rightSwipeItem, { backgroundColor: red }]}>
                        {isIOS && <Ionicons name='ios-remove' size={30} color={white} />}
                        {!isIOS && <FontAwesome name='remove' size={30} color={white} />}
                    </View>
                )
            }
            leftContent={(
                    <View style={[styles.leftSwipeItem, { backgroundColor: green }]}>
                        {isIOS && <Ionicons name='ios-checkmark' size={30} color={white} />}
                        {!isIOS && <FontAwesome name='check' size={30} color={white} />}
                    </View>
                )
            }
            onRightActionRelease={() => onDelete(title)}
            onLeftActionRelease={() => onStartQuiz(questions)}
        >
            <TouchableOpacity 
                style={styles.listItem}
                onPress={() => onPress()}
            >
                <Text style={styles.listItemTitle}>{title}</Text>
                <Text style={styles.listItemQuestionCount}>{questions.length} cards.</Text>
            </TouchableOpacity>
        </Swipeable>
    )
}