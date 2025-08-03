import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const SwitchScreen = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleSwitch = () => setIsDarkMode((prev) => !prev);

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: isDarkMode ? '#121212' : '#fff' },
			]}>
			<Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
				{isDarkMode ? 'Dark Mode' : 'Light Mode'}
			</Text>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
				onValueChange={toggleSwitch}
				value={isDarkMode}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default SwitchScreen;
