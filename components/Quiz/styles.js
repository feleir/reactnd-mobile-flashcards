import { StyleSheet } from 'react-native'
import { lightBlack, red } from '../../utils/colors'

export default styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 50
    },
    card: { 
        flex: 1 
    },
    cardTextView: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        alignSelf: 'stretch',
        textAlign: 'center',
        color: lightBlack
    },
    flipButton: {
        color: red
    },
    header: {
        fontSize: 40
    },
    separatedItem: {
        marginTop: 10
    }
})