import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getLeases = async (params?: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get("/leases", { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getLeases;
