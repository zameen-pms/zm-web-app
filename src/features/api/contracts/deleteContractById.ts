import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const deleteContractById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.delete(`/contracts/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteContractById;
