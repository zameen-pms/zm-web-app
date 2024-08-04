import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const deleteLeaseById = async (id: string): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.delete(`/leases/${id}`);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default deleteLeaseById;
