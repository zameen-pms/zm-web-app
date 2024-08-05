export const formatFileName = (filename: string) => {
	let lowercased = filename.toLowerCase();
	let withUnderscores = lowercased.replace(/\s+/g, "_");
	let trimmed = withUnderscores.slice(-20);
	return trimmed;
};
