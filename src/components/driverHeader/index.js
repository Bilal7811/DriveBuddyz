import {View, Text, Image, StyleSheet, Linking, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import {appIcons, colors, fontFamily, routes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import ButtonWithIcon from '../iconbutton';
import TextInputComponent from '../textInput';

export default function DriverHeader({cancel, submitt, displayReview}) {
  const userAdress = useSelector(state => state.location);
  const navigation = useNavigation();
  const [complaint, setcomplaint] = useState(null);

  const sendingValue = data => {
    setcomplaint(data);
    submitt(data);
  };

  useEffect(() => {}, [cancel]);

  return (
    <View>
      {cancel == false ? (
        <View style={styles.Container}>
          <View style={styles.headerContainer}>
            <View style={styles.driverProfileView}>
              <Image
                style={styles.driverProfileImage}
                source={appIcons.addprofile}
              />
            </View>
            <View style={styles.specficView}>
              <Text style={styles.textTwoBold}>Gregory Smith</Text>
              <View style={styles.ratingView}>
                <Octicons
                  size={16}
                  style={{paddingRight: 5}}
                  name="star-fill"
                  color={'#F4A521'}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>
            <View style={styles.messageAndCallView}>
              <Pressable onPress={() => navigation.navigate(routes.message)}>
                <Image source={appIcons.message} />
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL(`tel:${'03024879017'}`)}>
                <Image source={appIcons.call} />
              </Pressable>
            </View>
          </View>
          <View style={styles.firstSec}>
            <View style={styles.innerView}>
              <Image style={{marginLeft: 1}} source={appIcons.current} />
              <View style={styles.leftBorder} />
              <Ionicons color={'#AB0000'} name="location-sharp" size={25} />
            </View>
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <View>
                <Text numberOfLines={1} style={styles.textTwo}>
                  {userAdress.currentAddress}
                </Text>
              </View>
              <View>
                <Text numberOfLines={1} style={styles.textTwo}>
                  {userAdress.pickupAddress}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.headerContainer, {backgroundColor: 'white'}]}>
            <View style={styles.driverProfileView}>
              <Image source={appIcons.carIcon} />
            </View>
            <View style={styles.distanceTextView}>
              <View style={styles.ratingView}>
                <Text style={styles.textOne}>DISTANCE</Text>
              </View>
              <Text style={styles.textTwoBoldCenter}>0.2km</Text>
            </View>
            <View style={styles.distanceTextView}>
              <View style={styles.ratingView}>
                <Text style={styles.textOne}>TIME</Text>
              </View>
              <Text style={styles.textTwoBoldCenter}>2 min</Text>
            </View>
            <View style={styles.distanceTextView}>
              <View style={styles.ratingView}>
                <Text style={styles.textOne}>PRICE</Text>
              </View>
              <Text style={styles.textTwoBoldCenter}>$25.00</Text>
            </View>
          </View>
          {displayReview == true &&(
          <View style={{height: 310}}>
            <ScrollView>
              <View style={styles.reviewView}>
                <View style={styles.headerReviewContainer}>
                  <View style={styles.driverProfileView}>
                    <Image
                      style={styles.driverProfileImage}
                      source={appIcons.addprofile}
                    />
                  </View>
                  <View style={styles.specficView}>
                    <Text style={styles.textTwoBold}>Gregory Smith</Text>
                    <View style={styles.ratingView}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        starSize={16}
                        fullStarColor={'#F4A521'}
                        emptyStarColor={'#F4A521'}
                      />
                    </View>
                  </View>
                  <View style={styles.messageAndCallView}>
                  <Text>1 minute ago</Text>
                  </View>
                </View>
                <Text style={styles.ratingText}>
                  Driver is very good and respectable
                </Text>
              </View>
              <View style={styles.reviewView}>
                <View style={styles.headerReviewContainer}>
                  <View style={styles.driverProfileView}>
                    <Image
                      style={styles.driverProfileImage}
                      source={appIcons.addprofile}
                    />
                  </View>
                  <View style={styles.specficView}>
                    <Text style={styles.textTwoBold}>Gregory Smith</Text>
                    <View style={styles.ratingView}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        starSize={16}
                        selectedStar={rating => {}}
                        fullStarColor={'#F4A521'}
                      />
                    </View>
                  </View>
                  <View style={styles.messageAndCallView}>
                  <Text>1 minute ago</Text>
                  </View>
                </View>
                <Text style={styles.ratingText}>
                  Driver is very good and respectable
                </Text>
              </View>
              <View style={styles.reviewView}>
                <View style={styles.headerReviewContainer}>
                  <View style={styles.driverProfileView}>
                    <Image
                      style={styles.driverProfileImage}
                      source={appIcons.addprofile}
                    />
                  </View>
                  <View style={styles.specficView}>
                    <Text style={styles.textTwoBold}>Gregory Smith</Text>
                    <View style={styles.ratingView}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        starSize={16}
                        selectedStar={rating => {}}
                        fullStarColor={'#F4A521'}
                      />
                    </View>
                  </View>
                  <View style={styles.messageAndCallView}>
                  <Text>1 minute ago</Text>
                  </View>
                </View>
                <Text style={styles.ratingText}>
                  Driver is very good and respectable
                </Text>
              </View>
              <View style={styles.reviewView}>
                <View style={styles.headerReviewContainer}>
                  <View style={styles.driverProfileView}>
                    <Image
                      style={styles.driverProfileImage}
                      source={appIcons.addprofile}
                    />
                  </View>
                  <View style={styles.specficView}>
                    <Text style={styles.textTwoBold}>Gregory Smith</Text>
                    <View style={styles.ratingView}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={3}
                        starSize={16}
                        selectedStar={rating => {}}
                        fullStarColor={'#F4A521'}
                      />
                    </View>
                  </View>
                  <View style={styles.messageAndCallView}>
                    <Text>1 minute ago</Text>
                  </View>
                </View>
                <Text style={styles.ratingText}>
                  Driver is very good and respectable
                </Text>
              </View>
            </ScrollView>
          </View>
          )}
        </View>
      ) : cancel == true && complaint !== 'Complaint_about_driver' ? (
        <View style={[styles.Container]}>
          <View style={styles.header}>
            <Text style={styles.headerHeading}>Cancel Ride</Text>
          </View>
          <View style={styles.buttonView}>
            <ButtonWithIcon
              onPress={() => setcomplaint('Waiting for driver too long')}
              color={colors.white}
              buttonTitle={'Waiting for driver too long'}
            />
            <ButtonWithIcon
              onPress={() => sendingValue('Complaint_about_driver')}
              color={colors.white}
              buttonTitle={'Complaint about driver'}
            />
            <ButtonWithIcon
              onPress={() => setcomplaint('Driver asked me to cancel')}
              color={colors.white}
              buttonTitle={'Driver asked me to cancel'}
            />
            <ButtonWithIcon
              onPress={() => setcomplaint('Driver arrived early')}
              color={colors.white}
              buttonTitle={'Driver arrived early'}
            />
            <ButtonWithIcon
              onPress={() => setcomplaint('Driver not getting closer')}
              color={colors.white}
              buttonTitle={'Driver not getting closer'}
            />
          </View>
        </View>
      ) : (
        <View style={[styles.Container]}>
          <View style={styles.header}>
            <Text style={styles.headerHeading}>Complaint about driver</Text>
          </View>
          <View style={styles.buttonView}>
            <TextInputComponent
              placeholder={
                'Your feedback will help us to improve your driving experience better'
              }
              multiline={true}
              height={120}
              font={fontFamily.appTextRegular}
            />
            <ButtonWithIcon
              onPress={() => sendingValue(null)}
              color={colors.white}
              buttonTitle={'Sumbit'}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 15,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    borderTopColor: colors.grey,
    borderTopWidth: 0.5,
  },

  driverProfileView: {
    flex: 0.4,
  },
  driverProfileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  specficView: {
    flex: 1,
    justifyContent: 'space-between',
  },

  driverName: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  ratingText: {
    color: colors.grey,
    fontFamily: fontFamily.appTextRegular,
  },
  messageAndCallView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.6,
    justifyContent: 'space-around',
  },

  distanceTextView: {
    flex: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textOne: {
    color: colors.grey,
    textAlign: 'center',
    fontFamily: fontFamily.appTextRegular,
  },
  textTwoBold: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },
  textTwoBoldCenter: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fontFamily.appTextBold,
  },

  firstSec: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 22,
    height: 120,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
  },
  innerView: {
    justifyContent: 'space-between',
    flex: 0.1,
    paddingRight: 3,
    alignItems: 'center',
  },
  leftBorder: {
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    height: 30,
    borderStyle: 'dotted',
  },

  textTwo: {
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontSize: 16,
  },
  reviewView: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.5,
    backgroundColor: colors.white,
    height: 100,
  },
  headerReviewContainer: {
    backgroundColor: colors.white,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerHeading: {
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    fontSize: 20,
  },
  buttonView: {
    paddingHorizontal: 15,
  },
});
