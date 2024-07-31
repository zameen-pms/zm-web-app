import { useDispatch, useSelector } from "react-redux";
import {
	getApplication,
	getCanEdit,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { ApplicationSection, StyledFormGrid } from "../Applications.styled";
import Input from "../../../../../features/ui/input/Input";

const GeneralQuestions = () => {
	const application = useSelector(getApplication);

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>General Questions</h2>
				</div>
			</div>
			<div className="column gap-2">
				{application.questions.map((question, index) => (
					<QuestionSection
						key={index}
						index={index}
						question={question}
					/>
				))}
			</div>
		</ApplicationSection>
	);
};

const QuestionSection = ({ question, index }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	return (
		<StyledFormGrid>
			<Input
				label={question.question}
				value={question?.response || ""}
				onChange={(e) =>
					dispatch(
						updateSection({
							field: "questions",
							index,
							key: "response",
							value: e.target.value,
						})
					)
				}
				readOnly={
					question.question ==
					"Are you leaving your current residence?"
				}
				disabled={!canEdit}
				required
			/>
			{question.response.toLowerCase() == "yes" && (
				<Input
					label="Please Explain"
					value={question?.reason || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "questions",
								index,
								key: "reason",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
			)}
		</StyledFormGrid>
	);
};

export default GeneralQuestions;
