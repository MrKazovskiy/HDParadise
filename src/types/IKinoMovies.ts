import { IKinoData } from './IKinoData';
import { IKinoMovie } from './IKinoMovie';

export interface IMovies extends IKinoData {
	docs: IKinoMovie[];
}