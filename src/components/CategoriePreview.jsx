import React from 'react';
import Thumb from './Thumb';
import { NavLink } from 'react-router-dom';

const CategoriePreview = ({ data, id }) => {
    if (!data || !data.products || data.products.length === 0) return null;
    const firstProduct = data.products[0];
    if (!firstProduct) return null; // sécurité

    return (
        <div className='categorie-preview'>
            <div className='categorie-header'>
                <h2>{data.title}</h2>
                <NavLink to={`/shop/${id}`}>
                    <button>See all</button>
                </NavLink>
            </div>
            <div className='gallery'>
                <Thumb
                    key={`${id}-0`}
                    projet={{
                        ...firstProduct,
                        id: id, // ✅ ici on transmet bien le nom de la catégorie
                        cover: data.cover || firstProduct.images[0],
                        title: data.title
                    }}
                />
            </div>
        </div>
    );
};

export default CategoriePreview;