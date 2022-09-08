export default function EventDetails({ route, navigation }) {
	const { itemId, otherParam } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				title="Go to Details... again"
				onPress={() =>
					navigation.push("Details", {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}
