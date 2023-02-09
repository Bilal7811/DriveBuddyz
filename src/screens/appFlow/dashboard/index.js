import React, {useContext} from 'react';
import {View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Header, MapViewComponent, Statusbar} from '../../../components';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import {useSelector} from 'react-redux';

const Dashboard = ({navigation}) => {
  const theme = useContext(themeContext);
  const user = useSelector(state => state.splash);
  console.log(user)

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Statusbar />
      <Header
        leftIcon={user.profileImage}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <MapViewComponent gpsuse={true} bottSheetHeight={'55%'} data={'dashBBoard'} />
    </View>
  );
};

export default Dashboard;
