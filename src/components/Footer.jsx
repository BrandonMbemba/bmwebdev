import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import Logo from '../../public/MIVA_V4-[Reěcupeěreě]_Plan-de-travail-1-copie-8.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <img className='logo' src={Logo} alt="Logo MIVA Footer" />
                <div className="footer-links">
                    <a href='https://www.instagram.com/miva.swim/' target='_blank' rel='noopener noreferrer' aria-label="Instagram"><FaInstagram /></a>
                    <a href='https://www.tiktok.com/@mivaswim' target='_blank' rel='noopener noreferrer' aria-label="TikTok"><FaTiktok /></a>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label="Facebook"><FaFacebook /></a>
                </div>
                <p>© 2025 MIVA. Tous droits réservés</p>
            </div>
        </div>
    );
};


export default Footer;

