import { useSelector } from "react-redux";
import { getUser } from "../../../../features/app/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ role }) => {
	const user = useSelector(getUser);
	const location = useLocation();

	return (
		<>
			{user?.role === role ? (
				<Outlet />
			) : user?.accessToken ? (
				<Navigate
					to="/auth/unauthorized"
					state={{ from: location }}
					replace
				/>
			) : (
				<Navigate to="/sign-in" state={{ from: location }} replace />
			)}
		</>
	);
};

export default RequireAuth;
