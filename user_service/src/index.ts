import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import Config from './config';

const app = express();
const { PORT } = Config;

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: (origin, cb) => cb(null, true),
	})
);

const namesDb = [{ name: 'sharon' }, { name: 'sally' }, { name: 'ben' }];
app.get('/users', (req: Request, res: Response, next: NextFunction) => {
	console.log('in route');
	res.status(200).json(namesDb);
});
app.post('/users', (req: any, res: Response, next: NextFunction) => {
	console.log('in route');
	console.log(req.body);
	namesDb.push(req.body);
	res.status(200).json(namesDb);
});
app.listen(PORT, () => console.info(`app is runninnng on port:${PORT}`));
