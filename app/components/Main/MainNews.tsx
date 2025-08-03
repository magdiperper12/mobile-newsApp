import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	FlatList,
	ImageBackground,
	Linking,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './style';
interface newstype {
	source: any;
	author: string;
	urlToImage: string;
	description: string;
	url: string;
}

export default function MainNews() {
	const [counter, setCounter] = useState([]);
	useEffect(() => {
		getnews();
	}, []);

	function getnews() {
		const url =
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=564919c9498a43ff9374b9bee93ab540';
		axios
			.get(url)
			.then((res) => {
				console.log('this is your news data : ', res.data);
				const articles = res.data?.articles;

				setCounter(articles);
			})
			.catch((err) => {
				console.log('ther is error ', err);
			});
	}
	function renderNews({ item }: { item: newstype }) {
		return (
			<ImageBackground
				source={{
					uri: item.urlToImage
						? item.urlToImage
						: 'https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg?_gl=1*1tys23i*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkxMzEkajE0JGwwJGgw',
				}}
				style={styles.container}>
				<View style={styles.whitecontainer}>
					<Text style={styles.source}>
						{item.source.name ? item.source.name : 'no name'}
					</Text>
					<Text
						style={styles.newstext}
						numberOfLines={2}>
						{item.description ? item.description : 'go to him page'}
					</Text>
					<TouchableOpacity
						style={styles.deadlinetext}
						onPress={() => Linking.openURL(item.url)}>
						{'View Source'}
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
	// function AddNew(prev: any) {
	// 	const AddTheNews = {
	// 		id: 1,
	// 		title: 'this is 1 item title',
	// 		image:
	// 			'https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg?_gl=1*1tys23i*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkxMzEkajE0JGwwJGgw',
	// 	};
	// 	return setCounter((prev) => [...prev, AddTheNews]);
	// }
	return (
		<View>
			<FlatList
				data={counter}
				renderItem={({ item }) => renderNews({ item })}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				alwaysBounceVertical={true}
				style={styles.containerstyle}
			/>
			{/* <View style={styles.btncounter}>
				<TouchableOpacity
					style={styles.button}
					onPress={AddNew}>
					Add New
				</TouchableOpacity>
			</View> */}
		</View>
	);
}
