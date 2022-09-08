import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
	Text,
	Drawer,
	DrawerGroup,
	DrawerItem,
	IndexPath,
	Layout
} from "@ui-kitten/components";
import {
	BellOutlineIcon,
	PersonOutlineIcon,
	SettingsIcon,
	ColorPaletteOutlineIcon,
	ReportIcon,
	FeedbackIcon,
	VolumeIcon,
} from "../assets/icon";
// import { Layout } from "react-native-reanimated";

export const ProfileAccessory = () => {
	const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
	return (
		<React.Fragment>
			<Layout>
				<Text style={styles.header}>BUSA APP</Text>
			</Layout>
			<Drawer
				selectedIndex={selectedIndex}
				onSelect={(index) => setSelectedIndex(index)}
			>
				<DrawerItem accessoryLeft={PersonOutlineIcon} title="Insight" />
				<DrawerItem accessoryLeft={BellOutlineIcon} title="Account Info." />
				<DrawerItem accessoryLeft={VolumeIcon} title="Promote Products" />
				<DrawerGroup accessoryLeft={SettingsIcon} title="Settings">
					<DrawerItem accessoryLeft={ColorPaletteOutlineIcon} title="Theme" />
					<DrawerItem accessoryLeft={ReportIcon} title="Report" />
					<DrawerItem accessoryLeft={FeedbackIcon} title="Feedback" />
				</DrawerGroup>
			</Drawer>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	header: {
		alignSelf: "center",
		fontSize: 30,
		fontWeight: 'bold',
	},
});
