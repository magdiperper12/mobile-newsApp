import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import styles from './style';
export default function Article() {
	const [counter, setCounter] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	function getData() {
		const url =
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=564919c9498a43ff9374b9bee93ab540';
		axios
			.get(url)
			.then((res) => {
				console.log('Articles:', res.data.articles);
				setCounter(res.data.articles || []);
			})
			.catch((err) => {
				console.log('Error fetching data:', err);
			});
	}

	function renderItem({ item }: any) {
		return (
			<View style={styles.card}>
				{item.urlToImage && (
					<Image
						style={styles.cardImage}
						source={{ uri: item.urlToImage }}
					/>
				)}
				<Text style={styles.cardTitle}>
					{item.source?.name || 'Unknown Source'}
				</Text>
				<Text style={styles.cardDescription}>
					{item.description || 'No description available'}
				</Text>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.mainTitle}>Top News</Text>
			<FlatList
				data={counter}
				renderItem={renderItem}
				scrollEnabled={false}
			/>
		</SafeAreaView>
	);
}
