import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIconView: {
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
        height: 60,
        justifyContent: 'space-between',
        flexDirection:'row',
        width: '100%',
        paddingHorizontal: 10,
        position: 'absolute',
        alignItems: 'center',
      },
    
      buttonView: {
        backgroundColor: 'white',
        borderRadius: 50,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
})