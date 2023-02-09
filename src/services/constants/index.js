import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const storageKey = {}

export const routes = {
    auth: 'auth',
    tab: 'tabNavigator',
    drawer: 'drawer',
    app: 'app',
    splash: 'splash',
    selectAccount: 'selectAccount',
    login: 'Sign In',
    signup: 'Sign Up',
    dashboard: 'dashboard',
    favorite: 'favorite',
    profile: 'profile',
    onBoarding: 'onBoarding',
    user: 'userProfession',
    userLocation: 'userLocation',
    userLogin: 'userLogin',
    phoneVerfify:'phoneVerfication',
    paymentMethod:'paymentMethod',
    vechicleDetail:'vechicleDetail',
    chooseId:'chooseID',
    takePhoto: 'takePhoto',
    manualLocation: 'manualLocation',
    pickUpLocation: 'pickUpLocation',
    distance:'distance',
    driverConfirm: 'driverConfirm',
    message: 'message',
    review: 'review',
    leaveReview: 'leaveReview', 
    history: 'history', 
    notification: 'notification',
    invitefriend:'invitefriend',
    settings: 'settings'
}

export const loaderStyles = {
    CircleFlip: 'CircleFlip',
    Bounce: 'Bounce',
    Wave: 'Wave',
    WanderingCubes: 'WanderingCubes',
    Pulse: 'Pulse',
    ChasingDots: 'ChasingDots',
    ThreeBounce: 'ThreeBounce',
    Circle: 'Circle',
    CubeGrid: '9CubeGrid',
    WordPress: 'WordPress',
    FadingCircle: 'FadingCircle',
    FadingCircleAlt: 'FadingCircleAlt',
    Arc: 'Arc',
}


export const wp = (p) => WINDOW_WIDTH * (p / 100);
export const hp = (p) => WINDOW_HEIGHT * (p / 100);
export { WINDOW_HEIGHT, WINDOW_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH };

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

function normalize(size, based = 'width') {
    const newSize =
        based === 'height' ? size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
const widthPixel = size => {
    return normalize(size, 'width');
};
const heightPixel = size => {
    return normalize(size, 'height');
};
const fontPixel = size => {
    return heightPixel(size);
};

export {
    widthPixel,
    heightPixel,
    fontPixel,

};

export const IOSAndroid = StyleSheet.create({
    elevation1: {
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
    },
    elevation10: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    elevation2: {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    elevation3: {
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    elevation4: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    elevation5: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    elevation6: {
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    elevation7: {
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },
    elevation8: {
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    elevation9: {
        elevation: 9,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    },
});






