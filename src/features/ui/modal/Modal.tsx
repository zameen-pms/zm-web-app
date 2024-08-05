import { FC, ReactNode } from "react";
import { StyledModal } from "./Modal.styled";

interface ModalProps {
	gap?: number;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ gap, children }) => {
	return <StyledModal $gap={gap}>{children}</StyledModal>;
};

export default Modal;
