import { StyleSheet } from 'react-native'
import { white } from '../../utils/colors'
import t from 'tcomb-form-native'

const Form = t.form.Form

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: white,
    }
})

export const formStyles = {
    ...Form.stylesheet,
    textbox: {
        ...Form.stylesheet.textbox,
        normal: {
            ...Form.stylesheet.textbox.normal,
            height: 100
        },
        error: {
            ...Form.stylesheet.textbox.error,
            height: 100
        }
    }
}