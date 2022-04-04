import axios, { AxiosResponse } from 'axios';
import {PostType} from '../models/postInterface';


const instance = axios.create({
	baseURL: 'https://sephora.p.rapidapi.com/',
	timeout: 15000,
    headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': '83d734be42msh306322cfa6ead0fp172773jsn7014f3f4f7a9'
      }
});


const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};


export const Sephora = {
autoComplete:(query:string):Promise<any> => requests.get(`/auto-complete?q=${query}`),

	// getPosts: (): Promise<PostType[]> => requests.get('posts'),
	// getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	// createPost: (post: PostType): Promise<PostType> =>
	// 	requests.post('posts', post),
	// updatePost: (post: PostType, id: number): Promise<PostType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};