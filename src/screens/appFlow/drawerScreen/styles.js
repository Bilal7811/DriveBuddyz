import {StyleSheet} from 'react-native';
import {fontFamily} from '../../../services';

export const styles = StyleSheet.create({
  profileView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileIcon: {
    borderWidth: 1,
    borderRadius: 50,
  },

  iconStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  userName: {
    paddingTop: 10,
    fontFamily: fontFamily.appTextBold,
    fontSize: 16,
  },

  menuText:{
    fontSize: 16,
    fontFamily:fontFamily.appTextRegular
  }

});
