import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../../features/app/authSlice";
import useRefreshToken from "./useRefreshToken";
import Container from "../../../../features/ui/container/Container";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const auth = useSelector(getUser);
	const refresh = useRefreshToken();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!auth?.user?.accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			{isLoading ? (
				<Container>
					<p>Loading...</p>
				</Container>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default PersistLogin;
