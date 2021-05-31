import { User } from '../../../interfaces/entities';
import UserService from '../../../services/UserServer';

const userResolver = async(parent: any, args: any, context: any, info: any) => {
	// console.log(args);

	try {
		// const users = await UserService.getUsers();
		const users = await UserService.getUsersAxios();
		console.log(users,"users")
		return users;
	} catch (error) {
		console.log(error,"users eroor")

		return error;
	}
};
export default userResolver;
