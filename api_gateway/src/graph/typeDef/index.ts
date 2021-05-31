import { gql } from 'apollo-server';

const typeDef = gql`
	type Name {
		name: String!
	}
	type Query {
        userResolver: [Name]
	}

	type Mutation {
		addUserResolver(name: String): [Name!]
	}
`;
export default typeDef;
