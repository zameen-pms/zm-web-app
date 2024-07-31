import { useRef } from "react";
import HomeHero from "../../components/home/HomeHero";
import HomeServices from "../../components/home/HomeServices";
import HomeForm from "../../components/home/HomeForm";

const ServicesHome = () => {
	const formRef = useRef<HTMLFormElement>();

	const handleClick = () => {
		formRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<HomeHero onClick={handleClick} />
			<HomeServices />
			<HomeForm ref={formRef} />
		</>
	);
};

export default ServicesHome;
