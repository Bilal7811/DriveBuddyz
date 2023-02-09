import React, {useContext,} from 'react';
import {View, Pressable} from 'react-native';
import {MapViewComponent, Statusbar} from '../../../components';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import Octicons from 'react-native-vector-icons/Octicons';
import {colors, routes} from '../../../services';

const Distance = ({navigation}) => {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Statusbar />
      <MapViewComponent bottSheetHeight={'62%'} data={'distanceRate'} />
      <View
        style={styles.backIconView}>
        <Pressable onPress={() => navigation.navigate(routes.pickUpLocation)} style={styles.buttonView}>
          <Octicons name={'chevron-left'} color={colors.grey} size={25} />
        </Pressable>
      </View>
    </View>
  );
};

export default Distance;
