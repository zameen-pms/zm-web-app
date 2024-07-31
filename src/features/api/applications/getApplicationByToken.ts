import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const getApplicationByToken = async (token: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.get(`/applications/token/${token}`);
		return response;
	} catch (err) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default getApplicationByToken;
