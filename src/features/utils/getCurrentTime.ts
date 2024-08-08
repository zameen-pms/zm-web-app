export const getCurrentTime = (): string => {
	const now = new Date();

	let hours = now.getHours();
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours ? hours : 12;
	const hoursStr = hours.toString().padStart(2, "0");

	return `${hoursStr}:${minutes} ${ampm}`;
};
