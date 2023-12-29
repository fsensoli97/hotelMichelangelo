import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navigation.css';

export default function Navigation() {
    const [currentUrl, setCurrentUrl] = useState(0);

    useEffect(() => {
        const url = window.location.href;
        if (url.endsWith('/')) {
            setCurrentUrl(0);
        }
        if (url.endsWith('/prices')) {
            setCurrentUrl(1);
        }
        if (url.endsWith('/location')) {
            setCurrentUrl(2);
        }
        if (url.endsWith('/contacts')) {
            setCurrentUrl(3);
        }
        if (url.endsWith('/gallery')) {
            setCurrentUrl(4);
        }
    }, []);

    return(
        <>
            <div className='navigation'>
                <div className='navigationItem' style={currentUrl === 0 ? {textDecoration: 'underline'} : {textDecoration: 'none'}}><Link className="navLink" to="/" >Home</Link></div>
                <div className='navigationItem' style={currentUrl === 1 ? {textDecoration: 'underline'} : {textDecoration: 'none'}}><Link className="navLink" to="/prices">Prezzi</Link></div>
                <div className='navigationItem' style={currentUrl === 2 ? {textDecoration: 'underline'} : {textDecoration: 'none'}}><Link className="navLink" to="/location">Location</Link></div>
                <div className='navigationItem' style={currentUrl === 3 ? {textDecoration: 'underline'} : {textDecoration: 'none'}}><Link className="navLink" to="/contacts">Contatti</Link></div>
                <div className='navigationItem' style={currentUrl === 4 ? {textDecoration: 'underline'} : {textDecoration: 'none'}}><Link className="navLink" to="/gallery">Gallery</Link></div>
            </div>
        </>
    );
}