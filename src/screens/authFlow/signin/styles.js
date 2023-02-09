import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../../services';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal:20,
        paddingVertical:20,
    },
    text:{
        fontSize:14,
        fontFamily:fontFamily.appTextRegular,
        marginBottom:10
    }
})