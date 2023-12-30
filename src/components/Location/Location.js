import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked, faCar, faPlane, faTrain, faShip } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { LanguageContext } from "../../App";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import './Location.css';

export default function Location() {
    const { language } = useContext(LanguageContext);
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className="locationTitleContainer">
                <FontAwesomeIcon className="mapIcon" icon={faMapMarked} size="2x"></FontAwesomeIcon>
                {language === 'EN' ?
                <div className="locationTitleDescription">
                    Ci troviamo in Viale Regina Margherita 191, Rimini (RN).<br></br><br></br>
                    L'hotel è situato sul lungomare di Miramare, a metà strada tra Rimini e Riccione, proprio davanti alla spiaggia.
                </div> :
                <div className="locationTitleDescription">
                    We are located at Street Regina Margherita 191, Rimini (RN).<br></br><br></br>
                    Just a few steps from the beach, the hotel is exactly halfway between Rimini and Riccione, the two main tourist towns of Romagna.
                </div>
                }   
            </div>
            <div className="mapsContainer">
                <iframe 
                    className="mapsLocation"
                    title="mapsLocation" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.38186417048!2d12.615202875295608!3d44.034166671086545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cc2d468a9b743%3A0x57a1814d2a116c26!2sHotel%20Michelangelo!5e0!3m2!1sit!2sit!4v1703779372536!5m2!1sit!2sit"
                    width="600"
                    height="400"
                    allowfullscreen=""
                    loading="eager" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="locationInfoContainer">
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        {language === 'EN' ? 'Collegamenti stradali ed autostradali:' : 'Road connections:'}
                    </div>
                    {language === 'EN' ?
                    <div className="locationInfoDescription">
                        Da Nord, Rimini si raggiunge con l’autostrada A14 da Bologna, dove confluiscono l’autostrada A1 del Sole, la A21 Torino-Piacenza e la A22 del Brennero.<br></br>
                        Provenendo da Venezia la direttrice più veloce è la strada statale 309 “Romea”, sulla quale si innestano le strade provenienti da Padova e Ferrara.<br></br>
                        Da Sud, oltre alle autostrade A1 e A14, sono da segnalare la superstrada E45, che attraverso l’Appennino collega la vicina Cesena a Roma, e la strada statale 16 Adriatica.
                    </div> :
                    <div className="locationInfoDescription">
                        From North, Rimini can be reached via the A14 highway from Bologna, where highways A1 (Autostrada del Sole), A21 (Torino-Piacenza), and A22 (Brennero) merge.<br></br>
                        From Venice, the state road 309 “Romea” is the fastest, where roads from Padova and Ferrara meet.<br></br>
                        From South, beyond the hihgways A1 e A14, the freeway E45 (connecting Rome and the close Cesena), and the state road 16 (Adriatica) could be beneficial.
                    </div>
                    }
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        {language === 'EN' ? 'Collegamenti aerei:' : 'Air connections:'}
                    </div>
                    {language === 'EN' ?
                    <div className="locationInfoDescription">
                        Gli aeroporti di Rimini (Federico Fellini), Bologna (Guglielmo Marconi) e Forlì (Luigi Ridolfi) sono collegati con le più importanti città italiane ed europee con servizi di linea e voli charter.
                    </div> :
                    <div className="locationInfoDescription">
                        Rimini (Federico Fellini), Bologna (Guglielmo Marconi), and Forlì (Luigi Ridolfi) airports are connected with the main Italian and European cities via line serviices and charter flights.
                    </div>
                    }
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        {language === 'EN' ? 'Collegamenti ferroviari:' : 'Train connections:'}
                    </div>
                    {language === 'EN' ?
                    <div className="locationInfoDescription">
                        Rimini è facilmente raggiungibile anche in treno, trovandosi sulla linea ferroviaria Ancona-Bologna.
                    </div> :
                    <div className="locationInfoDescription">
                        Rimini is also easily reachable by train, being on the Ancona-Bologna railway line.
                    </div>
                    }
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        {language === 'EN' ? 'Collegamenti marittimi:' : 'Marine connections:'}
                    </div>
                    {language === 'EN' ?
                    <div className="locationInfoDescription">
                        Per chi giunge via mare, è possibile ormeggiare al Porto Canale o utilizzare i servizi della Nuova Darsena.
                    </div> :
                    <div className="locationInfoDescription">
                        Coming by sea, it is possible to moor at the Porto Canale or use the Nuova Darsena services.
                    </div>
                    }
                </div>           
            </div>

            <div className="locationLinksContainer">
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        {language === 'EN' ? 'Link utili:' : 'Useful links'}
                    </div>
                    <div className="locationInfoDescription locationLinks"> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.autostrade.it/">
                            <u>{language === 'EN' ? "Autostrade per l'Italia" : "Italy's highways"}</u> <FontAwesomeIcon className="mapIcon" icon={faCar}></FontAwesomeIcon>
                        </a>
                        <a target="_blank" rel='noopener noreferrer' href="https://riminiairport.com/">
                            <u>{language === 'EN' ? 'Aeroporto di Rimini' : 'Rimini airport'}</u> <FontAwesomeIcon className="mapIcon" icon={faPlane}></FontAwesomeIcon>
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.bologna-airport.it/">
                            <u>{language === 'EN' ? 'Aeroporto di Bologna' : 'Bologna airport'}</u> <FontAwesomeIcon className="mapIcon" icon={faPlane}></FontAwesomeIcon>
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.forli-airport.com/">
                            <u>{language === 'EN' ? 'Aeroporto di Fotlì' : 'Forlì airport'}</u> <FontAwesomeIcon className="mapIcon" icon={faPlane}></FontAwesomeIcon>
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.trenitalia.com/">
                            <u>Trenitalia</u> <FontAwesomeIcon className="mapIcon" icon={faTrain}></FontAwesomeIcon>
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://marinadirimini.com/">
                            <u>{language === 'EN' ? 'Marina di Rimini' : "Rimini's marine"}</u> <FontAwesomeIcon className="mapIcon" icon={faShip}></FontAwesomeIcon>
                        </a>   
                    </div>
                </div> 
            </div>
            <Footer></Footer>
        </>
    );
}