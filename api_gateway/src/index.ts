import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graph/typeDef';
import resolvers from './graph/resolver';
import formatError from './graph/formatError';
import Config from './config';

const { PORT, ENV } = Config;
const app = express();

app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: (origin, cb) => cb(null, true),
	})
);
const apolloServer: ApolloServer = new ApolloServer({
	context: (context) => context,
	formatError,
	resolvers,
	typeDefs,
});

apolloServer.applyMiddleware({ app });

app.listen(PORT, () => {
	if (ENV !== 'production')
		return console.log(
			` app is livee on port http://localhost:${PORT}${apolloServer.graphqlPath}`
		);
	console.log(`server is up and live in ${ENV}`);
});