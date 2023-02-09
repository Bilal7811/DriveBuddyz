import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  PixelRatio,
  Pressable,
} from 'react-native';
import Swiper from 'react-native-swiper';
import themeContext from '../../../services/config/themeContext';
import {appIcons, appImages, colors} from '../../../services/utilities';
import {styles} from './styles';
import {routes} from '../../../services';

export default function OnBoarding({navigation, route}) {
  const [index, setindex] = useState(null);
  const theme = useContext(themeContext);
  var size = 80;

  React.useEffect(() => {
    if (route.params) {
      setindex(route.params.index);
    }
  }, []);

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Swiper
        showsButtons={false}
        loop={false}
        alwaysBounceHorizontal={false}
        index={index == null ? 0 : index}
        bounces={false}
        dot={
          <View
            style={{
              backgroundColor: colors.lightgrey,
              width: 20,
              height: 5,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: colors.theme,
              width: 20,
              height: 5,
              borderRadius: 2,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        <View style={[styles.slide1, {backgroundColor: theme.background}]}>
          <Image
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
            source={appImages.swiper}
          />

          <Text style={[styles.textOne, {color: theme.color}]}>
            Request Ride
          </Text>
          <Text style={[styles.texttwo, {color: theme.color}]}>
            Request a ride get picked up by a nearby community driver{' '}
          </Text>
        </View>
        <View style={[styles.slide2, {backgroundColor: theme.background}]}>
          <Image
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
            source={appImages.swiperone}
          />
          <Text style={[styles.textOne, {color: theme.color}]}>
            Confirm Your Driver
          </Text>
          <Text style={[styles.texttwo, {color: theme.color}]}>
            Huge drivers network helps you find comforable, safe and cheap ride
          </Text>
        </View>
        <View style={[styles.slide3, {backgroundColor: theme.background}]}>
          <Image
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(size),
              height: PixelRatio.getPixelSizeForLayoutSize(size),
            }}
            source={appImages.swipertwo}
          />
          <Text style={[styles.textOne, {color: theme.color}]}>
            Track your ride
          </Text>
          <Text style={[styles.texttwo, {color: theme.color}]}>
            Know your driver in advance and be able to view current location in
            real time on the map
          </Text>
          <Pressable
            onPress={() => navigation.navigate(routes.user)}
            style={styles.Button}>
            <Text style={styles.ButtonText}>GET STARTED!</Text>
          </Pressable>
        </View>
      </Swiper>
    </View>
  );
}
