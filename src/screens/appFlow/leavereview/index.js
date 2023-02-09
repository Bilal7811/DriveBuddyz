import React, {useContext,useState} from 'react';
import {View, Pressable, Text,Image} from 'react-native';
import {styles} from './styles';
import themeContext from '../../../services/config/themeContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import StarRating from 'react-native-star-rating';
import {appIcons, colors, fontFamily, routes} from '../../../services';
import { ButtonWithIcon, TextInputComponent } from '../../../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function LeaveReview() {
const theme = useContext(themeContext);
const [starCount, setstarCount] = useState(0)
const [Additional, setAdditional] = useState('')

const onStarRatingPress = (data) => {
    setstarCount(data)
}

  return (
    <KeyboardAwareScrollView style={[styles.container, {backgroundColor: theme.background == "#FFFFFF" ? 'black' : 'white', paddingHorizontal:20}]}>
    <View style={{alignItems:'center',height:150,paddingTop:30}}>
      <Text style={{color: theme.color == "#000000" ? 'white' : 'black', fontFamily:fontFamily.appTextBold, fontSize:20}}>Rating</Text>
      </View>
      <View style={{height:550, backgroundColor:theme.background, paddingHorizontal:15,marginBottom:20, borderRadius:15}}>
        <View style={{flex:1.5,justifyContent:'center', alignItems:'center', paddingHorizontal:30,}}>
        <View style={{paddingVertical:20,}}>   
        <Text style={{color: theme.color,fontFamily:fontFamily.appTextBold}}>Gregory Smith</Text>
        <Text style={{color: colors.grey ,fontFamily:fontFamily.appTextBold}}>652 - UKW</Text>
        </View>
        <Text style={{color: theme.color,fontFamily:fontFamily.appTextBold, fontSize:24}}>How is your trip?</Text>
        <Text style={{color: colors.grey ,fontFamily:fontFamily.appTextBold, textAlign:'center', paddingTop:10,fontSize:16}}>Your feedback will help improve driving experience</Text>
        </View>
        <View style={{flex:0.7,justifyContent:'center',alignItems:'center'}}>
        <StarRating
        maxStars={5}
        fullStarColor={'#F4A521'}
        emptyStarColor={'#F4A521'}
        halfStarEnabled={false}
        rating={starCount}
        selectedStar={(rating) =>onStarRatingPress(rating)}
        starStyle={{paddingRight:5}}
      />
      </View>
      <View style={{flex:1.5}}>
        <TextInputComponent font={fontFamily.appTextRegular} height={120} placeholder={'Additional comments...'} method={(data) => setAdditional(data)}/>
        <ButtonWithIcon color={colors.white}  buttonTitle={'Submit Review'}/>
      </View> 
        </View>
        <View style={{position:'absolute', top:85,left:124}}>
            <Image source={appIcons.addprofile} />
        </View>
    </KeyboardAwareScrollView>
  )
}