import { ReactElement, useState } from "react";

interface UseMultiPageFormProps {
	steps: ReactElement[];
}

interface UseMultiPageFormReturn {
	currentStep: number;
	currentComponent: ReactElement;
	next: () => void;
	previous: () => void;
	goTo: (step: number) => void;
	isFirstStep: boolean;
	isLastStep: boolean;
}

const useMultiPageForm = ({
	steps,
}: UseMultiPageFormProps): UseMultiPageFormReturn => {
	const [currentStep, setCurrentStep] = useState(0);

	const next = async () => {
		setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
	};

	const previous = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	};

	const goTo = (step: number) => {
		setCurrentStep(step);
	};

	return {
		currentStep,
		currentComponent: steps[currentStep],
		next,
		previous,
		goTo,
		isFirstStep: currentStep === 0,
		isLastStep: currentStep === steps.length - 1,
	};
};

export default useMultiPageForm;
