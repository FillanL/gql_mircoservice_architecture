import config from '../config';
import axios from "axios"
import got from 'got';
import { User } from '../interfaces/entities';

const { USER_PORT } = config;
// interface User {
// 	username: string;
// 	password: string;
// }
interface CreateCreditionals {
	username: string;
	password: string;
	email: string;
}
export default class UserService {
	static getUsers = async () => {
		const response = await got
			.get(`http://localhost:${USER_PORT}/users`)
			.json();
		if (response) return response;
		return 'no response from callee';
	};
	static getUsersAxios = async () => {
		const response = await axios
			.get(`http://localhost:${USER_PORT}/users`)

		if (response.status === 200) return response.data;
		return 'no response from callee';
	};

	static createUser = async (cred) => {
		const response = await got
			.post(`http://localhost:${USER_PORT}/users`, {
				json: cred,
				responseType: 'json',
			})
			.json();
		if (response) return response;
		return 'no response from callee';
	};

	static deleteUser = async (userId: string) => {
		return await got.delete(`http://localhost:4646/user/${userId}`).json();
	};
}
