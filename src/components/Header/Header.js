import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

export default function Header() {
    return (
        <>
            <div className='headerContacts'>
                    <div className="headerItem">
                        <a href="tel:+39 3314532937">
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
            </div>
        </>
    );
}