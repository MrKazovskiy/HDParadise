import { IKinoFact } from './IKinoFact';
import { IKinoMovie } from './IKinoMovie';

interface IKinoPersonPartner {
	id: number;
	name: string;
	children: number;
	relation: string;
	divorcedReason: string;
	divorced: boolean;
}

export interface IKinoPerson {
	id: number;
	photo: string;
	name: string;
	age: number;
	sex: string;
	birthday: Date;
	birthPlace: { value: string }[];
	partner: IKinoPersonPartner[];
	countAwards: number;
	death: Date;
	deathPlace: { value: string }[];
	enName: string;
	facts: IKinoFact[];
	growth: number;
	movies: IKinoMovie[];
	profession: { value: string }[];
	updatedAt: Date;
}