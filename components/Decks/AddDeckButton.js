import React, { Component } from 'react'

import { TouchableOpacity, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

import styles from './styles'
import { white } from '../../utils/colors'

export default AddDeckButton = ({ navigation }) => {
    const isIOS = Platform.OS === 'ios'

    return (
        <TouchableOpacity
                onPress={() => navigation.navigate('AddDeck')}
                style={styles.addButton}>
            {isIOS && <Entypo name='plus' size={30} color={white} />}
            {!isIOS && <FontAwesome name='plus' size={30} color={white} />}
        </TouchableOpacity>
    )
}