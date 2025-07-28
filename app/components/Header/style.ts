import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	image: {
		width: 50,
		height: 50,
	},
	text: {
		color: '#f00',
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default styles;
