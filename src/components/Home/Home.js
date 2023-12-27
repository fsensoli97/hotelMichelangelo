import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import pic1 from '../../gallery/homeView.jpg';
import pic2 from '../../gallery/front_building.jpg';
import pic3 from '../../gallery/front_terrace.jpg';
import pic4 from '../../gallery/room.jpg';
import './Home.css';

export default function Home() {
    const images = [pic1, pic2, pic3, pic4];
    const [index, setIndex] = useState(0);
    const [autoScrolling, setAutoScrolling] = useState(true);

    useEffect(() => {
        if (autoScrolling) {
            setTimeout(() => {
                    if (index === images.length - 1) {
                        setIndex(0);
                    }
                    else {
                        setIndex(index + 1);
                    }
            }, 3000);
        }
    }, [images.length, index, autoScrolling]);

    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className='homeMainPicContainer' onClick={() => setAutoScrolling(autoScrolling => !autoScrolling)}>
                <div className='homeMainPicText'>
                    Hotel Michelangelo
                </div>
                <img className='homeMainPic' src={images[index]} alt='homeMainPic'></img>
                <div className="galleryCirclesContainer">
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 0 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 1 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 2 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                    <FontAwesomeIcon className="galleryCircle" icon={faCircle} style={index === 3 ? {color: 'rgb(255, 255, 255, 1)'} : {color: 'rgb(255, 255, 255, 0.6)'}}></FontAwesomeIcon>
                </div>         
            </div>
        </>
    );
}