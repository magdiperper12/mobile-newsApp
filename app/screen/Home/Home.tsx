// Home.tsx
// import CompareButtons from '@/app/components/Button/BTN';
import Header from '@/app/components/Header/Header';
// import ModalScreen from '@/app/components/ModalScreen/ModalScreen';
// import MainNews from '@/app/components/Main/MainNews';
// import Textinput from '@/app/components/TextInput/TextInput';
// import ImagePage from '@/app/components/Image/Image';
// import SwitchScreen from '@/app/components/Switch/Switch';
// // import Article from '@/app/components/article/Article';
// import FlatListcounter from '@/app/components/FlatList/FlatList';
// import Test from '@/app/components/TextInput/Test';
import React from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';

export default function Home() {
	return (
		<SafeAreaView>
			<Header />
			<ActivityIndicator
				size='large'
				color='#ec0909ff'
			/>

			{/* <ModalScreen /> */}
			{/* <CompareButtons /> */}
			{/* <MainNews /> */}
			{/* <Textinput /> */}
			{/* <SwitchScreen /> */}
			{/* <FlatListcounter /> */}
			{/* <ImagePage /> */}
			{/* <Test /> */}
			{/* <Article /> */}
		</SafeAreaView>
	);
}
