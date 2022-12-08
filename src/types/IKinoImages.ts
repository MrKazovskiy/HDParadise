import { IKinoData } from './IKinoData';

export interface IKinoImages {
	width: number;
	height: number;
	movieId: number;
	previewUrl: string;
	type: string;
	url: string;
}

export interface IKinoImages extends IKinoData {
	docs: IKinoImages[];
}