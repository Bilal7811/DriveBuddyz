import React, {useContext, useState} from 'react';
import {View, Text, Image, Pressable } from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appIcons, colors, routes} from '../../../services';
import {ScreenHeader, ButtonWithIcon, TextInputComponent} from '../../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';

export default function VehicleDetails({navigation}) {
  const theme = useContext(themeContext);
  const [imagePath, setimagePath] = useState(null)

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setimagePath(image.path)
    });
  }

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={styles.firstSec}>
        <ScreenHeader
          onPress={() => navigation.goBack()}
          text={'Add Vehicle'}
          secondText={'This will help us find your vehicle details'}
        />
      </View>
      <View style={[styles.secondSec, {}]}>
        <TextInputComponent placeholder={'Type of Vechicle'}/>
        <TextInputComponent placeholder={'License Plate'}/>
        <TextInputComponent placeholder={'Manual'}/>
        <TextInputComponent placeholder={'Color'}/>
         <Pressable onPress={() => imagePicker()} style={styles.uploadSec}>
          <View style={styles.uploadTextView}>
          <Image source={appIcons.upload}/>
          <Text>&nbsp; UPLOAD PHOTO OF VECHICLE </Text>
          </View>
          {imagePath &&
            <Image source={{uri:imagePath}} style={styles.imageView} />
          }
         </Pressable>
        <ButtonWithIcon onPress={() => navigation.navigate(routes.chooseId)} color={colors.white} buttonTitle={'Next'}/>
      </View>
    </View>
  );
}
