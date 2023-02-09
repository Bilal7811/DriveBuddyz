import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import themeContext from '../../services/config/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {appImages, colors, fontFamily} from '../../services';

export default function ProfileComponent() {
  const theme = useContext(themeContext);
  const user = useSelector(state => state.splash);

  return (
    <View>
      <View
        style={{
          backgroundColor: theme.background,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          height: 80,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {user.profileImage ? (
            <Image
              style={{height: 60, width: 60, marginRight: 8}}
              source={{uri: user.profileImage}}
            />
          ) : (
            <Image
              style={{height: 60, width: 60, marginRight: 8}}
              source={appImages.addprofile}
            />
          )}
          <View>
          <Text style={{fontFamily:fontFamily.appTextBold, color:theme.color, fontSize:16}}>Larry Davis</Text>
          <Text style={{fontFamily:fontFamily.appTextRegular, color:colors.grey}}>User</Text>
          </View>
        </View>
        <Ionicons name={'chevron-forward'} />
      </View>
    </View>
  );
}
