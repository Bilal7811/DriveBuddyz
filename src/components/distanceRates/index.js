import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  PixelRatio,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {appIcons, colors, fontFamily, routes} from '../../services';
import {useNavigation} from '@react-navigation/native';
import TextInputComponent from '../textInput';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonWithIcon from '../iconbutton';

export default function RatesDesignComponent({onPress, sheetclose}) {
  const userlocation = useSelector(state => state.location);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setselected] = useState(0);
  const [locationName, setlocationName] = useState(false);
  const navigation = useNavigation();

  const closeSheetAndOpenModal = () => {
    sheetclose();
    setModalVisible(!modalVisible);
  };

  const modalCancel = () => {
    setModalVisible(!modalVisible);
  };

  const modalConfirm = () => {
    setModalVisible(!modalVisible);
    navigation.navigate(routes.driverConfirm);
  };

  const handlePickup = data => {
    setselected(data);
  };

  const handleNavigate = () => {
    if (selected !== 0) {
      setlocationName(true);
    }
  };

  return (
    <View style={styles.mainContainerPadding}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {locationName == false && (
        <>
        <View style={styles.firstSec}>
          <Pressable onPress={() => handlePickup(1)} style={styles.innerView}>
            {selected && selected == 1 ? (
              <Image source={appIcons.current} />
            ) : (
              <Entypo color={colors.theme} name="circle" size={20} />
            )}
          </Pressable>
          <Pressable onPress={() => handleNavigate()} style={styles.textView}>
            <View>
              <Text style={styles.textTwo}>Pickup in 1 mint</Text>
              <Text style={styles.textOne}>Priority pickup</Text>
            </View>
            <View>
              <Text style={[styles.textTwo, {color: colors.theme}]}>
                $17.00
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.firstSec}>
          <Pressable onPress={() => handlePickup(2)} style={styles.innerView}>
            {selected && selected == 2 ? (
              <Image source={appIcons.current} />
            ) : (
              <Entypo color={colors.theme} name="circle" size={20} />
            )}
          </Pressable>
          <Pressable onPress={() => handleNavigate()} style={styles.textView}>
            <View>
              <Text style={styles.textTwo}>Pickup in 1 mint</Text>
              <Text style={styles.textOne}>Priority pickup</Text>
            </View>
            <View>
              <Text style={[styles.textTwo, {color: colors.theme}]}>
                $17.00
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.firstSec}>
          <Pressable onPress={() => handlePickup(3)} style={styles.innerView}>
            {selected && selected == 3 ? (
              <Image source={appIcons.current} />
            ) : (
              <Entypo color={colors.theme} name="circle" size={20} />
            )}
          </Pressable>
          <Pressable onPress={() => handleNavigate()} style={styles.textView}>
            <View>
              <Text style={styles.textTwo}>Pickup in 1 mint</Text>
              <Text style={styles.textOne}>Priority pickup</Text>
            </View>
            <View>
              <Text style={[styles.textTwo, {color: colors.theme}]}>
                $17.00
              </Text>
            </View>
          </Pressable>
        </View>
        </>
        )}

        {locationName && (
          <View>
            <TextInputComponent
              disable={false}
              placeholder={userlocation.pickupAddress}
            />
            <ButtonWithIcon
              onPress={() => closeSheetAndOpenModal()}
              color={colors.white}
              buttonTitle={'Confirm and request'}
            />
          </View>
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => modalCancel()}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageView}>
              <Image style={styles.imageDesign} source={appIcons.check} />
            </View>
            <View style={styles.textViewModal}>
              <Text
                style={[
                  styles.textTwo,
                  {textAlign: 'center', paddingBottom: 5},
                ]}>
                Confirm Destination
              </Text>
              <Text style={[styles.textOne, {textAlign: 'center'}]}>
                Your Pickup and destination are very close together
              </Text>
            </View>
            <View style={styles.buttonView}>
              <Pressable onPress={() => modalCancel()} style={styles.button}>
                <Text style={[styles.textTwo, {textAlign: 'center'}]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable onPress={() => modalConfirm()} style={[styles.button]}>
                <Text
                  style={[
                    styles.textTwo,
                    {textAlign: 'center', color: colors.theme},
                  ]}>
                  Confirm
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainerPadding: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  firstSec: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  innerView: {
    justifyContent: 'center',
    paddingRight: 12,
  },

  textView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  textOne: {
    color: colors.grey,
    fontFamily: fontFamily.appTextBold,
    fontSize: 14,
  },
  textTwo: {
    color: colors.black,
    fontFamily: fontFamily.appTextBold,
    fontSize: 16,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 300,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  imageView: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageDesign: {
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    width: PixelRatio.getPixelSizeForLayoutSize(30),
  },

  textViewModal: {
    alignItems: 'center',
    flex: 0.6,
    paddingHorizontal: 15,
  },

  buttonView: {
    flexDirection: 'row',
    flex: 0.3,
    borderTopWidth: 0.5,
    borderTopColor: colors.grey,
  },

  button: {
    borderRightWidth: 0.5,
    borderRightColor: colors.grey,
    flex: 1,
    justifyContent: 'center',
  },
});
