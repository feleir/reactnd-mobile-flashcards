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
        borderBottomWidth: 5
    }
  })