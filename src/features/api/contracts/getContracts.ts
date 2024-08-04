import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getContracts = async (params?: object): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get("/contracts", { params });
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default getContracts;
