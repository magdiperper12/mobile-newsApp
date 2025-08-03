import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
interface counterType {
	id: number;
	name: string;
}
const dataCounter: counterType[] = [
	{
		id: 1,
		name: 'magdi',
	},
	{
		id: 2,
		name: 'saleh',
	},
	{
		id: 3,
		name: 'fathi',
	},
	{
		id: 4,
		name: 'perper',
	},
];

export default function FlatListcounter() {
	return (
		<FlatList
			data={dataCounter}
			renderItem={({ item }: { item: counterType }) => (
				<View style={styles.container}>
					<Text style={styles.text}>{item.id}</Text>
					<Text style={styles.text}>{item.name}</Text>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 5,
		gap: 3,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 30,
	},
});
