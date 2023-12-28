import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import Logo from '../../gallery/logo.png';
import './Header.css';

export default function Header() {
    return (
        <>
            <div className='headerContacts'>
                {/*
                    <div className="logoContainer">
                    <img className='logo' src={Logo} alt='logo'></img>
                    </div>
                */}     
                <div className="headerTitle">
                    HM
                </div>
                <div className="headerItem">
                    <a href="tel:+39 3384975707">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </a>
                </div>
                <div className="headerItem">
                    <FontAwesomeIcon icon={faMailBulk} onClick={() => window.location = 'mailto:info@hotelmichelangelo.rn.it'}></FontAwesomeIcon>
                </div>
                <div className="headerItem">
                    <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/hotelmichelangelo/">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a> 
                </div>
                <div className="headerItem">
                    <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/hotelmichelangelo/">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a> 
                </div>
                <div className="headerItem" style={{fontWeight: 'bold'}}>
                    EN
                </div>
            </div>
        </>
    );
}