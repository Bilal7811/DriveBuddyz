import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonWithIcon from '../iconbutton';
import {colors, fontFamily, routes} from '../../services';
import { useNavigation } from '@react-navigation/native';

export default function ArrivedComponent() {
  const navigation = useNavigation()


  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>Your Driver is Arrived 1:00</Text>
      </View>
      <View style={styles.buttonView}>
        <ButtonWithIcon onPress={() => navigation.navigate(routes.review)} color={colors.white} buttonTitle={'Ok I am coming'} />
        <ButtonWithIcon onPress={() => navigation.navigate(routes.review)} color={colors.white} buttonTitle={'Wait 5 Minute'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  headerHeading: {
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    fontSize: 20,
  },
  buttonView: {
    paddingHorizontal: 15,
  },
});
