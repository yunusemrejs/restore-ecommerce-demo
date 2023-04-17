import React, {useState} from 'react';
import CartProduct from '../../components/cartProduct';
import {Products} from '../../products';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import {SiVisa} from 'react-icons/si';
import {AiOutlinePlus} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';
import Paypal from '../../assets/paypal';
import './cart.css';
import ShoppingCartStore from '../../store/ShoppingCartStore';
import useStore from '../../hooks/useStore';

export default function cart() {
	const [payment, setPayment] = useState('visa');
	const store = useStore(ShoppingCartStore, new Set());

	const width = window.innerWidth;

	function addToCart(item) {
		console.log(item)
		ShoppingCartStore.dispatch('addToCart', item);
	}

	function removeFromCart(item) {
		ShoppingCartStore.dispatch('removeFromCart', item);
	}

	function deleteFromCart(item){
		ShoppingCartStore.dispatch('deleteFromCart', item);
	}

	function clearCart() {
		ShoppingCartStore.dispatch('clearCart');
	}

	function toggleSidebar() {
		ShoppingCartStore.dispatch('toggleSidebarState');
	}

	return (
		<div className={`cart-page`}>
			<div className={`checkout-sidebar ${store.isSidebarShow ? '' : 'hide'}`}>
				<div className="checkout-content">
					<div className="title">
						<p>Checkout Information</p>
						<div className="cls-btn" onClick={() => toggleSidebar()}>
							<ImCross fill="#ff542a" />
						</div>
					</div>

					<div className="payment-section">
						<p>pay with</p>
						<div className="card-options">
							<SiVisa onClick={() => setPayment('visa')} className="visa" size={85} color={`${payment === 'visa' ? 'white' : '#8a8a8a'}`} />
							<Paypal setPay={setPayment} payment={payment}></Paypal>
						</div>
						<span className="indicator" style={{left: `${payment === 'paypal' ? (width <= 780 ? '7.3em' : '6.5em') : ''}`, width: `${payment === 'paypal' ? '6.8em' : ''}`}}></span>
					</div>

					<div className="bill-section">
						<div>
							<div className="name">subtotal</div>
							<div className="cost">${store.totalPrice.toFixed(2)}</div>
						</div>

						<div>
							<div className="name">taxes</div>
							<div className="cost">$69.00</div>
						</div>

						<div>
							<div className="name">shipping</div>
							<div className="cost">$420.69</div>
						</div>

						<div>
							<div className="name">grand total</div>
							<div className="cost">${store.totalPrice > 0 && (489.69 + store.totalPrice).toFixed(2)}</div>
						</div>
					</div>
				</div>

				<button>Procceed To Checkout</button>
			</div>

			<div className={`cart-items-container  ${store.isSidebarShow ? '' : 'p0'}`}>
				{store.cartCounter > 0 && store.cartItems.map(item => {
					if (item.quantity !== 0) return <CartProduct key={item.itemId} id={item.itemId} img={item.ProductImage} name={item.ProductName} cartItem={item} price={item.ProductPrice} add={addToCart} remove={removeFromCart} del={deleteFromCart} />;
				})}
				{store.cartCounter > 1 && (
					<button onClick={() => clearCart()} className="clear-btn">
						Empty Cart
					</button>
				)}
				{store.cartCounter == 0 && <h1 style={{fontFamily: 'DM Sans', marginTop: '4em'}}>Your Cart Is Empty 😔</h1>}
				<div className="bg-frost" onClick={() => toggleSidebar()} style={{backdropFilter: `blur( ${store.isSidebarShow ? '6px' : '0'})`, pointerEvents: `${store.isSidebarShow ? 'unset' : 'none'}`}}></div>
			</div>
		</div>
	);
}
