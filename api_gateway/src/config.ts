import dotenv from 'dotenv';
dotenv.config();
interface Config {
	[key: string]: any;
}
const configuration: Config = {};

configuration['ENV'] = process.env.NODE_ENV;
configuration['PORT'] = process.env.PORT;
configuration['USER_PORT'] = process.env.USER_PORT;

export default configuration;
