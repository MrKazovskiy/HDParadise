import { IKinoFact } from './IKinoFact';

export interface IKinoMoviePoster {
	previewUrl: string;
	url: string;
	_id: string;
}

interface IKinoMovieTrailer {
	name: string;
	site: string;
	url: string;
}

export interface IKinoMovieRating {
	await: number;
	filmCritics: number;
	imdb: number;
	kp: number;
	russianFilmCritics: number;
	_id: string;
}

interface IKinoMovieBudget {
	currency: string;
	value: number;
}

interface IKinoMoviePremiere {
	cinema: Date;
	country: string;
	russia: Date;
	world: Date;
}

interface IKinoMovieSeasonsInfo {
	number: number;
	episodesCount: number;
}

interface IKinoMovieTechnology {
	has3D: boolean;
	hasImax: boolean;
}

export interface IKinoMoviePerson {
	id: number;
	name: string;
	enName: string;
	description: string;
	enProfession: 'director' | 'actor' | 'design' | 'producer' | 'composer' | 'editor';
	photo: string;
}

interface IKinoMovieDistributors {
	distributor: string;
	distributorRelease: null;
}

interface IKinoMovieProdComp {
	name: string;
	previewUrl: string;
	url: string;
}

interface IKinoMovieSequels {
	alternativeName: string;
	enName: string;
	id: number;
	poster: IKinoMoviePoster;
	type: string;
}

export interface ISimilarMovie {
	alternativeName: string;
	enName: string;
	id: number;
	name: string;
	poster: IKinoMoviePoster;
}

interface IKinoMovieLang {
	name: string;
	nameEn: string;
}

type Fees = {
	value: number;
	currency: string;
};

interface IKinoMovieFees {
	usa: Fees;
	world: Fees;
}

export interface IKinoMovie {
  	data: any;
	ageRating: number;
	alternativeName: string;
	backdrop: { url: string };
	budget: IKinoMovieBudget;
	countries: { name: string }[];
	createDate: Date;
	description: string;
	distributors: IKinoMovieDistributors;
	fees: IKinoMovieFees;
	facts: IKinoFact[];
	genres: { name: string }[];
	id: number;
	_id: string | undefined;
	enName: string;
	images: { framesCount: number };
	lists: [];
	logo: { url: string };
	movieLength: number;
	name: string;
	names: { name: string }[];
	persons: IKinoMoviePerson[];
	poster: IKinoMoviePoster;
	premiere: IKinoMoviePremiere;
	productionCompanies: IKinoMovieProdComp[];
	rating?: IKinoMovieRating;
	ratingMpaa: string;
	seasonsInfo?: IKinoMovieSeasonsInfo[];
	sequelsAndPrequels: IKinoMovieSequels[];
	shortDescription: string;
	similarMovies: IKinoMovie[];
	slogan: string;
	spokenLanguages: IKinoMovieLang[];
	status: string;
	technology: IKinoMovieTechnology;
	ticketsOnSale: boolean;
	type: string;
	typeNumber: number;
	updateDates: Date[];
	updatedAt: Date;
	videos: { trailers: IKinoMovieTrailer[] };
	votes: IKinoMovieRating;
	year: number;
}