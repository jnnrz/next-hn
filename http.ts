import fetch from 'isomorphic-unfetch';
import LRUCache from 'lru-cache';
import { baseURL } from './constants';

const options = {
	max: 500,
	length: (n, key) => {
		return n * 2 + key.length;
	},
	maxAge: 1000 * 60 * 60
};

const cache = new LRUCache(options);

export const get = async (type, itemOrPage: string | any = '1') => {
	const url = `${baseURL}/${type}/${itemOrPage}.json`;
	const storedResponse = cache.get(url);

	// If there is a stored response available, return that
	if (typeof storedResponse !== 'undefined') {
		return storedResponse;
	}

	const response = await fetch(url).then(r => r.json());
	// Save response to the cache
	cache.set(url, response);
	return response;
};
