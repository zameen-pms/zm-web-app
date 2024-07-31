interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
}

export const getAddress = (address: Address): string => {
	const { street, city, state, zip } = address;
	return `${street}, ${city}, ${state} ${zip}`;
};
