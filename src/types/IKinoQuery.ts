interface IKinoFilters {
	rating: string;
	year: string;
	sortByRelease?: string;
	genre: string;
}

export interface IKinoBaseQuery {
	id?: string | string[] | undefined;
	type?: string;
	query?: string;
	limit?: number;
	page?: number;
}

export interface IKinoQuery extends IKinoBaseQuery {
	filters: IKinoFilters;
}