import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import {NotificationComponent, ScreenHeader} from '../../../components';
import { routes } from '../../../services';

export default function Notification({navigation}) {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
    <View style={styles.headerView}>
    <ScreenHeader text={'Notification'} onPress={()=> navigation.navigate(routes.dashboard)}/>
    </View>
    <View style={styles.firstSection}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <NotificationComponent/>
    <NotificationComponent/>
    <NotificationComponent/>
    <NotificationComponent/>
    <NotificationComponent/>
    </ScrollView>
    </View>
    </View>
  );
}
