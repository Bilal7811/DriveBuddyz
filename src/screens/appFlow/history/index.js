import React, {useContext} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {HistoryComponent} from '../../../components';
import { routes } from '../../../services';

export default function History({navigation}) {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
      <View
        style={[
          styles.headerView,
          {
            backgroundColor: theme.background == '#FFFFFF' ? 'black' : 'white',
          },
        ]}>
        <Pressable onPress={()=> navigation.navigate(routes.dashboard)}>
          <Ionicons
            color={theme.background == '#FFFFFF' ? 'white' : 'black'}
            size={26}
            name={'chevron-back'}
          />
        </Pressable>
        <View style={styles.headerInnerview}>
          <Text
            style={[
              styles.headerText,
              {
                color: theme.background == '#FFFFFF' ? 'white' : 'black',
              },
            ]}>
            History
          </Text>
          <View style={styles.inheaderView}>
            <Text
              style={[
                styles.headerTextOne,
                {
                  color: theme.background == '#FFFFFF' ? 'white' : 'black',
                },
              ]}>
              Oct 15, 2018
            </Text>
            <Ionicons
              size={22}
              color={theme.background == '#FFFFFF' ? 'white' : 'black'}
              name={'chevron-down'}
            />
          </View>
        </View>
      </View>
      <View style={styles.firtSection}></View>
      <View style={styles.secondSection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HistoryComponent />
          <HistoryComponent />
          <HistoryComponent />
          <HistoryComponent />
        </ScrollView>
      </View>
    </View>
  );
}
