import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {appIcons, colors, fontFamily, IOSAndroid} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';

export default function PickupComponent({onPress}) {
  return (
    <View style={styles.mainContainerPadding}>
      <View style={styles.firstSec}>
        <View style={styles.innerView}>
          <Image style={{marginLeft: 1}} source={appIcons.current} />
          <View style={styles.leftBorder} />
          <Ionicons color={'#AB0000'} name="location-sharp" size={25} />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.textOne}>Select pickup</Text>
            <Text style={styles.textTwo}>My current location</Text>
          </View>
          <Pressable onPress={onPress}>
            <Text style={styles.textOne}>Destination</Text>
            <Text style={styles.textTwo}>Select your destination</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 20}}
          horizontal={true}>
          <Pressable style={styles.suggestionView}>
            <Text style={styles.suggestionText}>University of Washington</Text>
          </Pressable>
          <Pressable style={styles.suggestionView}>
            <Text style={styles.suggestionText}>University of Washington</Text>
          </Pressable>
          <Pressable style={styles.suggestionView}>
            <Text style={styles.suggestionText}>University of Washington</Text>
          </Pressable>
          <Pressable style={styles.suggestionView}>
            <Text style={styles.suggestionText}>University of Washington</Text>
          </Pressable>
          <Pressable style={styles.suggestionView}>
            <Text style={{padding: 10}}>University of Washington</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerPadding: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  firstSec: {
    flexDirection: 'row',
    height: 104,
  },
  innerView: {
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 8,
    alignItems: 'center',
  },
  leftBorder: {
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    height: 35,
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
  suggestionView: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f5f5f5',
  },
  suggestionText: {
    padding: 10,
    fontFamily: fontFamily.appTextRegular,
  },
});
