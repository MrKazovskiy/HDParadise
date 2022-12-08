import { IKinoData } from './IKinoData';
import { IKinoReview } from './IKinoReview';

export interface IKinoReviews extends IKinoData {
	docs: IKinoReview[];
}