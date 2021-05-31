import { User } from "../../../interfaces/entities";
import UserService from "../../../services/UserServer";

const addUserResolver = async(parent: any, args: User, context: any, info: any) => {
	// console.log(args);
	
	try {	
		const users = await UserService.createUser(args)
		return users;
	} catch (error) {
		
	}
};
export default addUserResolver;