import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const updateLeaseById = async (
	id: string,
	body: object
): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.put(`/leases/${id}`, body);
		return response;
	} catch (err) {
		console.log(err);
		throw new Error(err.message);
	}
};

export default updateLeaseById;
