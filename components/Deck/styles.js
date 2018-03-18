import { StyleSheet } from 'react-native'
import { lightBlack, gray, purple } from '../../utils/colors'

export default styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingBottom: 50,
        paddingHorizontal: 50,
    },
    deck: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 40,
        color: lightBlack,
    },
    cards: {
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 25,
        color: gray,
        marginTop: 5,
    },
    separatedButton: {
        marginTop: 10,
    }
})