import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { routes } from "../../constants";
import { Dashboard, Distance, DrawerScreen, DriverConformation, History, InviteFriend, LeaveReview, Message, Notification, PickUpLocation, Review, Settings,  } from "../../../screens/appFlow";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerScreen {...props} />}
            screenOptions={{ gestureEnabled: true, headerShown: false, }}>
            {/* <Drawer.Screen name={routes.tab} component={TabNavigator} /> */}
            <Drawer.Screen name={routes.dashboard} component={Dashboard} />
            <Drawer.Screen name={routes.pickUpLocation} component={PickUpLocation} />
            <Drawer.Screen name={routes.distance} component={Distance} />
            <Drawer.Screen name={routes.driverConfirm} component={DriverConformation} />
            <Drawer.Screen name={routes.message} component={Message} />
            <Drawer.Screen name={routes.review} component={Review} />
            <Drawer.Screen name={routes.leaveReview} component={LeaveReview} />
            <Drawer.Screen name={routes.history} component={History} />
            <Drawer.Screen name={routes.notification} component={Notification} />
            <Drawer.Screen name={routes.invitefriend} component={InviteFriend} />
            <Drawer.Screen name={routes.settings} component={Settings} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;