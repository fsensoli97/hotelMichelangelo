import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from "../../Footer/Footer";
import pic1 from '../../gallery/homeView.jpg';
import pic2 from '../../gallery/front_building.jpg';
import pic3 from '../../gallery/front_terrace.jpg';
import building from '../../gallery/building.jpg';
import room from '../../gallery/room.jpg';
import restaurant from '../../gallery/restaurant.jpg';
import terrace from '../../gallery/terrace.jpg';
import './Home.css';

export default function Home() {
    const images = [pic1, pic2, pic3];
    const [index, setIndex] = useState(0);
    const [autoScrolling, setAutoScrolling] = useState(true);

    useEffect(() => {
        const slideshow = setInterval(() => {
            if (autoScrolling) {
                if (index === images.length - 1) {
                    setIndex(0);
                }
                else {
                    setIndex(index + 1);
                }
            }
        }, 3000);

        return () => clearInterval(slideshow);
    });

    function handleMainPicClick() {
        setAutoScrolling(false);

        if (index === images.length - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className='homeMainPicContainer' onClick={handleMainPicClick}>
                <div className='homeMainPicText'>
                    Benvenuti
                </div>
                <img className='homeMainPic' src={images[index]} alt='homeMainPic'></img>
                <div className="galleryCirclesContainer">
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 0 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 1 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 2 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                </div>         
            </div>
            <div className="homeDescription">
                <div className="homeDescriptionTitle">Hotel Michelangelo</div>
                <div className="homeDescriptionStars">
                    <FontAwesomeIcon icon={faStar} className="homeDescriptionStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="homeDescriptionStar"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} className="homeDescriptionStar"></FontAwesomeIcon>
                </div>
                <div className="homeDescriptionText">
                    Hotel completamente ristrutturato, in posizione centrale di fronte alla spiaggia.<br></br><br></br>
                    Colazione a buffet, menù a scelta e buffet di verdure a pranzo e cena, acqua, soft drink, vino al ristorante compreso nel prezzo.<br></br><br></br>
                    Tutte le camere sono dotate di bagno con telefono diretto, TV, cassaforte a muro, asciugacapelli, frigorifero, aria condizionata e Wi-Fi. Cabine proprie sulla spiaggia.<br></br><br></br>
                    Lo staff dell’Hotel Michelangelo è a Vostra disposizione per rendere il vostro soggiorno a Rimini il più confortevole e soddisfacente possibile.<br></br><br></br>
                    L’Hotel Michelangelo vi attende per un soggiorno all’insegna del buon cibo e del confort di un ambiente moderno e allo stesso tempo familiare.<br></br><br></br>
                </div>
            </div>
            <div className="presentationPicsGrid">
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={building} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        La struttura
                    </div>
                    <div className="presentationPicText">
                        La reception si trova al piano terra, il ristorante, bar e terrazza al primo piano, e le sessanta camere ai piani superiori.
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={room} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        Le camere
                    </div>
                    <div className="presentationPicText">
                        Le camere, recentemente riarredate, sono fornite di aria condizionata, frigo, TV, telefono, phon e cassaforte.
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={restaurant} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        Il ristorante
                    </div>
                    <div className="presentationPicText">
                        Il nostro ristorante offre menù a scelta, verdure a buffet, bevande incluse nel prezzo.
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={terrace} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        La terrazza
                    </div>
                    <div className="presentationPicText">
                        Il bar e la terrazza con vista mare offrono un piacevole relax ad ogni ora del giorno.
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}