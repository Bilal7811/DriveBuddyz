import {StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import PickupComponent from '../current and pickup';
import {useNavigation} from '@react-navigation/native';
import {colors, routes} from '../../services';
import RatesDesignComponent from '../distanceRates';
import ButtonWithIcon from '../iconbutton';
import DriverHeader from '../driverHeader';
import ArrivedComponent from '../driverArrived';

const SlideUpSheet = ({data, display, driver}) => {
  const sheetRef = useRef(null);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['10%', '50%', '82%'], []);
  const handleSheetChange = useCallback(index => {}, []);
  const [cancel, setcancel] = useState(false);
  const [complaint, setcomplaint] = useState(null);

  const handleClosePress = () => {
    sheetRef.current.close();
  };

  const changeComplaintValueFromParent = data => {
    setcomplaint(data);
  };

  useEffect(() => {}, [complaint]);

  return (
    <View style={styles.container}>
      <View style={styles.secondSec}>
        <BottomSheet
          ref={sheetRef}
          handleStyle={{display: display}}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetView>
            {data == 'dashBBoard' && (
              <View>
                <PickupComponent
                  onPress={() => navigation.navigate(routes.pickUpLocation)}
                />
              </View>
            )}

            {data == 'distanceRate' && (
              <View>
                <RatesDesignComponent
                  sheetclose={handleClosePress}
                />
              </View>
            )}

            {data == 'driverConfirmation' &&
              (driver !== 'arrived' ? (
                <View>
                  <DriverHeader
                    cancel={cancel}
                    displayReview={true}
                    submitt={data => changeComplaintValueFromParent(data)}
                  />
                  <View style={{paddingHorizontal: 15}}>
                    {cancel == false ? (
                      <ButtonWithIcon
                        onPress={() => setcancel(true)}
                        color={colors.white}
                        backgroundColor={colors.black}
                        buttonTitle={'Cancel Request'}
                      />
                    ) : (
                      cancel == true &&
                      complaint !== 'Complaint_about_driver' && (
                        <ButtonWithIcon
                          onPress={() => setcancel(false)}
                          color={colors.white}
                          backgroundColor={colors.black}
                          buttonTitle={'Keep my ride'}
                        />
                      )
                    )}
                  </View>
                </View>
              ) : (
                <View>
                  <ArrivedComponent />
                </View>
              ))}

            {data == 'review' && (
              <View style={{height: '100%', justifyContent: 'space-between'}}>
                <DriverHeader cancel={cancel} displayReview={false} />
                <View style={{paddingHorizontal: 15}}>
                  <ButtonWithIcon
                    onPress={() => navigation.navigate(routes.leaveReview)}
                    color={colors.white}
                    backgroundColor={colors.theme}
                    buttonTitle={'Leave Review'}
                  />
                </View>
              </View>
            )}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondSec: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
});
export default SlideUpSheet;
