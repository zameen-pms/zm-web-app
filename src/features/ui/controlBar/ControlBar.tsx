import { MdArrowBack } from "react-icons/md";
import { StyledControlBar } from "./ControlBar.styled";
import { useNavigate } from "react-router-dom";

const ControlBar = ({ back = "", children }) => {
	const navigate = useNavigate();

	return (
		<StyledControlBar>
			{back && (
				<div onClick={() => navigate(back)} className="go-back">
					<MdArrowBack />
					<p>Go Back</p>
				</div>
			)}
			<div className="row justify-sb">{children}</div>
		</StyledControlBar>
	);
};

export default ControlBar;
