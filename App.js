import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaView } from "react-native";
import { AppNavigator } from "./navigation/bottomNav";

export default () => (
	<>
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.dark}>
				<SafeAreaProvider style={{ backgroundColor: "white" }}>
					<AppNavigator />
				</SafeAreaProvider>
			</ApplicationProvider>
		</SafeAreaView>
	</>
);
