import { Item } from './../../types/shoppage';
export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity! + 1 } : cartItem
		);
	}

	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems: Item[] | any, cartItemToRemove: Item | any) => {
	const existingCartItem = cartItems.find((cartItem: Item) => cartItem.id === cartItemToRemove!.id);

	if (existingCartItem!.quantity === 1) {
		return cartItems.filter((cartItem: Item) => cartItem.id !== cartItemToRemove!.id);
	}

	return cartItems.map(
		(cartItem: Item) =>
			cartItem.id === cartItemToRemove!.id ? { ...cartItem, quantity: cartItem.quantity! - 1 } : cartItem
	);
};
