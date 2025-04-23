import React from 'react';
import Tanga from '../data/bikini_bottoms_tanga_miwa.json';
import Culotte from '../data/bikini-bottom-culotte-a-noeuds.json';
import Haut from '../data/bikini_tops_miwa.json';
import TailleHaute from '../data/bikini-bottom-taille-haute.json';
import Swimsuits from '../data/swimsuits.json';
import Accessory from '../data/accessory.json';
import CategoriePreview from '../components/CategoriePreview';
import ImageBanner from '../../public/IMG_6445.webp';
import LogoHome from '../../public/MIVA_V4-[Reěcupeěreě]_Plan-de-travail-1-copie-8.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='banner'>
                <img className='logo' src={LogoHome} alt="Logo" />
                <img src={ImageBanner} alt="Bannière" />
            </div>

            <div className='work'>
                <h2>Discover our Bikinis</h2>
            </div>

            <div className='preview'>
                {Tanga?.[0] && <CategoriePreview data={Tanga[0]} id="tanga" />}
                {Culotte?.[0] && <CategoriePreview data={Culotte[0]} id="culotte" />}
                {Haut?.[0] && <CategoriePreview data={Haut[0]} id="haut" />}
                {TailleHaute?.[0] && <CategoriePreview data={TailleHaute[0]} id="taillehaute" />}
                {Swimsuits?.[0] && <CategoriePreview data={Swimsuits[0]} id="swimsuits" />}
                {Accessory?.[0] && <CategoriePreview data={Accessory[0]} id="accessory" />}
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