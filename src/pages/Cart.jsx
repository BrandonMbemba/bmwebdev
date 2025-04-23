import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Regrouper les articles identiques
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = `${item.model}-${item.color}`;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const itemsArray = Object.values(groupedItems);

  const total = itemsArray.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  if (itemsArray.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Votre panier est vide.</h2>
        <Link to="/">← Retour à la boutique</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>🛒 Votre Panier</h1>

      {itemsArray.map((item, index) => (
        <div key={index} className="cart-item">
          {item.images && item.images.length > 0 && (
            <img
              src={item.images[0]}
              alt={item.model}
              className="cart-item-image"
              style={{ width: '120px', height: 'auto' }}
            />
          )}
          <div className="cart-item-info">
            <h2>{item.model || 'Produit'}</h2>
            <p className="color"><strong>Couleur :</strong> {item.color || 'Non renseignée'}</p>
            <p>Prix unitaire : {item.price ? `${item.price} €` : 'Non renseigné'}</p>
            <p>Quantité : x{item.quantity}</p>
            <button onClick={() => removeFromCart(cartItems.findIndex(i => i.model === item.model))}>
              Retirer un exemplaire
            </button>
          </div>
        </div>
      ))}

      <h2 className="cart-total">Total : {total.toFixed(2)} €</h2>

      <Link to="/" className="button">← Continuer vos achats</Link>
    </div>
  );
};

export default Cart;