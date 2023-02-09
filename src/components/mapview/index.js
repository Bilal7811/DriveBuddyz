import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {appIcons, colors} from '../../services';
import Geolocation from '@react-native-community/geolocation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geocoder from 'react-native-geocoder';
import {useDispatch} from 'react-redux';
import {userLocation} from '../../redux/Slices/locationSlice';
import Statusbar from '../statusbar';
import {useSelector} from 'react-redux';
import SlideUpSheet from '../bottomsheet';

export default function MapViewComponent({
  data,
  driver,
  display,
  bottSheetHeight,
  gpsuse
}) {

useEffect(() => {
  // console.log("tyutyutyutyty")
  //   userDropLocation();
}, [userlocation])

  const [location, setlocation] = useState(null);
  const userlocation = useSelector(state => state.location);
  const [polylineDraw, setpolylineDraw] = useState([]);
  const dispatch = useDispatch();

  const userDropLocation = () => {
    if (userlocation.pickupLocation !== null) {
      setpolylineDraw([
        {
          latitude: userlocation.curentlocation?.latitude,
          longitude: userlocation.curentlocation?.longitude,
        },
        {
          latitude: userlocation.pickupLocation?.latitude,
          longitude: userlocation.pickupLocation?.longitude,
        },
      ]);
    }
  };

  const updateCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        if (position.coords !== '') {
          reverseGeoCodeing(position.coords);
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
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={[styles.container]}>
      <Statusbar />
      <MapView
        style={styles.map}
        scrollEnabled={true}
        zoomEnabled={true}
        initialRegion={{
          latitude: userlocation.curentlocation?.latitude,
          longitude: userlocation.curentlocation?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={location}>
        <Marker
          draggable={false}
          pinColor={colors.theme}
          coordinate={{
            latitude: userlocation.curentlocation?.latitude,
            longitude: userlocation.curentlocation?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {userlocation.pickupLocation == null ? (
            <View style={{padding: 10}}>
              <Image
                style={{height: 80, width: 80}}
                source={appIcons.currentIcon}
              />
            </View>
          ) : (
            <Image style={{height: 20, width: 20}} source={appIcons.current} />
          )}
        </Marker>

        {userLocation.pickupLocation !== null && (
          <Marker
            draggable={false}
            coordinate={{
              latitude: userlocation.pickupLocation?.latitude
                ? userlocation.pickupLocation?.latitude
                : 0,
              longitude: userlocation.pickupLocation?.longitude
                ? userlocation.pickupLocation?.longitude
                : 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            pinColor={colors.theme}>
            <Image
              style={{height: 30, width: 20, resizeMode: 'contain'}}
              source={appIcons.pinLocation}
            />
          </Marker>
        )}

        {userlocation.pickupLocation !== null &&(
        <Polyline
          coordinates={[
            {
              latitude: userlocation.curentlocation?.latitude,
              longitude: userlocation.curentlocation?.longitude,
            },
            {
              latitude: userlocation.pickupLocation?.latitude,
              longitude: userlocation.pickupLocation?.longitude,
            },
          ]}
          strokeColor="#000"
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
        )}
      </MapView>
      <View style={[styles.bottomSheetView, {top: bottSheetHeight}]}>
        {gpsuse == true && (
        <View
          style={{
            justifyContent: 'flex-end',
            paddingHorizontal: 15,
            height:80,
            alignItems: 'flex-end',
          }}>
          <Pressable
            style={styles.bottomGps}
            onPress={() => updateCurrentLocation()}>
            <MaterialCommunityIcons
              color={colors.black}
              name="crosshairs-gps"
              size={30}
            />
          </Pressable>
        </View>
        )}
        <SlideUpSheet display={display} data={data} driver={driver} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  firstSec: {
    position: 'absolute',
    justifyContent: 'flex-end',
    height: '100%',
    left: 0,
    right: 0,
  },
  bottomGps: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 6,
  },
  bottomSheetView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
