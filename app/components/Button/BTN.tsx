import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
export default function BTN() {
	const [text, setText] = useState(3);
	function clickking(item: number) {
		if ((text + item) % 2 === 0) {
			setText(text + 3);
		} else {
			setText(text + 7);
		}
	}
	return (
		<View style={styles.container}>
			<Text style={styles.output}>{text}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => clickking(2)}>
				Click me
			</TouchableOpacity>
		</View>
	);
}
