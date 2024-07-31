import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateApplicationByToken = async (
	token: string,
	body: any
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(
			`/applications/token/${token}`,
			body
		);
		return response;
	} catch (err) {
		throw new Error(err?.response?.data || err.message);
	}
};

export default updateApplicationByToken;
