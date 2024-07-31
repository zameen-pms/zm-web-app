import { AxiosPromise } from "axios";
import axiosPublic from "../axiosPublic";

const sendEmail = async ({
	subject,
	body,
	recipients,
}): Promise<AxiosPromise> => {
	try {
		const response = await axiosPublic.post("/email", {
			subject,
			body,
			recipients,
		});
		return response;
	} catch (err) {
		throw new Error(err.message);
	}
};

export default sendEmail;
