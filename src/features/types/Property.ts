interface Address {
	street: string;
	city: string;
	state: string;
	zip: string;
}

interface Image {
	key: string;
	name: string;
	description: string;
}

interface General {
	beds: number;
	baths: number;
	sqft: number;
	rent: number;
	description: string;
}

export interface Property {
	_id?: string;
	address: Address;
	type: "Single-Family" | "Duplex" | "Multi-Family" | "Apartment";
	owners: string[];
	currentLease?: string;
	availability: "Available" | "Unavailable" | "Occupied";
	images: Image[];
	general: General;
	createdAt?: Date;
	updatedAt?: Date;
}
