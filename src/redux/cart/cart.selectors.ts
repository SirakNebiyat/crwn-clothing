import { createSelector } from 'reselect';
import { Item } from '../../types/shoppage';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector([ selectCart ], (cart) => cart.cartItems as Item[]);

export const selectCartItemsCount = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce((accumaletedQuantity: number, cartItem: Item) => accumaletedQuantity + cartItem.quantity!, 0)
);

export const selectCartHidden = createSelector([ selectCart ], (cart) => cart.hidden);

export const selectCartTotal = createSelector([ selectCartItems ], (cartItems) =>
	cartItems.reduce(
		(accumaletedQuantity: number, cartItem: Item) => accumaletedQuantity + cartItem.quantity! * cartItem.price,
		0
	)
);
