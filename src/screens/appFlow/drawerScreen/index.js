import React, {useContext} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {Text, TouchableOpacity, Image, View, Appearance} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {appIcons, colors, hp, routes, wp} from '../../../services';
import {userSave} from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import {useSelector} from 'react-redux';

const DrawerScreen = ({navigation}) => {
  const theme = useContext(themeContext);
  const dispatch = useDispatch();
  const user = useSelector(state => state.splash);

  const handleLogout = async () => {
    dispatch(userSave({value: null}));
    navigation.replace(routes.auth);
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.background}}>
      <View
        style={[
          styles.profileView,
          {
            backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white',
            paddingHorizontal: wp(5),
          },
        ]}>
        <TouchableOpacity
          style={[styles.profileIcon, {borderColor: theme.background}]}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          {user.profileImage !== null ? (
            <View>
              <Image
                style={styles.iconStyle}
                source={{uri: user.profileImage}}
              />
            </View>
          ) : (
            <Image style={styles.iconStyle} source={appIcons.addprofile} />
          )}
        </TouchableOpacity>
        <Text
          style={[
            styles.userName,
            {color: theme.background == '#FFFFFF' ? 'white' : 'black'},
          ]}>
          Lary davis
        </Text>
      </View>
      <View
        style={{flex: 2, backgroundColor: theme.background, paddingHorizontal: wp(5)}}>
        <View
          style={{
            paddingTop: hp(5),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={[styles.menuText,{color: theme.color}]}>Dark Mode</Text>
          <ToggleSwitch
            isOn={theme.theme === 'dark' ? true : false}
            onColor={colors.green}
            offColor={colors.lightBlack}
            labelStyle={{display: 'none'}}
            size="small"
            onToggle={value => {
              EventRegister.emit('changeTheme', value);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.dashboard)}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>{}}
          style={{paddingTop: hp(4)}}>
          <Text style={{color: theme.color, fontSize: 16}}>Payment Method</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.history)}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.notification)}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.invitefriend)}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.settings)}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLogout()}
          style={{paddingTop: hp(4)}}>
          <Text style={[styles.menuText,{color: theme.color}]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerScreen;
