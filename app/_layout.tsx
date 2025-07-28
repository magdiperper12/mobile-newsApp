import { useFonts } from 'expo-font';
import 'react-native-reanimated';

import { View } from 'react-native';
import Home from './screen/Home/Home';

export default function RootLayout() {
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View>
			<Home />
		</View>
	);
}
