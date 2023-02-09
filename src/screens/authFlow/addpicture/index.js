import React, {useContext, useState} from 'react';
import {View, Image, Text} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appIcons, appImages, colors, routes} from '../../../services';
import {ScreenHeader, ButtonWithIcon} from '../../../components';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { userSave } from '../../../redux/Slices/splashSlice';

export default function TakePhoto({navigation}) {
  const theme = useContext(themeContext);
  const dispatch = useDispatch()
  const [profileImage, setprofileImage] = useState(null);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setprofileImage(image.path);
    });
  };

  const userProfileImage = () => {
    dispatch(userSave({value: null , profileImage: profileImage}))
    navigation.navigate(routes.userLogin)
  }

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View
        style={[
          styles.firstSec,
          {backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white'},
        ]}>
        <ScreenHeader
          onPress={() => navigation.goBack()}
          skip={'Later'}
          onSkippress={() => navigation.navigate(routes.userLogin)}
        />
      </View>
      <View style={[styles.secondSec, {justifyContent: 'space-between'}]}>
        <View
          style={{
            paddingVertical: 30,
            alignItems: 'center',
            paddingHorizontal: 50,
          }}>
          {profileImage ? (
            <Image source={{uri: profileImage}} style={styles.imagesStyle} />
          ) : (
            <Image source={appImages.addprofile} />
          )}
          <Text style={[styles.textOne,{color:theme.color}]}>Add your photo</Text>
          <Text style={styles.textTwo}>
            Your photo will be used by your driver to identify you for safer
            rides.
          </Text>
        </View>
        {profileImage ? (
          <ButtonWithIcon
            onPress={() => userProfileImage()}
            color={colors.white}
            buttonTitle={'Next'}
          />
        ) : (
          <ButtonWithIcon
            onPress={() => openCamera()}
            color={colors.white}
            buttonTitle={'Take Photo'}
          />
        )}
      </View>
    </View>
  );
}
