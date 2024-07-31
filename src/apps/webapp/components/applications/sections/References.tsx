import { useDispatch, useSelector } from "react-redux";
import {
	addSection,
	getApplication,
	getCanEdit,
	removeSection,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { REFERENCE_MODEL } from "../../../../../constants";
import {
	ApplicationDelete,
	ApplicationSection,
	StyledFormGrid,
} from "../Applications.styled";
import Button from "../../../../../features/ui/button/Button";
import { MdDelete } from "react-icons/md";
import Input from "../../../../../features/ui/input/Input";

const References = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const handleAdd = () => {
		dispatch(addSection({ field: "references", model: REFERENCE_MODEL }));
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>References</h2>
					<p className="gray">
						Provide references that can be contacted in the event we
						require additional info
					</p>
				</div>
				{canEdit && (
					<Button type="button" onClick={handleAdd}>
						Add Finances
					</Button>
				)}
			</div>
			<div className="column gap-2">
				{application.references.map((reference, index) => (
					<ReferenceSection
						key={index}
						index={index}
						reference={reference}
					/>
				))}
			</div>
		</ApplicationSection>
	);
};

const ReferenceSection = ({ reference, index }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	const handleDelete = () => {
		dispatch(removeSection({ field: "references", index }));
	};

	return (
		<div className="column gap-05">
			<div className="row gap-2">
				{canEdit && (
					<ApplicationDelete onClick={handleDelete} type="button">
						<p>Remove {reference?.name || "Reference"}</p>
						<MdDelete />
					</ApplicationDelete>
				)}
			</div>
			<StyledFormGrid>
				<Input
					label="Reference Name"
					value={reference?.name || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "references",
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
					label="Phone Number"
					value={reference?.phoneNumber || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "references",
								index,
								key: "phoneNumber",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Relation to Applicant"
					value={reference?.relationship || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "references",
								index,
								key: "relationship",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
			</StyledFormGrid>
		</div>
	);
};

export default References;
