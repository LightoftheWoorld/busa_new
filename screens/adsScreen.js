import React from "react";
import { Image, View, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";
import {DownloadIcon} from '../assets/icon'
const Header = (props) => (
	<View {...props}>
		<Text style={{ alignSelf: "center", fontSize: 30 }} category="h6">
			BUSA Game Show
		</Text>
	</View>
);

export const AdsScreen = () => {
	return (
		<>
			<React.Fragment>
				{/* <ScrollView> */}
				<Layout style={styles.container}>
					{/* <Text>{item.image}</Text> */}
					<ScrollView >
					<Image
						source={require("../assets/images/background.jpg")}
						style={styles.image}
					/>
					<Text style={styles.textheader} category="h1">
						Event Details
					</Text>
					
						<Text style={styles.text} category="s1">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
							commodi autem natus voluptatibus. Tempore accusamus quod sed eos
							vitae dolores optio iste cum consequuntur, nobis a autem harum
							possimus esse aliquid ad blanditiis dolorum aspernatur animi
							mollitia? Magni doloremque similique sapiente eum ratione iure
							perferendis dolorum modi reprehenderit commodi, aliquam possimus
							animi repellat quas porro eius mollitia. Vero error, numquam ab
							dolorem aut id quod odio sint explicabo magni repellendus amet
							consectetur illum autem nisi deserunt! Modi illum, sit laboriosam
							suscipit beatae ratione, nemo soluta nam enim ad quibusdam tempore
							saepe vel praesentium voluptatibus minima commodi odio numquam ut
							quos quidem ab et quia. Iusto minus natus sequi veniam,
							repellendus tempora. Officia nam quis sint exercitationem
							voluptates quas autem sed aut, ipsum commodi harum, facere
							aspernatur. Nisi architecto dolor cum ipsum aut molestiae harum
							officiis a, illo, recusandae, quia minima enim ut ullam incidunt
							natus est impedit eligendi! Officia quo quos accusantium,
							aspernatur velit accusamus placeat corporis. Quas velit non
							voluptatibus? Deserunt mollitia modi laudantium numquam vero?
							Autem ea, excepturi tempore fugit commodi ex quas eveniet possimus
							quibusdam sunt explicabo repellendus quaerat! Sit, natus? Tempora
							harum id suscipit, aliquid illo eum molestiae beatae maiores quas
							repellat earum sit consectetur aspernatur esse delectus explicabo
							praesentium dolores enim expedita commodi eaque laboriosam fuga
							rem obcaecati! Id, recusandae. Eum nam, accusantium blanditiis
							impedit iure esse delectus assumenda, reiciendis rerum modi
							praesentium at vitae tenetur aliquid error ipsa illo dignissimos,
							cupiditate voluptatem vel consequuntur aperiam nobis dolor? Odio
							placeat ut nihil, debitis ab eos quasi quod amet sunt velit
							mollitia omnis dolorem sapiente ex non vitae iste error magnam
							nesciunt cumque ducimus fugiat! Sit, qui minima esse ipsam a
							expedita eius consequatur non unde, veniam odit, libero quaerat
							neque asperiores vero tempore! Soluta inventore delectus amet
							molestias dicta quidem reiciendis eum neque quos! Nulla!
						</Text>

						<Text style={styles.text} category="p1">
							Event Planner Contact:
						</Text>
						<Text style={styles.text} category="p3">
							+000000000000
						</Text>

						
					</ScrollView>
					<Button style={styles.button} accessoryLeft={DownloadIcon}> Buy Ticket</Button>
				</Layout>

				{/* </ScrollView> */}
			</React.Fragment>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		margin: 2,
	},
	button: {
		flexWrap: 'wrap',
		fontSize: 20,
		fontWeight: 'bold',
	},
	textheader: {
		margin: 2,
		textAlign: "center",
	},
	image: {
		top: 10,
		height: "50%",
		width: "95%",
		borderRadius: 16,
		alignSelf: "center",
	},
});
