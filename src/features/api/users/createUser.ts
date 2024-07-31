import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createUser = async (body?: any): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/users", { body });
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default createUser;
