import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumb = ({ projet }) => {
    return (
        <Link to={`/shop/${projet.id}`} className='thumbs'>
            <div className='thumbs'>
                <img src={projet.cover} alt={projet.alt || projet.title} />
            </div>
        </Link>
    );
};

Thumb.propTypes = {
    projet: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        cover: PropTypes.string,
        alt: PropTypes.string
    }).isRequired
};

export default Thumb;