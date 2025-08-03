import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflowY: 'auto',

		height: '100%',
		padding: 10,
		backgroundColor: '#fff',
	},

	mainTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 12,
	},
	card: {
		marginBottom: 20,
	},
	cardImage: {
		width: 300,
		height: 200,
		borderRadius: 8,
		marginBottom: 10,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	cardDescription: {
		fontSize: 14,
		color: '#555',
	},
});

export default styles;
