import {StyleSheet} from 'react-native';
import {appIcons, colors, fontFamily} from '../../../services/utilities';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },

  mainContiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  firstSec: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  secondSec: {
    paddingHorizontal: 10,
  },

  bottomGps: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
  },
});
