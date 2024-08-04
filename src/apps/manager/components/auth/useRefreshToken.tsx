import axios from "../../../../features/api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../features/app/authSlice";
import { BACKEND_URL } from "../../../../constants";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			const response = await axios.post(`${BACKEND_URL}/auth/refresh`);
			dispatch(setUser({ ...response.data }));
			return response?.data?.accessToken;
		} catch (err) {
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
