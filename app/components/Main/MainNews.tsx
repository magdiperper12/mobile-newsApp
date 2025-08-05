import React, { useState } from 'react';
import {
	FlatList,
	ImageBackground,
	Linking,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { get } from '../../util/helper/apiServices';
import { newstype } from '../types/types';
import styles from './style';
export default function MainNews() {
	const [counter, setCounter] = useState<newstype[]>([]);
	const [text, setText] = useState<string>('');

	function getnews(searshText: string) {
		const url = `/everything?q=${searshText}`;

		get(url)
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
	// function Addnews() {
	// 	const AddTheNews: newstype = {
	// 		source: { id: null, name: 'Manual' },
	// 		author: 'You',
	// 		urlToImage:
	// 			'https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg',
	// 		description: 'This is a manually added news item.',
	// 		url: 'https://example.com',
	// 	};
	// 	setCounter((prev) => [...prev, AddTheNews]);
	// }
	function SkeltonPlaceholder() {
		return (
			<View>
				<View style={styles.cover}></View>
			</View>
		);
	}
	return (
		<View style={{ paddingBottom: 20 }}>
			<TextInput
				style={styles.inputtext}
				value={text}
				onChangeText={setText}
			/>
			<View style={styles.btncounter}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => getnews(text)}>
					Search
				</TouchableOpacity>
			</View>
			{counter.length === 0 ? (
				<FlatList
					data={[1, 2]}
					renderItem={SkeltonPlaceholder}
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ display: 'flex', flexDirection: 'row' }}></FlatList>
			) : (
				<FlatList
					data={counter}
					renderItem={({ item }) => renderNews({ item })}
					horizontal={true}
					keyExtractor={(item, index) => item.url + index}
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					alwaysBounceVertical={true}
					style={styles.containerstyle}
				/>
			)}

			{/* <TouchableOpacity
				style={styles.button}
				onPress={Addnews}>
				Add New
			</TouchableOpacity> */}
		</View>
	);
}
