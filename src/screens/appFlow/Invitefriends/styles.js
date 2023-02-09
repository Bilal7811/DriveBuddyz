import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../../services';

export const styles = StyleSheet.create({
  container: {
    height: 560,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerTitleAndIconView: {
    flexDirection: 'row',
    flex: 0.1,
    alignItems: 'center',
  },
  textOne: {
    fontFamily: fontFamily.appTextBold,
    flex: 2,
  },
  headerinnerSection: {
    flex: 1,
    alignItems: 'center',
  },
  textTwo: {
    fontFamily: fontFamily.appTextBold,
    fontSize: 33,
    textAlign: 'center',
    lineHeight: 40,
  },
  textThree: {
    textAlign: 'center',
    fontFamily: fontFamily.appTextRegular,
  },
  secondSection: {
    height: 218,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFeild: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    flex: 1,
  },
  imageView: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    height: 50,
    justifyContent: 'center',
  },
});
