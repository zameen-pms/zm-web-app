import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const createLease = async (body: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/leases", body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default createLease;
