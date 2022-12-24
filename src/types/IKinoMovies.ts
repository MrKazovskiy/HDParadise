import { IKinoData } from './IKinoData';
import { IKinoMovie } from './IKinoMovie';

export interface IKinoMovies extends IKinoData {
	docs: IKinoMovie[];
}