import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appImages, colors, routes} from '../../../services';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import {useDispatch} from 'react-redux';
import {userLocation} from '../../../redux/Slices/locationSlice';
import {ButtonWithIcon} from '../../../components';

export default function Currentlocation({navigation}) {
  const theme = useContext(themeContext);
  const dispatch = useDispatch();

  const permissionIos = async () => {
    Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      pos => {
        updateCurrentLocation();
      },
      error => {
        Alert.alert('Failed', error.message, [
          {
            text: 'Ok',
            onPress: () => {
              {
              }
            },
          },
        ]);
      },
    );
  };

  const requestLocationPermission = async data => {
    if (Platform.OS === 'ios') {
      permissionIos();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'DriveBuyyz',
            message: "Allow DriveBuyyz to access this device's location",
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          updateCurrentLocation(data);
        } else {
          Alert.alert(
            'Failed',
            'Location permission denied. Please enable permission in app setting.',
            [
              {
                text: 'Ok',
              },
            ],
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const updateCurrentLocation = async data => {
    Geolocation.getCurrentPosition(
      position => {
        if (position.coords !== '') {
          if (data == 'manually') {
            navigation.navigate(routes.manualLocation, {
              setMarkerDestination: position,
            });
          } else {
            reverseGeoCodeing(position.coords);
          }
        } else {
          alert('Check Internet Connection');
        }
      },
      error => {
        console.log(error);
        alert('Please turn on your location');
      },

      {enableHighAccuracy: true, timeout: 200000},
    );
  };

  const reverseGeoCodeing = async data => {
    var NY = {
      lat: data.latitude,
      lng: data.longitude,
    };
    await Geocoder.geocodePosition(NY)
      .then(res => {
        if (res.length !== 0) {
          dispatch(
            userLocation({
              curentlocation: data,
              pickupLocation: null,
              currentAddress: res[0].formattedAddress,
              pickupAddress: null,
            }),
          );
          navigation.navigate(routes.userLogin);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={styles.firstSec}>
        <Image source={appImages.carLocation} />
      </View>
      <View style={styles.secondSec}>
        <Text style={[styles.textOne, {color: theme.color}]}>
          Hi, nice to meet you!
        </Text>
        <Text style={[styles.texttwo, {color: '#C8C7CC'}]}>
          Choose your location to start find restaurants around you.
        </Text>
        <ButtonWithIcon
          onPress={() => requestLocationPermission()}
          marginTop={40}
          marginBottom={50}
          borderColor={colors.theme}
          backgroundColor={theme.background}
          iconName={'paper-plane'}
          color={colors.theme}
          buttonTitle={'Use Current Location'}
          paddingHorizontal={45}
        />
        <Text
          onPress={() => requestLocationPermission('manually')}
          style={styles.bottomText}>
          Select it manually
        </Text>
      </View>
    </View>
  );
}
