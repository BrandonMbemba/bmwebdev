import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import Tanga from '../data/bikini_bottoms_tanga_miwa.json';
import Culotte from '../data/bikini-bottom-culotte-a-noeuds.json';
import Haut from '../data/bikini_tops_miwa.json';
import TailleHaute from '../data/bikini-bottom-taille-haute.json';
import Swimsuits from '../data/swimsuits.json';
import Accessory from '../data/accessory.json';
import Carousel from '../components/Carousel';

const Shop = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);

    const categories = {
        tanga: {
            title: "BIKINI BOTTOMS - TANGA",
            data: Tanga
        },
        culotte: {
            title: "BIKINI BOTTOMS - TIE SIDE", // ici ton changement
            data: Culotte
        },
        haut: {
            title: "BIKINI TOPS",
            data: Haut
        },
        taillehaute: {
            title: "BIKINI BOTTOM - HIGH WAISTED",
            data: TailleHaute
        },
        swimsuits: {
            title: "SWIMSUITS",
            data: Swimsuits
        },
        accessory: {
            title: "ACCESSORY",
            data: Accessory
        }
    };

    const produits = categories[id]?.data?.[0]?.products;

    if (!produits) {
        return <Navigate to="/Error404" />;
    }

    return (
        <div className="shop-category">
            <h1 className="shop-title">{categories[id]?.title || "Catégorie"}</h1>

            {produits.map((produit, index) => {
                const hasImages = produit.images && produit.images.length > 0;

                return (
                    <div key={`${id}-${index}`} className="shop-item">
                        {hasImages ? (
                            <Carousel key={`${id}-${index}`} images={produit.images} />
                        ) : (
                            <p>Aucune image disponible</p>
                        )}

                        <div className="shop-info">
                            <h2>{produit.model || 'Modèle inconnu'}</h2>
                            <p className="color"><strong>Couleur :</strong> {produit.color || 'Non renseignée'}</p>
                            <p>{produit.description || 'Pas de description.'}</p>
                            <p><strong>Prix : </strong>{produit.price ? `${produit.price} €` : 'Non renseigné'}</p>
                            <button onClick={() => addToCart(produit)}>Ajouter au panier</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Shop;