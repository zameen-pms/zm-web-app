import { BACKEND_URL } from "../../constants";

export const getImageUrl = (key: string) => {
	return `${BACKEND_URL}/assets/${key}/redirect`;
};
