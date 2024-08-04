import { getUser } from "../../../../features/app/authSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ManagerHome = () => {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user?.accessToken) {
			navigate("/auth/sign-in");
			return;
		}
		navigate("/properties");
	}, []);

	return <></>;
};

export default ManagerHome;
