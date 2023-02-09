import React, {useState, useEffect, useRef, useCallback } from 'react';
import {View, Pressable,Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoder';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonWithIcon, Statusbar} from '../../../components';
import {appIcons, colors, fontFamily, routes} from '../../../services';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {userLocation} from '../../../redux/Slices/locationSlice';
import {useSelector} from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

export default function PickUpLocation({navigation, route}) {

  useFocusEffect(
  useCallback(() => {
    ref.current?.clear()
  }, []))
  
  useEffect(() => {
  }, [pickDropOff]);

  useEffect(() => {
  }, [formattedAddress]);

  const dispatch = useDispatch();
  const userCurrentLocation = useSelector(state => state.location);
  const [pickDropOff, setpickDropOff] = useState({
    latitude: userCurrentLocation.curentlocation.latitude,
    longitude: userCurrentLocation.curentlocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [formattedAddress, setformattedAddress] = useState(
    userCurrentLocation.currentAddress,
  );
  const [Address, setAddress] = useState('');
  const ref = useRef();

  const updateCurrentLocation = async () => {
    await Geolocation.getCurrentPosition(
      position => {
        setpickDropOff({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        reverseGeoCodeing(position);
      },
      error => {
        alert('Please turn on your location');
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 200000,},
    );
  };

  const reverseGeoCodeing = async data => {
    var NY = {
      lat: data.coords.latitude,
      lng: data.coords.longitude,
    };
    await Geocoder.geocodePosition(NY)
      .then(res => {
        setformattedAddress(res[0].formattedAddress);
      })
      .catch(err => console.log(err));
  };

  const reverseDragGeoCodeing = async data => {
    var NY = {
      lat: data.latitude,
      lng: data.longitude,
    };
    await Geocoder.geocodePosition(NY)
      .then(res => {
        setformattedAddress(res[0].formattedAddress);
      })
      .catch(err => console.log(err));
  };

  const userLocationData = () => { 
    dispatch(
      userLocation({
        curentlocation: userCurrentLocation.curentlocation,
        pickupLocation: pickDropOff,
        currentAddress: userCurrentLocation.currentAddress,
        pickupAddress: formattedAddress,
      }),
      navigation.navigate(routes.distance)
    );
  };

  const clearAddress = () => {
    setAddress('');
  };

  return (
    <View style={styles.mainContiner}>
      <Statusbar />
      <MapView
        style={styles.map}
        scrollEnabled={true}
        zoomEnabled={true}
        initialRegion={pickDropOff}
        region={pickDropOff}>
        <Marker
          draggable={true}
          coordinate={pickDropOff}
          pinColor={colors.theme}
          onDragStart={location => {
            setpickDropOff({
              latitude: location.nativeEvent.coordinate.latitude,
              longitude: location.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }}
          onDragEnd={location => {
            setpickDropOff({
              latitude: location.nativeEvent.coordinate.latitude,
              longitude: location.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
            reverseDragGeoCodeing({
              latitude: location.nativeEvent.coordinate.latitude,
              longitude: location.nativeEvent.coordinate.longitude,
            });
          }}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
        >
          <Image
              style={{height: 30, width: 20, resizeMode: 'contain'}}
              source={appIcons.pinLocation}
            />
          </Marker>
      </MapView>
      <GooglePlacesAutocomplete
        ref={ref}
        enableHighAccuracy={true}
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          setpickDropOff({
            latitude: details?.geometry.location?.lat,
            longitude: details?.geometry.location?.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          setformattedAddress(details.address_components);
        }}
        query={{
          key: 'AIzaSyA3KMurQ8cStIZjWxpu0d5bH5QsKGWUu00',
          language: 'en',
        }}
        onFail={error => console.error(error)}
        styles={{
          textInputContainer: {
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          textInput: {
            height: 52,
            borderRadius: 50,
            paddingHorizontal: 18,
            fontFamily: fontFamily.appTextExtraBold,
            fontWeight: '800',
          },
        }}
        textInputProps={{
          leftIcon: { type: 'font-awesome', name: 'chevron-left' },
          errorStyle: { color: 'red' },
        }}
        
      />
      <View>
        <View style={styles.firstSec}>
          <Pressable
            onPress={() => updateCurrentLocation()}
            style={styles.bottomGps}>
            <MaterialCommunityIcons
              color={colors.black}
              name="crosshairs-gps"
              size={30}
            />
          </Pressable>
        </View>
        <View style={styles.secondSec}>
            <ButtonWithIcon
              onPress={() => userLocationData()}
              borderRadius={1}
              color={colors.white}
              buttonTitle={'Apply'}
            />
        </View>
      </View>
    </View>
  );
}
