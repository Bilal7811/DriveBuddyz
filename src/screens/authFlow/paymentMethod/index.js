import React, {useContext, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {styles} from './styles';
import {appIcons, appImages, colors, routes} from '../../../services';
import {UserUsage, ScreenHeader, ButtonWithIcon} from '../../../components';

export default function PaymentMethod({navigation}) {
  const theme = useContext(themeContext);
  const [selected, setSelected] = useState('Cash');

  const handlePress = title => {
    setSelected(title);
  };

  const navigationToNext = () => {
    navigation.navigate(routes.vechicleDetail)
  }

  return (
    <View style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <View style={styles.firstSec}>
        <ScreenHeader
          onPress={() => navigation.goBack()}
          text={'How would you like to pay?'}
          skip={'Skip'}
          onSkippress={() => navigation.navigate(routes.vechicleDetail)}
        />
      </View>
      <View style={[styles.secondSec, {justifyContent: 'space-between'}]}>
        <View>
          <UserUsage
            source={appImages.cash}
            textHeading={'Cash'}
            onPress={() => handlePress('Cash')}
            text={'Use cash for payment'}
            selected={selected === 'Cash'}
            name={'checkmark-circle'}
            icon={true}
          />
          <UserUsage
            source={appImages.paypal}
            onPress={() => handlePress('Paypal')}
            textHeading={'Paypal'}
            text={'Login to paypal'}
            selected={selected === 'Paypal'}
            icon={true}
            name={'checkmark-circle'}
          />
          <UserUsage
            source={appImages.mastercard}
            onPress={() => handlePress('Credit or debit card')}
            textHeading={'Credit or debit card'}
            text={'Enter your card details'}
            selected={selected === 'Credit or debit card'}
            icon={true}
            name={'checkmark-circle'}
          />
        </View>
        <View>
          <ButtonWithIcon
            onPress={() => navigationToNext()}
            color={colors.white}
            buttonTitle={'Save'}
          />
        </View>
      </View>
    </View>
  );
}
