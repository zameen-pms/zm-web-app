import { formatDate } from "../utils/formatDate";

interface Landlord {
	name: string;
	phoneNumber: string;
}

interface Residence {
	location: string;
	landlord: Landlord;
	rent: number;
	dates: string;
}

interface Employer {
	company: string;
	role: string;
	monthlyIncome: number;
	dates: string;
}

interface AdditionalIncome {
	description: string;
	monthlyIncome: number;
}

interface GeneralQuestions {
	doesSmoke: string;
	convictedFelon: string;
	bankruptcy: string;
	evicted: string;
}

interface Reference {
	name: string;
	relation: string;
	phoneNumber: string;
}

interface Signature {
	name: string;
	date: string;
}

export interface ApplicationInterface {
	_id?: string;
	property: string;
	type: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	ssn: string;
	dob: string;
	dl: string;
	currentResidence: Residence;
	otherResidence: Residence;
	currentEmployer: Employer;
	previousEmployer: Employer;
	additionalIncome: AdditionalIncome;
	totalGrossIncome: number;
	proofOfIncome: string[];
	generalQuestions: GeneralQuestions;
	primaryReference: Reference;
	secondaryReference: Reference;
	pets: string;
	cosigning: string;
	coapplicants: string;
	dependents: string;
	signature: Signature;
	createdAt?: Date;
	updatedAt?: Date;
}

export const APPLICATION_MODEL: ApplicationInterface = {
	property: "",
	type: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	email: "",
	ssn: "",
	dob: "",
	dl: "",
	currentResidence: {
		location: "",
		landlord: {
			name: "",
			phoneNumber: "",
		},
		rent: 0,
		dates: "",
	},
	otherResidence: {
		location: "",
		landlord: {
			name: "",
			phoneNumber: "",
		},
		rent: 0,
		dates: "",
	},
	currentEmployer: {
		company: "",
		role: "",
		monthlyIncome: 0,
		dates: "",
	},
	previousEmployer: {
		company: "",
		role: "",
		monthlyIncome: 0,
		dates: "",
	},
	additionalIncome: {
		description: "",
		monthlyIncome: 0,
	},
	totalGrossIncome: 0,
	proofOfIncome: [],
	generalQuestions: {
		doesSmoke: "",
		convictedFelon: "",
		bankruptcy: "",
		evicted: "",
	},
	primaryReference: {
		name: "",
		relation: "",
		phoneNumber: "",
	},
	secondaryReference: {
		name: "",
		relation: "",
		phoneNumber: "",
	},
	pets: "",
	cosigning: "",
	coapplicants: "",
	dependents: "",
	signature: {
		name: "",
		date: formatDate(new Date()),
	},
};
