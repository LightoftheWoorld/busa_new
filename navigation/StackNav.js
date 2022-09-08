import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native'
import EventDetails from "../components/EventDetails";
const Stack = createNativeStackNavigator();
const Navigator = () => {
return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Stack name="EventDetails" component={EventDetails} />
		</Stack.Navigator>
	</NavigationContainer>
);
}
export default Navigator