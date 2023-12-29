import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a href="tel:+39 3384975707">(+39) 3384975707</a>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faMailBulk} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" onClick={() => window.location = 'mailto:info@hotelmichelangelo.rn.it'}>
                        info@hotelmichelangelo.rn.it
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a href="tel:+39 3394680381">(+39) 3394680381</a>
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/hotelmichelangelo/">hotelmichelangelo/fb</a> 
                    </div>
                </div>
                <div className="footerItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                    </div>
                    <div className="contactValue">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/hotelmichelangelo/">@hotelmichelangelo</a> 
                    </div>
                </div>
            </div>
        </>
    );
}