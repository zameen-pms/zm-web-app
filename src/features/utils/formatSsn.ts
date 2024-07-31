export const formatSsn = (value: string) => {
	const numericValue = value.replace(/\D/g, "");
	const formattedValue = numericValue
		.replace(/^(\d{3})(\d)/, "$1-$2")
		.replace(/-(\d{2})(\d)/, "-$1-$2");
	return formattedValue;
};
