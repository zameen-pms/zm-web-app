import { useDispatch, useSelector } from "react-redux";
import {
	addSection,
	getApplication,
	getCanEdit,
	removeSection,
	updateSection,
} from "../../../../../features/app/applicationSlice";
import { FINANCE_MODEL } from "../../../../../constants";
import {
	ApplicationDelete,
	ApplicationSection,
	StyledFormGrid,
} from "../Applications.styled";
import Button from "../../../../../features/ui/button/Button";
import { MdDelete } from "react-icons/md";
import Input from "../../../../../features/ui/input/Input";

const Finances = () => {
	const dispatch = useDispatch();
	const application = useSelector(getApplication);
	const canEdit = useSelector(getCanEdit);

	const handleAdd = () => {
		dispatch(addSection({ field: "finances", model: FINANCE_MODEL }));
	};

	return (
		<ApplicationSection>
			<div className="row justify-sb align-center">
				<div className="column">
					<h2>Finances</h2>
					<p className="gray">
						Please provide any relevant finances (savings/checkings
						accounts, student/auto loans, etc.).
					</p>
				</div>
				{canEdit && (
					<Button type="button" onClick={handleAdd}>
						Add Finances
					</Button>
				)}
			</div>
			<div className="column gap-2">
				{application.finances.map((finance, index) => (
					<FinanceSection
						key={index}
						index={index}
						finance={finance}
					/>
				))}
			</div>
		</ApplicationSection>
	);
};

const FinanceSection = ({ finance, index }) => {
	const dispatch = useDispatch();
	const canEdit = useSelector(getCanEdit);

	const handleDelete = () => {
		dispatch(removeSection({ field: "finances", index }));
	};

	return (
		<div className="column gap-05">
			<div className="row gap-2">
				{canEdit && (
					<ApplicationDelete onClick={handleDelete} type="button">
						<p>Remove {finance?.name || "Finance"}</p>
						<MdDelete />
					</ApplicationDelete>
				)}
			</div>
			<StyledFormGrid>
				<Input
					label="Account/Institution"
					value={finance?.name || ""}
					placeholder="ex. Bank of America - Savings"
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "finances",
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
					label="Amount ($): use negatives for debts"
					value={finance?.amount || ""}
					onChange={(e) =>
						dispatch(
							updateSection({
								field: "finances",
								index,
								key: "amount",
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

export default Finances;
