import {StatusBar} from 'react-native';
import themeContext from '../../services/config/themeContext';
import React, {useContext} from 'react';

export default function Statusbar() {
  const theme = useContext(themeContext);
  return (
      <StatusBar
        backgroundColor={theme.background}
        barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
      />
  );
}
