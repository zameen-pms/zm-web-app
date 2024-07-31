export interface PropertyProps {
	_id: string;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
	type: "Single-Family" | "Duplex" | "Multi-Family" | "Apartment";
	owners: string[];
	currentLease?: string;
	availability: "Available" | "Unavailable" | "Occupied";
	images: {
		key: string;
		name: string;
		description: string;
	}[];
	general: {
		beds: number;
		baths: number;
		sqft: number;
		rent: number;
		description: string;
	};
	createdAt: Date;
	updatedAt: Date;
}
