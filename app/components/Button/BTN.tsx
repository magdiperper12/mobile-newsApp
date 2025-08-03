import React, { useState } from 'react';
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

export default function CompareButtons() {
	const [count, setCount] = useState(0);

	const handlePress = (type: string) => {
		setCount((prev) => prev + 1);
		console.log(`Pressed from ${type}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>عدد الضغطات: {count}</Text>

			{/* TouchableOpacity */}
			<TouchableOpacity
				style={styles.buttonOpacity}
				onPress={() => handlePress('TouchableOpacity')}>
				<Text style={styles.buttonText}>TouchableOpacity</Text>
			</TouchableOpacity>

			{/* TouchableHighlight */}
			<TouchableHighlight
				style={styles.buttonHighlight}
				underlayColor='#aaa'
				onPress={() => handlePress('TouchableHighlight')}>
				<Text style={styles.buttonText}>TouchableHighlight</Text>
			</TouchableHighlight>

			{/* Pressable */}
			<Pressable
				onPress={() => handlePress('Pressable')}
				style={({ pressed }) => [
					styles.buttonPressable,
					{ backgroundColor: pressed ? '#444' : '#555' },
				]}>
				<Text style={styles.buttonText}>Pressable</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
		backgroundColor: '#f0f0f0',
		padding: 20,
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
		fontWeight: 'bold',
	},
	buttonOpacity: {
		backgroundColor: '#007BFF',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	buttonHighlight: {
		backgroundColor: '#28a745',
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	buttonPressable: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
