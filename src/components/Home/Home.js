import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../App";
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
    const { language } = useContext(LanguageContext);

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
                    {language === 'EN' ? <div>Benvenuti<br></br>Apertura Pasqua 2024</div> : <div>Benvenuti<br></br>Open at Easter 2024</div>}
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
                {language === 'EN' ?
                <div className="homeDescriptionText">
                    Hotel completamente ristrutturato, in posizione centrale di fronte alla spiaggia.<br></br><br></br>
                    Colazione a buffet, menù a scelta e buffet di verdure a pranzo e cena, acqua, soft drink, vino al ristorante compreso nel prezzo.<br></br><br></br>
                    Tutte le camere sono dotate di bagno con telefono diretto, TV, cassaforte a muro, asciugacapelli, frigorifero, aria condizionata e Wi-Fi. Cabine proprie sulla spiaggia.<br></br><br></br>
                    Lo staff dell’Hotel Michelangelo è a Vostra disposizione per rendere il vostro soggiorno a Rimini il più confortevole e soddisfacente possibile.<br></br><br></br>
                    L’Hotel Michelangelo vi attende per un soggiorno all’insegna del buon cibo e del confort di un ambiente moderno e allo stesso tempo familiare.<br></br><br></br>
                </div> :
                <div className="homeDescriptionText">
                    Completely renovated hotel, located in front of the sea.<br></br><br></br>
                    Buffet breakfast, menu choice with buffet salad for launch and dinner, water, soft drinks, and wine included.<br></br><br></br>
                    All the rooms are furnished with bathroom, telephone, television, safe, hair-dryer, fridge, air conditioning, and Wi-Fi.<br></br><br></br>
                    Hotel Michelangelo's staff is at your disposal to make your stay in Rimini as pleasant as possible.<br></br><br></br>
                    Hotel Michelangelo welcomes you on your next holiday, characterized by fine food and comfort, in a modern and familiar atmosphere.<br></br><br></br>
                </div>
                }
            </div>
            <div className="presentationPicsGrid">
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={building} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        {language === 'EN' ? 'La struttura' : 'The building'}
                    </div>
                    <div className="presentationPicText">
                        {language === 'EN' ?
                        'La reception si trova al piano terra, il ristorante, bar e terrazza al primo piano, e le sessanta camere ai piani superiori.' :
                        'The restaurant, bar, and terrace with sea view are located on the first floor, while the sixty rooms on the upper floors.'}
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={room} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        {language === 'EN' ? 'Le camere' : 'The rooms'}
                    </div>
                    <div className="presentationPicText">
                        {language === 'EN' ?
                        'Le camere, recentemente riarredate, sono fornite di aria condizionata, frigo, TV, telefono, phon e cassaforte.' :
                        'All the rooms are furnished with air conditioning, fridge, television, telephone, hair-dryer, and safe.'}
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={restaurant} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        {language === 'EN' ? 'Il ristorante' : 'The restaurant'}
                    </div>
                    <div className="presentationPicText">
                        {language === 'EN' ?
                        'Il nostro ristorante offre menù a scelta, verdure a buffet, bevande incluse nel prezzo.' :
                        'Our restaurant offers menu choice with fish and meat, buffet salad, beverages included.'}    
                    </div>
                </div>
                <div className="presentationPicsItem">
                    <div className="presentationPicContainer">
                        <img className='homeMainPic' src={terrace} alt='building'></img>
                    </div>
                    <div className="presentationPicTitle">
                        {language === 'EN' ? 'La terrazza' : 'The terrace'}
                    </div>
                    <div className="presentationPicText">
                        {language === 'EN' ?
                        'Il bar e la terrazza con vista mare offrono un piacevole relax ad ogni ora del giorno.' :
                        'The bar and terrace with sea view offer a relaxing place at any moment.'}    
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}