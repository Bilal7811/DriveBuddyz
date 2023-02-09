import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appIcons, appImages, routes} from '../../../services';
import {ScreenHeader, UserUsage} from '../../../components';

export default function UserProfession({navigation}) {
  const theme = useContext(themeContext);
  const [selected, setSelected] = useState('Customer');

  const handlePress = title => {
    setSelected(title);
    if(selected !== "")
    {
    navigation.navigate(routes.userLocation)
    }
  };

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={[styles.firstSec, {backgroundColor: theme.background}]}>
        <ScreenHeader
          onPress={() => navigation.navigate(routes.onBoarding, {index: 2})}
          text={'Pick an identity that best describes you'}
        />
      </View>
      <View style={[styles.secondSec]}>
        <UserUsage
          source={appImages.profile}
          onPress={() => handlePress('Customer')}
          textHeading={'Customer'}
          text={'Request a ride and confirm driver'}
          selected={selected === 'Customer'}
        />
        <UserUsage
          source={appImages.drivelogo}
          onPress={() => handlePress('Driver')}
          textHeading={'Driver'}
          text={'Are you ready to earn through safe driving'}
          selected={selected === 'Driver'}
        />
      </View>
    </View>
  );
}
