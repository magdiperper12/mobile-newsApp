import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import styles from './style';

interface newstype {
	id: number;
	title: string;
	image: string;
}
export default function MainNews() {
	const news = [
		{
			id: 1,
			title: 'this is 1 item title',
			image:
				'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?_gl=1*1ru2vc0*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkwNjEkajIwJGwwJGgw',
		},
		{
			id: 2,
			title: 'this is 2 item title',
			image:
				'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?_gl=1*1vbiulz*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkwOTgkajQ3JGwwJGgw',
		},
		{
			id: 3,
			title: 'this is 3 item title',
			image:
				'https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg?_gl=1*1tys23i*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkxMzEkajE0JGwwJGgw',
		},
		{
			id: 4,
			title: 'this is 4 item title',
			image:
				'https://images.pexels.com/photos/32879093/pexels-photo-32879093.jpeg?_gl=1*106sslg*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkxNTIkajU2JGwwJGgw',
		},
		{
			id: 5,
			title: 'this is 5 item title',
			image:
				'https://images.pexels.com/photos/31160065/pexels-photo-31160065.jpeg?_gl=1*11il1s6*_ga*MTQ0MzUwNzY1LjE3NDk5MTc3MTQ.*_ga_8JE65Q40S6*czE3NTM2Mjg3OTkkbzUkZzEkdDE3NTM2MjkxOTYkajEyJGwwJGgw',
		},
	];
	function renderNews({ item }: { item: newstype }) {
		return (
			<ImageBackground
				source={{
					uri: item.image,
				}}
				style={styles.container}>
				<View style={styles.whitecontainer}>
					<Text style={styles.deadlinetext}>{`Deadline ${item.id}`}</Text>
					<Text style={styles.newstext}>{item.title}</Text>
				</View>
			</ImageBackground>
		);
	}
	return (
		<FlatList
			data={news}
			renderItem={({ item }) => renderNews({ item })}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			pagingEnabled
			style={styles.containerstyle}
		/>
	);
}
