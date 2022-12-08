export interface IKinoReview {
	id: number;
	author: string;
	date: Date;
	movieId: number;
	review: string;
	reviewDislikes: number;
	reviewLikes: number;
	title: string;
	type: 'Позитивный' | 'Нейтральный' | 'Негативный';
	updatedAt: Date;
	userRating: number;
}