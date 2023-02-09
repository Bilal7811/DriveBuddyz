import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appIcons,appImages,routes} from '../../../services';
import {UserUsage, ScreenHeader,} from '../../../components';

export default function ChooseId({navigation}) {
  const theme = useContext(themeContext);
  const [selected, setSelected] = useState('Driving License');

  const handlePress = title => {
    setSelected(title);
    if(selected !== "")
    {
    navigation.navigate(routes.takePhoto)
    }
  };

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={styles.firstSec}>
        <ScreenHeader
          onPress={() => navigation.goBack()}
          text={'Choose an ID Type'}
          secondText={'Kindly scan one of these cards'}
        />
      </View>
      <View style={[styles.secondSec, {justifyContent: 'space-between'}]}>
        <View>
          <UserUsage
            onPress={() => handlePress('Driving License')}
            source={appImages.license}
            textHeading={'Driving License'}
            text={'Scan your license'}
            selected={selected === 'Driving License'}
            name={'chevron-forward'}
            icon={true}
          />
          <UserUsage
          onPress={() => handlePress('Identity Card')}
            source={appImages.license}
            textHeading={'Identity Card'}
            text={'Scan your card'}
            selected={selected === 'Identity Card'}
            icon={true}
            name={'chevron-forward'}
          />
          <UserUsage
            onPress={() => handlePress('Insurance Card')}
            source={appImages.license}
            textHeading={'Insurance Card'}
            text={'Scan your Insurance'}
            selected={selected === 'Insurance Card'}
            name={'chevron-forward'}
            icon={true}
          />
        </View>
      </View>
    </View>
  );
}
