import React, {useContext} from 'react';
import {View} from 'react-native';
import {
    ButtonWithIcon,
  ProfileComponent,
  ScreenHeader,
  SettingBar,
  Statusbar,
} from '../../../components';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import {colors, routes} from '../../../services';

const Settings = ({navigation}) => {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Statusbar />
      <View style={styles.headerView}>
        <ScreenHeader
          onPress={() => navigation.navigate(routes.dashboard)}
          contentChange={'center'}
          marginTop={20}
          text={'Settings'}
        />
      </View>
      <View style={styles.firstSection}>
        <View style={styles.padding}>
          <ProfileComponent />
        </View>
        <View style={styles.padding}>
          <SettingBar title={'Notification'} toggleNeed={true} />
          <SettingBar title={'Security'} />
          <SettingBar title={'Language'} />
        </View>
        <View style={styles.padding}>
          <SettingBar title={'Vechicle Details'} />
          <SettingBar title={'Driving License'} />
          <SettingBar title={'Term & Policies'} />
          <SettingBar title={'Reviews'} />
        </View>
        <ButtonWithIcon color={colors.white} backgroundColor={'#AB0000'} borderRadius={1} buttonTitle={'Logout'}/>
      </View>
    </View>
  );
};

export default Settings;
