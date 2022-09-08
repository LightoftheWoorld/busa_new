import React from "react";
import {
	Image,
	StyleSheet,
	View,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";
import Navigator from "../navigation/StackNav";
import EventDetails from "./EventDetails";
export const EventCard = ({ navigation }) => {
	return (
		<>
			<React.Fragment>
				<Layout style={styles.container}>
				{/* <ScrollView > */}
					{/* <Text style={styles.header} category="h6">
						BUSA League
					</Text> */}
					<TouchableOpacity>
						<Image
							source={require("../assets/images/background.jpg")}
							style={styles.image}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source={require("../assets/images/background.jpg")}
							style={styles.image}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source={require("../assets/images/background.jpg")}
							style={styles.image}
						/>
					</TouchableOpacity>
				{/* </ScrollView> */}
				</Layout>
			</React.Fragment>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: "80%",
		width: "95%",
		borderRadius: 16,
		alignSelf: "center",
		top: 10,
	},
	header: {
		alignSelf: "center",
		fontSize: 30,
	},
});
