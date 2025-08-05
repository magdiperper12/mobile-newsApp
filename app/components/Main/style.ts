import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderRadius: 10,
		overflow: 'hidden',
		marginHorizontal: 20,
		width: 300,
		height: 290,
		overflowY: 'hidden',
	},
	cover: {
		width: 300,
		height: 290,
		marginHorizontal: 20,
		borderRadius: 10,
		overflow: 'hidden',
		marginTop: 20,
		backgroundColor: '#ccc',
	},
	whitecontainer: {
		backgroundColor: 'rgba(255 ,255, 255, 0.75)',
		marginTop: 100,
		padding: 10,
		borderRadius: 10,
	},
	deadlinetext: {
		backgroundColor: 'red',
		width: 110,
		textAlign: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 20,
		padding: 3,
		borderRadius: 5,
	},
	source: {
		textAlign: 'center',
		color: '#000',
		fontSize: 16,
		fontWeight: 'bold',
	},
	newstext: {
		marginTop: 10,
	},
	containerstyle: {
		marginVertical: 30,
	},
	btncounter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		marginTop: 15,
		backgroundColor: '#0f0',
		padding: 10,
		borderRadius: 10,
		fontWeight: 'bold',
		color: '#fff',
		width: 100,
		textAlign: 'center',
	},
	inputtext: {
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
});

export default styles;
