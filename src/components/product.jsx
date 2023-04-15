import React, {useState} from 'react';
import './product.css';
import ShoppingCartStore from '../store/ShoppingCartStore';
import useStore from '../hooks/useStore';

export default function product({data:cartData,newItems,cartProducts,setCartProducts}) {
  const store = useStore(ShoppingCartStore, []);

  function addToCart(item) {
		ShoppingCartStore.dispatch('addToCart', item);
	}

	return (
		<div className="product">
			<div className="image-container">
				<img src={cartData.ProductImage} alt="clothing" />
			</div>

			<div className="description">
				<div className="name">
					<p>{cartData.ProductName}</p>
				</div>

				<div className="add">
					<span>${cartData.ProductPrice}</span>
					<button
						onClick={() => {
							setCartProducts(cartProducts.concat({cartData}));
							addToCart(cartData);
						}}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
