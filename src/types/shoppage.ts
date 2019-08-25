export type Item = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
};
export type Collections = {
	id: number;
	title: string;
	routeName: string;
	items: Item[];
};
