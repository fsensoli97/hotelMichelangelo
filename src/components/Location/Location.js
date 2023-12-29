import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import './Location.css';

export default function Location() {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className="locationTitleContainer">
                <FontAwesomeIcon className="mapIcon" icon={faMapMarked} size="2x"></FontAwesomeIcon>
                <div className="locationTitleDescription">
                    Ci troviamo in Viale Regina Margherita 191, Rimini (RN).<br></br><br></br>
                    L'hotel è situato sul lungomare di Miramare, a metà strada tra Rimini e Riccione, proprio davanti alla spiaggia.
                </div>
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
                        Collegamenti stradali ed autostradali:
                    </div>
                    <div className="locationInfoDescription">
                        Da Nord, Rimini si raggiunge con l’autostrada A14 da Bologna, dove confluiscono l’autostrada A1 del Sole, la A21 Torino-Piacenza e la A22 del Brennero.<br></br>
                        Provenendo da Venezia la direttrice più veloce è la strada statale 309 “Romea”, sulla quale si innestano le strade provenienti da Padova e Ferrara.<br></br>
                        Da Sud, oltre alle autostrade A1 e A14, sono da segnalare la superstrada E45, che attraverso l’Appennino collega la vicina Cesena a Roma, e la strada statale 16 Adriatica.<br></br>
                    </div>
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        Collegamenti aerei:
                    </div>
                    <div className="locationInfoDescription">
                        Gli aeroporti di Rimini (Federico Fellini), Bologna (Guglielmo Marconi) e Forlì (Luigi Ridolfi) sono collegati con le più importanti città italiane ed europee con servizi di linea e voli charter.
                    </div>
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        Collegamenti ferroviari:
                    </div>
                    <div className="locationInfoDescription">
                        Rimini è facilmente raggiungibile anche in treno, trovandosi sulla linea ferroviaria Ancona-Bologna.
                    </div>
                </div>
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        Collegamenti marittimi:
                    </div>
                    <div className="locationInfoDescription">
                        Per chi giunge via mare, è possibile ormeggiare al Porto Canale o utilizzare i servizi della Nuova Darsena.
                    </div>
                </div>           
            </div>

            <div className="locationLinksContainer">
                <div className="locationInfoItem">
                    <div className="locationInfoTitle">
                        Link utili:
                    </div>
                    <div className="locationInfoDescription locationLinks"> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.autostrade.it/">
                            Autostrade per l'Italia 
                        </a>
                        <a target="_blank" rel='noopener noreferrer' href="https://riminiairport.com/">
                            Aeroporto di Rimini 
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.bologna-airport.it/">
                            Aeroporto di Bologna
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.forli-airport.com/">
                            Aeroporto di Forlì
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://www.trenitalia.com/">
                            Trenitalia
                        </a> 
                        <a target="_blank" rel='noopener noreferrer' href="https://marinadirimini.com/">
                            Marina di Rimini
                        </a>   
                    </div>
                </div> 
            </div>
            <Footer></Footer>
        </>
    );
}