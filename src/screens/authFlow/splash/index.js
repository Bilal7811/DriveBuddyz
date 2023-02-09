import React, { useContext } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import { useSelector } from 'react-redux'

import { routes } from '../../../services'
import { styles } from './styles'
import themeContext from '../../../services/config/themeContext'
import {appIcons, appImages} from '../../../services/utilities'

const Splash = ({ navigation }) => {
  const theme = useContext(themeContext)
  const user = useSelector((state) => state.splash.value)

  React.useEffect(() => {
    performTimeConsumingTask()
  }, [])

  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        navigation.replace(user == null ? routes.onBoarding : routes.drawer)
      }, 3000),
    )
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.background == "#FFFFFF" ? 'black' : 'white' }]}>
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapper}>
        <Image source={appImages.appLogo}/>
      </View>
    </View>
  )
}

export default Splash

