import React from 'react';
import ImageAbout from '../../public/IMG_5873.webp';
import Accordion from '../components/Accordion';
import { NavLink } from 'react-router-dom';

const About = () => {

    return (
    <div>
        <div className='about'>
            <div className='about_title'>
                <h1>Meet M I V A</h1>
                <div className='about_container'>
                <Accordion title={'The Spirit of Miva'} content= {"A remplir"}/>
                <Accordion title={'Meet the Founders'} content={'A remplir'}/>
            </div>
            </div>
            <div className='banner'>
                <img src= {ImageAbout} alt="Image des créateurs de MIVA" />
                <div className='quote'>
                    <p className='earl'>"Where the warmth of the sun meets the fire of passion, beautiful things are made."</p>
                </div>
            </div>
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

export default About;