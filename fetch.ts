import LRUCache from 'lru-cache';
import ky from 'ky-universal';
import { baseURL } from './constants';

const options = {
	max: 500,
	length: (n, key) => {
		return n * 2 + key.length;
	},
	maxAge: 1000 * 60 * 60
};

const cache = new LRUCache(options);

export const getFeed = async (type, page: string | any = '1') => {
	const url = `${baseURL}/${type}/${page}.json`;
	const storedResponse = cache.get(url);

	// If there is a stored response available, return that
	if (typeof storedResponse !== 'undefined') {
		return storedResponse;
	}

	const response = await ky.get(url).json();
	// Save response to the cache
	cache.set(url, response);
	return response;
};
