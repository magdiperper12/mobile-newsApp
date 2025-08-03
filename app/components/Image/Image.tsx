import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ImagePage() {
	return (
		<View>
			{' '}
			<Image
				source={{
					uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhLOhFzblDE_ATuK1EwOLrnXKn2vhFXS7nHwwZHptaM7EuXbKA6RmAnIE_s7TaenEIj0&usqp=CAU',
				}}
				style={styles.ImageStyle}
			/>
			<Image
				source={require('../../../assets/images/user.png')}
				style={styles.ImageStyle}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	ImageStyle: {
		width: 200,
		height: 200,
		margin: 'auto',
		marginVertical: 10,
	},
});
