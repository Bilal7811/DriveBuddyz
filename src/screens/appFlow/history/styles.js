import {StyleSheet} from 'react-native';
import {fontFamily} from '../../../services';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  headerView:{
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical:15,
  },

  headerInnerview: {
    flex:0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 40,
    fontFamily: fontFamily.appTextBold,
  },
  inheaderView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextOne: {
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  firtSection: {
    flex: 2,
    backgroundColor: '#F8F8F8',
  },
  secondSection: {
    position: 'absolute',
    top: 180,
    bottom: 100,
    left: 15,
    right: 15,
  },
});
