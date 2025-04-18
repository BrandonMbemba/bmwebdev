import React from 'react';
import Thumb from '../components/Thumb';
import projets from '../data/projets.json';
import ImageBanner from '../../public/IMG_6445.webp';
import { NavLink } from 'react-router-dom';
import LogoHome from '../../public/MIVA_V4-[Reěcupeěreě]_Plan-de-travail-1-copie-8.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <img className='logo' src={LogoHome}/>
                <img src={ImageBanner} alt="Banniére avec une femme en maillot de bain au bord d'une piscine" />
            </div>
            <div className='work'>
                <h2>S H O P</h2>
            </div>
            <div className="gallery">
                {projets.map((projet) => (
                    <Thumb key={projet.id} projet={projet} />
                ))}
            </div>
            <div className='contactus'>
                <h2>Contact M I V A</h2>
                <p>Whether you need styling advice, sizing help, or simply want to know more — we’re just a message away.</p>                
                <NavLink to="/Contact">
                    <button>Need help ?</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;