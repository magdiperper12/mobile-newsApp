import React, { useState } from 'react';
import {
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';

const ModalScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello, I am a Modal!</Text>

						<TouchableHighlight
							style={styles.buttonClose}
							onPress={() => {
								setModalVisible(!modalVisible);
							}}>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>

			<TouchableHighlight
				style={styles.buttonOpen}
				onPress={() => {
					setModalVisible(true);
				}}>
				<Text style={styles.textStyle}>Show Modal</Text>
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.3)', // مظلل للخلفية
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonOpen: {
		backgroundColor: '#2196F3',
		padding: 10,
		borderRadius: 10,
	},
	buttonClose: {
		backgroundColor: '#f44336',
		padding: 10,
		borderRadius: 10,
		marginTop: 15,
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 18,
	},
});

export default ModalScreen;
