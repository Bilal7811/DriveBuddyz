import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {appIcons, colors, fontFamily, IOSAndroid} from '../../services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import themeContext from '../../services/config/themeContext';
import {useSelector} from 'react-redux';

export default function HistoryComponent({onPress}) {
  const theme = useContext(themeContext);
  const userAdress = useSelector(state => state.location);

  return (
    <View style={{backgroundColor: theme.background, borderRadius: 15, ...IOSAndroid.elevation4, marginVertical:10}}>
      <View style={styles.firstSec}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: colors.grey,
            paddingHorizontal: 15,
            paddingVertical: 20,
            borderBottomWidth: 0.5,
          }}>
          <View style={styles.innerView}>
            <Image style={{marginLeft: 1}} source={appIcons.current} />
            <View style={styles.leftBorder} />
            <Ionicons color={'#F52D56'} name="location-sharp" size={25} />
          </View>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <Text numberOfLines={1} style={[styles.textTwo,{color:theme.color}]}>
                {userAdress.currentAddress}
              </Text>
            </View>
            <View>
              <Text numberOfLines={1} style={[styles.textTwo,{color:theme.color}]}>
                {userAdress.pickupAddress}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 15,
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{marginRight: 5}} source={appIcons.money} />
            <Text style={[styles.textTwo,{color:theme.color}]}>$75.00</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.textTwo,{color:theme.color, fontSize:18}]}>Confrim</Text>
            <Ionicons size={24} name={'chevron-forward'} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstSec: {
    height: 170,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  innerView: {
    justifyContent: 'space-between',
    flex: 0.1,
    paddingRight: 3,
    alignItems: 'center',
  },
  leftBorder: {
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    height: 29,
    borderStyle: 'dotted',
  },

  textOne: {
    color: colors.grey,
    fontFamily: fontFamily.appTextBold,
    fontSize: 14,
  },
  textTwo: {
    color: colors.black,
    fontFamily: fontFamily.appTextBold,
    fontSize: 16,
  },
});
