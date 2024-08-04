import { useDispatch } from "react-redux";
import { setUser } from "../../../../features/app/authSlice";
import axios from "axios";
import { BACKEND_URL } from "../../../../constants";

const useLogout = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		dispatch(setUser({}));

		try {
			await axios.post(`${BACKEND_URL}/auth/logout`);
		} catch (err) {
			console.error(err);
		}
	};

	return logout;
};

export default useLogout;
