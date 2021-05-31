import dotenv from 'dotenv';

interface Config {
	[key: string]: any;
}
dotenv.config()
const ConfigSettings: Config = {};
ConfigSettings['PORT'] = process.env.PORT;
export default ConfigSettings;
