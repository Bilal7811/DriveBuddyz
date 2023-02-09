import React, {useState, useEffect} from 'react';
import {View, Pressable, ActivityIndicator} from 'react-native';
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

export default function ManualLocation({navigation, route}) {
  useEffect(() => {
    reverseGeoCodeing();
  }, [formattedAddress]);

  const setMarkerDestination = route?.params;
  const [isLoading, setisLoading] = useState(false);
  const [formattedAddress, setformattedAddress] = useState([]);
  const [data, setdata] = useState({
    latitude: setMarkerDestination?.setMarkerDestination?.coords?.latitude,
    longitude: setMarkerDestination?.setMarkerDestination?.coords?.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const dispatch = useDispatch();

  const reverseGeoCodeing = () => {
    var NY = {
      lat: data.latitude,
      lng: data.longitude,
    };
    Geocoder.geocodePosition(NY)
      .then(res => {
        setformattedAddress(res[0].formattedAddress);
      })
      .catch(err => console.log(err));
  };

  const updateCurrentLocation = async () => {
    await Geolocation.getCurrentPosition(
      position => {
        setdata({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        alert('Please turn on your location');
        console.log(error);
      },

      {enableHighAccuracy: false, timeout: 200000},
    );
  };

  const userLocationData = () => {
    dispatch(
      userLocation({
        curentlocation: data,
        pickupLocation: null,
        currentAddress: formattedAddress,
        pickupAddress: null,
      }),
    );
    navigation.navigate(routes.userLogin);
  };

  return (
    <View style={styles.mainContiner}>
      <Statusbar />
      <MapView
        style={styles.map}
        scrollEnabled={true}
        zoomEnabled={true}
        initialRegion={{
          latitude:
            setMarkerDestination?.setMarkerDestination?.coords?.latitude,
          longitude:
            setMarkerDestination?.setMarkerDestination?.coords?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={data}>
        <Marker
          draggable={true}
          coordinate={data}
          image={appIcons.currentIcon}
          pinColor={colors.theme}
          onDragStart={location => {
            setdata({
              latitude: location.nativeEvent.coordinate.latitude,
              longitude: location.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }}
          onDragEnd={location => {
            setdata({
              latitude: location.nativeEvent.coordinate.latitude,
              longitude: location.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }}
          centerOffset={{x: -18, y: -60}}
          anchor={{x: 0.69, y: 1}}
        />
      </MapView>
      <GooglePlacesAutocomplete
        enableHighAccuracy={true}
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          setdata({
            latitude: details?.geometry.location?.lat,
            longitude: details?.geometry.location?.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
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
          {isLoading === true ? (
            <ActivityIndicator
              bool={isLoading}
              size="large"
              color="#6768AB"
              style={{marginTop: 40, paddingVertical: '6.8%'}}
            />
          ) : (
            <ButtonWithIcon
              onPress={() => userLocationData()}
              borderRadius={1}
              color={colors.white}
              buttonTitle={'Apply'}
            />
          )}
        </View>
      </View>
    </View>
  );
}
