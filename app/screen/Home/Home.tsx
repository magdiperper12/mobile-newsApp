import Header from '@/app/components/Header/Header';
import MainNews from '@/app/components/Main/MainNews';
import React from 'react';
import { View } from 'react-native';

export default function Home() {
	return (
		<View>
			<Header />
			<MainNews />
		</View>
	);
}
