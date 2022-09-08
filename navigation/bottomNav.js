import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab, Divider} from "@ui-kitten/components";
import { ProfileScreen } from "../screens/profileScreen";
import { TicketScreen } from "../screens/ticketScreen";
import { HomeScreen } from "../screens/homeScreen";
import { NewsScreen } from "../screens/newsScreen";
import { AdsScreen } from "../screens/adsScreen";
import { HomeIcon, BellIcon, PersonIcon, ShoppingCartIcon, ShoppingBagIcon } from "../assets/icon";
import { View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <View>
        <Divider />
        <BottomNavigation
            appearance='noIndicator'
            selectedIndex={state.index}
            onSelect={(index) => navigation.navigate(state.routeNames[index])}
        >
            <BottomNavigationTab title={HomeIcon} />
            <BottomNavigationTab title={BellIcon} />
            <BottomNavigationTab title={ShoppingCartIcon} />
            <BottomNavigationTab title={ShoppingBagIcon} />
            <BottomNavigationTab title={PersonIcon} />
        </BottomNavigation>
    </View>
);

const TabNavigator = () => (
	<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
		<Screen name="Home" component={HomeScreen} />
		<Screen name="News" component={NewsScreen} />
		<Screen name="Ads" component={AdsScreen} />
		<Screen name="Ticket" component={TicketScreen} />
		<Screen name="Profile" component={ProfileScreen} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator />
	</NavigationContainer>
);
