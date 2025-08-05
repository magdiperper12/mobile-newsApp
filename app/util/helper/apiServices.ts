import axios from 'axios';

const baseURL = 'https://newsapi.org/v2';
const apiKay = '564919c9498a43ff9374b9bee93ab540';
export function get(url: string) {
	const myUrl = `${baseURL}${url}&apiKey=${apiKay}`;
	return axios.get(myUrl);
}
