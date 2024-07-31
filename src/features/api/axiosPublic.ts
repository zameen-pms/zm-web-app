import axios from "axios";
import { BACKEND_URL, PUBLIC_API_TOKEN } from "../../constants";
import { store } from "../app/store";
import { getUser, setUser } from "../app/authSlice";

const axiosPublic = axios.create({
	baseURL: BACKEND_URL,
});

axiosPublic.interceptors.request.use(
	async (config) => {
		const state = store.getState();
		let { accessToken } = getUser(state);

		if (!accessToken) {
			const response = await axios.post(
				`${BACKEND_URL}/auth/public-login`,
				{
					token: PUBLIC_API_TOKEN,
				}
			);

			accessToken = response.data.accessToken;
			store.dispatch(
				setUser({
					accessToken,
				})
			);
		}

		if (config.headers) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosPublic;
