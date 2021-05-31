import { GraphQLError } from 'graphql';

const formatErrors = (error: GraphQLError) => {
	//   @ts-ignore
	const errorDetails = error.originalError?.response?.body;

	try {
		if (errorDetails) return JSON.parse(errorDetails);
	} catch (e) {
		console.log(e);
	}

	if (error.message) return error.message;

	return null;
};

export default formatErrors;
