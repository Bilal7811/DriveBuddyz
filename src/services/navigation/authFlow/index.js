import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'

import { routes } from '../../constants';
import * as Auth from '../../../screens/authFlow';

const AuthStack = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator initialRouteName={routes.splash} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }}>
            <AuthStack.Screen name={routes.splash} component={Auth.Splash} />
            <AuthStack.Screen name={routes.onBoarding} component={Auth.OnBoarding} />
            <AuthStack.Screen name={routes.user} component={Auth.UserProfession} />
            <AuthStack.Screen name={routes.userLocation} component={Auth.Currentlocation} />
            <AuthStack.Screen name={routes.userLogin} component={Auth.UserLogin} />
            {/* <AuthStack.Screen name={routes.login} component={Auth.Signin} />
            <AuthStack.Screen name={routes.signup} component={Auth.Signup} /> */}
            <AuthStack.Screen name={routes.phoneVerfify} component={Auth.PhoneVerification} />
            <AuthStack.Screen name={routes.paymentMethod} component={Auth.PaymentMethod} />
            <AuthStack.Screen name={routes.vechicleDetail} component={Auth.VehicleDetails} />
            <AuthStack.Screen name={routes.chooseId} component={Auth.ChooseId} />
            <AuthStack.Screen name={routes.takePhoto} component={Auth.TakePhoto} />
            <AuthStack.Screen name={routes.manualLocation} component={Auth.ManualLocation} />
        </AuthStack.Navigator>
    )
}
