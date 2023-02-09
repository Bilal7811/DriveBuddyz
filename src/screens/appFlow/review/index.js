import React, {useContext} from 'react';
import {View, Pressable} from 'react-native';
import {MapViewComponent, Statusbar} from '../../../components';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, routes } from '../../../services';

const Review = ({navigation}) => {
  const theme = useContext(themeContext);
  const user = useSelector(state => state.splash);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Statusbar />
      <MapViewComponent display={'none'} data={'review'} />
      <View
        style={styles.backIconView}>
        <Pressable onPress={() => navigation.navigate(routes.pickUpLocation)} style={styles.buttonView}>
          <Ionicons name={'close'} color={colors.grey} size={25} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(routes.pickUpLocation)} style={styles.buttonView}>
          <Ionicons name={'share-social-sharp'} color={colors.black} size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default Review;
