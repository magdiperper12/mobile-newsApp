import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function Textinput() {
	const [text, setText] = useState('');
	const handellSubmit = () => {
		alert('you change ' + text);
	};
	return (
		<View>
			<TextInput
				style={styles.inputFaild}
				value={text}
				onChangeText={setText}
			/>
			<View style={styles.buttonStyle}>
				<Button
					onPress={handellSubmit}
					title='Submit'
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputFaild: {
		borderColor: 'blue',
		borderWidth: 1,
		padding: 6,
		marginHorizontal: 20,
		marginVertical: 10,
		borderRadius: 10,
		outlineColor: 'gray',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		color: 'red',
	},
	buttonStyle: {
		width: '50%',
		margin: 'auto',
	},
});
