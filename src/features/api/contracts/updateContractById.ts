import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateContractById = async (
	id: string,
	body: object
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/contracts/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateContractById;
