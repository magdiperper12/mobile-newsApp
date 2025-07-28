import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './style';
export default function Header() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../../assets/images/user.png')}
				style={styles.image}
			/>
			<Text style={styles.text}>MB App</Text>
			<Image
				source={require('../../../assets/images/notification.png')}
				style={styles.image}
			/>
		</View>
	);
}
