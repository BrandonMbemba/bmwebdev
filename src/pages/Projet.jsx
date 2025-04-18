import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projets from '../data/projets.json';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';

const Projet = () => {
    const { id } = useParams();
    const projet = projets.find((projet) => projet.id === id);

    if (!projet) {
        return <Navigate to="/Error404" />;
    }

    return (
        <div className='projet'>
            {projet.pictures.length === 1 ? (
                <img src={projet.pictures[0]} alt="Projet" />
            ) : (
                <Carousel images={projet.pictures} />
            )}

            <div className='locationAndInfo'>
                <div className='location'>
                    <h1>{projet.title}</h1>
                    <a href={projet.site} target="_blank" rel="noopener noreferrer">
                        Ici Prix pour chaque article + Option 'Ajouter au panier'
                    </a>
                </div>
            </div>

            <div className='accordion'>
                <div className='description'>
                    <Accordion title='Description' content={projet.description} />
                </div>
                <div className='equipements'>
                    <Accordion
                        title='Compétences utilisées'
                        content={projet.equipments.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projet;