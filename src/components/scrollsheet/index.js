import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Scrollsheet = ({navigation, port, setVisible, sheetPosition}) => {
  // Lat Lng Covert into Degrees
  function toDegreesMinutesAndSeconds(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + '" ' + minutes + "' " + seconds + '" ';
  }

  function convertDMS(lat, lng) {
    var latitude = toDegreesMinutesAndSeconds(lat);
    var latitudeCardinal = lat >= 0 ? 'N' : 'S';

    var longitude = toDegreesMinutesAndSeconds(lng);
    var longitudeCardinal = lng >= 0 ? 'E' : 'W';

    return (
      latitude +
      ' ' +
      latitudeCardinal +
      '\b                                \b' +
      longitude +
      ' ' +
      longitudeCardinal
    );
  }

  const latLngInDegree = convertDMS(port?.lat, port?.lng);

  const handleBookNow = () => {
    setVisible(0);
    navigation.navigate('BookNow', {portDetail: port});
  };

  return (
    <KeyboardAwareScrollView style={styles.mainView}>
      <View>
        <Text style={styles.namePort}>{port?.name}</Text>
      </View>

      <View style={{marginTop: 0}}>
        <Text numberOfLines={6} style={styles.paraTxt}>{port?.discription}</Text>
      </View>
      <View style={styles.direcView}>
        <BottomSheetFlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={port?.PortPictures}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={styles.imglist} key={index}>
              <Image
                // resizeMode={'contain'}
                style={sheetPosition === 2 ? styles.imgStl2 : styles.imgStl1}
                source={{uri: item}}
              />
            </View>
          )}
        />
      </View>

      {/* <View style={[styles.grayBar]} /> */}

      {/* {sheetPosition === 2 && (
        <Animatable.View
          animation={'fadeIn'}
          duration={500}
          direction="alternate"
          iterationCount={1}>
          <Text style={styles.dtlTxt}>Other Details</Text>
        </Animatable.View>
      )} */}
      {sheetPosition === 2 && (
        <Animatable.View
          animation={'slideInUp'}
          duration={500}
          direction="alternate"
          iterationCount={1}>
          <View style={styles.facBtm} />
          <View style={{marginHorizontal: 16, marginVertical: 10}}>
            <Text style={styles.cordTxt}>Coordinates</Text>
            <Text style={styles.latlongTxt}>{latLngInDegree}</Text>
            <View style={styles.grayBar1} />
          </View>
          <View style={styles.rateView}>
            <Text style={styles.rateTxt}>Rates/Night</Text>
            <Text style={styles.tftyTxt}>${port?.ratePerNight}</Text>
          </View>
          <View style={styles.line} />
          <TouchableOpacity style={styles.buttonView} onPress={handleBookNow}>
            <Text style={styles.bookTxt}>Book Now</Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  imglist: {
    justifyContent: 'space-between',
    marginTop: 3,
    marginHorizontal: 7,
  },
  borderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '3%',
    width: '13%',
    marginHorizontal: 15,
    marginTop: 10,
  },
  showerview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#376FCC',
    marginHorizontal: 6,
    width: '190%',
    paddingLeft: 3,
    height: '150%',
  },

  fuelview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#376FCC',
    marginHorizontal: 6,
    width: '220%',
    height: '150%',
  },

  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD8AB',
    borderRadius: 24,
    alignSelf: 'center',
    height: responsiveHeight(5.5),
    width: responsiveWidth(30),
    justifyContent: 'center',
    marginVertical: 15,
  },
  bookTxt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  mainView: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
  },
  namePort: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginHorizontal: 16,
  },
  paraTxt: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    lineHeight: 21,
    marginHorizontal: 14,
  },
  direcView: {
    flexDirection: 'row',
    marginLeft: '2%',
  },
  imgStl1: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    borderRadius: 100,
  },

  imgStl2: {
    height: 90,
    width: responsiveWidth(38),
    borderRadius: 10,
  },

  rateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: '1%',
  },
  rateTxt: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  tftyTxt: {
    color: '#376FCC',
    fontFamily: 'Poppins-Bold',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    opacity: 0.1,
    width: responsiveWidth(93),
    alignSelf: 'center',
  },
  grayBar1: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    opacity: 0.1,
    width: responsiveWidth(93),
    alignSelf: 'center',
  },
  grayBar: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    opacity: 0.1,
    marginTop: 11,
  },
  facView: {
    height: responsiveHeight(9),
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
  },
  facTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    alignSelf: 'flex-start',
    color: '#000',
  },
  facBtm: {
    marginTop: 20,
    width: responsiveWidth(93),
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    opacity: 0.1,
    alignSelf: 'center',
  },
  cordTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#000',
  },
  latlongTxt: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 3,
    fontSize: 14,
    color: '#181818',
    marginStart: 10,
  },
  dtlTxt: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: 13,
    marginBottom: 13,
    color: '#000000',
  },
});

export default Scrollsheet;
// white_check_mark
// eyes
// raised_hands
// React
// Reply








