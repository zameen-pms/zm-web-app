import { useDispatch, useSelector } from "react-redux";
import {
	addSection,
	getApplication,
	getCanEdit,
	removeSection,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { MEMBER_MODEL } from "../../../../../constants";
import {
	ApplicationDelete,
	ApplicationSection,
	StyledFormGrid,
} from "../Applications.styled";
import Button from "../../../../../features/ui/button/Button";
import { MdDelete } from "react-icons/md";
import Dropdown from "../../../../../features/ui/dropdown/Dropdown";
import Input from "../../../../../features/ui/input/Input";

const Members = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const handleAdd = () => {
		dispatch(addSection({ field: "members", model: MEMBER_MODEL }));
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>Dependent & Co-Applicants</h2>
					<p className="gray">
						Please mention any dependents (under 18) and
						co-applicants who will be residing with you.
					</p>
				</div>
				{canEdit && (
					<Button type="button" onClick={handleAdd}>
						Add Member
					</Button>
				)}
			</div>
			<div className="column gap-2">
				{application.members.map((member, index) => (
					<MemberSection key={index} index={index} member={member} />
				))}
			</div>
		</ApplicationSection>
	);
};

const MemberSection = ({ index, member }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	const handleDelete = () => {
		dispatch(removeSection({ field: "members", index }));
	};

	return (
		<div className="column gap-05">
			<div className="row gap-2">
				{canEdit && (
					<ApplicationDelete onClick={handleDelete} type="button">
						<p>Remove {member?.name || "Member"}</p>
						<MdDelete />
					</ApplicationDelete>
				)}
			</div>
			<StyledFormGrid>
				<Dropdown
					label="Member Type"
					options={["Co-Applicant", "Dependent"]}
					value={member?.type || ""}
					onChange={(option) =>
						dispatch(
							updateSection({
								field: "members",
								index,
								key: "type",
								value: option,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				<Input
					label="Name"
					value={member?.name || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "members",
								index,
								key: "name",
								value: e.target.value,
							})
						)
					}
					required
					disabled={!canEdit}
				/>
				{member?.type === "Dependent" && (
					<Input
						label="Date of Birth"
						value={member?.dob || ""}
						onChange={(e) =>
							dispatch(
								updateSection({
									field: "members",
									index,
									key: "dob",
									value: e.target.value,
								})
							)
						}
						type="date"
						required
						disabled={!canEdit}
					/>
				)}
				<Input
					label="Relation to Applicant"
					value={member?.relationship || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "members",
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

export default Members;
