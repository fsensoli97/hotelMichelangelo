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
    }, []);

    return(
        <>
            <div className='navigation'>
                <div className='navigationItem' style={currentUrl === 0 ? {backgroundColor: 'rgb(1, 1, 175, 0.8)'} : {backgroundColor: 'rgb(1, 1, 77)'}}><Link className="navLink" to="/" >Home</Link></div>
                <div className='navigationItem' style={currentUrl === 1 ? {backgroundColor: 'rgb(1, 1, 175, 0.8)'} : {backgroundColor: 'rgb(1, 1, 77)'}}><Link className="navLink" to="/prices">Prezzi</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/location">Location</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/contacts">Contatti</Link></div>
                <div className='navigationItem'><Link className="navLink" to="/gallery">Gallery</Link></div>
            </div>
        </>
    );
}