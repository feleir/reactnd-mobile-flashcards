import { StyleSheet } from 'react-native'
import { white, lightGray } from '../../utils/colors'

export default styles = StyleSheet.create({
    mainList: {
      paddingBottom: 130,
      marginBottom: 0
    },
    listItem: {
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: lightGray,
        borderBottomWidth: 1,
    },
    listItemTitle: {
      fontSize: 40
    },
    listItemQuestionCount: {
      fontSize:25
    },
    addButton: {
      marginRight: 10
    },
    rightSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20
    },
    leftSwipeItem: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20
    }
  })