import React, {useContext, useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import themeContext from '../../../services/config/themeContext';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {styles} from './styles';
import {appIcons, colors, fontFamily, routes} from '../../../services';
import {Signin, Signup} from '../../authFlow';
import {Statusbar} from '../../../components';
import {TabActions} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
export default function UserLogin({navigation, route}) {
  const theme = useContext(themeContext);

  return (
    <KeyboardAwareScrollView style={[styles.mainContiner, {backgroundColor: theme.background}]}>
      <Statusbar />
      <View
        style={[
          styles.firstSec,
          {backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white'},
        ]}>
        <Image source={appIcons.appLogo} />
      </View>
      <View style={styles.secondSec}></View>
      <View
        style={{
          justifyContent: 'center',
          height: 630,
          position: 'absolute',
          width: '100%',
          paddingHorizontal: 15,
          borderRadius: 5,
          marginTop: '38%',
        }}>
        <View style={{height: 400}}>
          <TabNavigation />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const TabNavigation = ({navigation, route}) => {
  useEffect(() => {
    if (route?.params) {
      const jumpToAction = TabActions.jumpTo(routes.login);
      navigation.dispatch(jumpToAction);
    }
  }, []);

  const theme = useContext(themeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: fontFamily.appTextBold,
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          height: 80,
          backgroundColor: theme.background,
          justifyContent: 'center',
          borderBottomWidth: 0.1,
          borderBottomColor: '#f5f5f5',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 1,
        },
        tabBarIndicatorStyle: {
          width: 54,
          left: 58,
          bottom: 16,
          height: 4,
          borderRadius: 3,
          backgroundColor: colors.theme,
        },
        tabBarActiveTintColor: theme.color,
      }}>
      <Tab.Screen name={routes.signup} component={Signup} />
      <Tab.Screen name={routes.login} component={Signin} />
    </Tab.Navigator>
  );
};
