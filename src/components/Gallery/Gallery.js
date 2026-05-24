import { useState, useContext } from "react";
import { LanguageContext } from "../../App";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";
import './Gallery.css';
import pic1 from '../../gallery/front_terrace.jpg';
import pic2 from '../../gallery/room.jpg';
import pic3 from '../../gallery/terrace.jpg';

import pic4 from '../../gallery/bar1_2026.jpg';
import pic5 from '../../gallery/ristorante1_2026.jpg';
import pic6 from '../../gallery/bureau1_2026.jpg';
import pic7 from '../../gallery/terrazzo1_2026.jpg';
import pic8 from '../../gallery/panorama_2026.jpg';
import pic9 from '../../gallery/bar2_2026.jpg';
import pic10 from '../../gallery/ristorante2_2026.jpg';
import pic11 from '../../gallery/bureau2_2026.jpg';
import pic12 from '../../gallery/terrazzo2_2026.jpg';

import pic13 from '../../gallery/spumante.jpg';
import pic14 from '../../gallery/primo_pesce.jpg';
import pic15 from '../../gallery/terrace_2.jpg';
import pic16 from '../../gallery/building.jpg';
import pic17 from '../../gallery/cake.jpg';
import pic18 from '../../gallery/concerto.jpg';
import pic19 from '../../gallery/chef.jpeg';
import pic20 from '../../gallery/lasagna.jpeg';
import pic21 from '../../gallery/antipasto.jpeg';
import pic22 from '../../gallery/risotto.jpeg';
import pic23 from '../../gallery/restaurant1.jpg';
import pic24 from '../../gallery/bar1.jpg';
import pic25 from '../../gallery/terrace3.jpg';
import pic26 from '../../gallery/restaurant2.jpg';
import pic27 from '../../gallery/bar2.jpg';
import pic28 from '../../gallery/terrace4.jpg';
import pic29 from '../../gallery/restaurant3.jpg';
import pic30 from '../../gallery/bar3.jpg';

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const { language } = useContext(LanguageContext);

    const pics = [
        pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22,
        pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30
    ];

    function handleClickImage(image) {
        setCurrentImage(image);
        setShowPopup(true);
    }

    const galleryPics = pics.map((el) => {
        return (
        <div className="galleryPicContainer" onClick={() => handleClickImage(el)}>
            <img className="galleryPic" src={el} alt="pic"></img>
        </div>
        );
    });

    function previousImage() {
        for (let i = 0; i < pics.length; i++) {
            if (currentImage === pics[i]) {
                if (i === 0) {
                    return setCurrentImage(pics[pics.length-1]);
                }
                else {
                    return setCurrentImage(pics[i-1]);
                }     
            }
        }
    }

    function nextIimage() {
        for (let i = 0; i < pics.length; i++) {
            if (currentImage === pics[i]) {
                if (i === pics.length - 1) {
                    return setCurrentImage(pics[0]);
                }
                else {
                    return setCurrentImage(pics[i+1]);
                }     
            }
        }
    }

    return (
        <>
            <div style={showPopup ? {display: 'none'} : {display: 'block'}}>
                <Header></Header>
                <Navigation></Navigation>
                <div className="galleryTitle">
                    {language === 'EN' ? "Scopri l'Hotel Michelangelo attraverso le nostre immagini." : "Discover Hotel Michelangelo through our pics."}
                </div>
                <div className="galleryPicsContainer">
                    {galleryPics}
                </div>
                <Footer></Footer>
            </div>
            
            {showPopup ? 
            <ImagePopup image={currentImage} showPopup={setShowPopup} previous={previousImage} next={nextIimage}></ImagePopup>
            :
            <></>
            }
            
        </>
    );
}