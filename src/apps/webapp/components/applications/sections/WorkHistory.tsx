import { useDispatch, useSelector } from "react-redux";
import {
	addSection,
	getApplication,
	getCanEdit,
	removeSection,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { EMPLOYER_MODEL } from "../../../../../constants";
import {
	ApplicationDelete,
	ApplicationSection,
	StyledFormGrid,
} from "../Applications.styled";
import Button from "../../../../../features/ui/button/Button";
import { MdDelete } from "react-icons/md";
import Input from "../../../../../features/ui/input/Input";

const WorkHistory = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const handleAdd = () => {
		dispatch(addSection({ field: "employers", model: EMPLOYER_MODEL }));
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>Work History</h2>
					<p>Please provide any relevant work history</p>
				</div>
				{canEdit && (
					<Button type="button" onClick={handleAdd}>
						Add Work History
					</Button>
				)}
			</div>
			<div className="column gap-2">
				{application.employers.map((employer, index) => (
					<EmployerSection
						key={index}
						employer={employer}
						index={index}
					/>
				))}
			</div>
		</ApplicationSection>
	);
};

const EmployerSection = ({ employer, index }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	const handleDelete = () => {
		dispatch(removeSection({ field: "employers", index }));
	};

	return (
		<div className="column gap-05">
			<div className="row gap-2">
				{canEdit && (
					<ApplicationDelete onClick={handleDelete} type="button">
						<p>Remove {employer?.name || "Employer"}</p>
						<MdDelete />
					</ApplicationDelete>
				)}
			</div>
			<StyledFormGrid>
				<Input
					label="Employer Name"
					value={employer?.name || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "name",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Job Title"
					value={employer?.title || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "title",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Work Address"
					value={employer?.address || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "address",
								value: e.target.value,
							})
						)
					}
					disabled={!canEdit}
				/>
				<Input
					label="Start Date"
					value={employer?.fromDate || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "fromDate",
								value: e.target.value,
							})
						)
					}
					type="date"
					required
					disabled={!canEdit}
				/>
				<Input
					label="End Date (Leave blank for current job)"
					value={employer?.toDate || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "toDate",
								value: e.target.value,
							})
						)
					}
					type="date"
					disabled={!canEdit}
				/>
				<Input
					label="Monthly Income ($)"
					value={employer?.monthlyIncome || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "employers",
								index,
								key: "monthlyIncome",
								value: e.target.value,
							})
						)
					}
					type="number"
					required
					disabled={!canEdit}
				/>
			</StyledFormGrid>
		</div>
	);
};

export default WorkHistory;
