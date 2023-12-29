import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import './Contacts.css';
import contactsPic from '../../gallery/parco_mare.jpg'

export default function Contacts() {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className="contactsContainer">
                <div className="contactsItem">
                    <div className="contactType">
                        <a href="tel:+39 3384975707"><FontAwesomeIcon icon={faPhone} size="2x"></FontAwesomeIcon></a>          
                    </div>
                    <div className="contactValue">
                        <a href="tel:+39 3384975707">(+39) 3384975707</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faMailBulk} size="2x" onClick={() => window.location = 'mailto:info@hotelmichelangelo.rn.it'}></FontAwesomeIcon>
                    </div>
                    <div className="contactValue" onClick={() => window.location = 'mailto:info@hotelmichelangelo.rn.it'}>
                        info@hotelmichelangelo.rn.it
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="contactType">
                        <a href="tel:+39 3394680381"><FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon></a>    
                    </div>
                    <div className="contactValue">
                        <a href="tel:+39 3394680381">(+39) 3394680381</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="contactType">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/hotelmichelangelo/">
                            <FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
                        </a> 
                    </div>
                    <div className="contactValue">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/hotelmichelangelo/">hotelmichelangelo/fb</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="contactType">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/hotelmichelangelo/">
                            <FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
                        </a> 
                    </div>
                    <div className="contactValue">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/hotelmichelangelo/">@hotelmichelangelo</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="contactType">
                        <FontAwesomeIcon icon={faMapLocation} size="2x"></FontAwesomeIcon>          
                    </div>
                    <div className="contactValue">
                        Viale Regina Margherita, 191, Rimini (RN)
                    </div>
                </div>
            </div>
            <div className="contactsPicContainer">
                <img className="contactsPic" src={contactsPic} alt="parco del mare"></img>
            </div>
            <Footer></Footer>  
        </>
    );
}