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
import pic4 from '../../gallery/spumante.jpg';
import pic5 from '../../gallery/primo_pesce.jpg';
import pic6 from '../../gallery/terrace_2.jpg';
import pic7 from '../../gallery/building.jpg';
import pic8 from '../../gallery/cake.jpg';
import pic9 from '../../gallery/concerto.jpg';
import pic10 from '../../gallery/chef.jpeg';
import pic11 from '../../gallery/lasagna.jpeg';
import pic12 from '../../gallery/antipasto.jpeg';
import pic13 from '../../gallery/risotto.jpeg';
import pic14 from '../../gallery/restaurant1.jpg';
import pic15 from '../../gallery/bar1.jpg';
import pic16 from '../../gallery/terrace3.jpg';
import pic17 from '../../gallery/restaurant2.jpg';
import pic18 from '../../gallery/bar2.jpg';
import pic19 from '../../gallery/terrace4.jpg';
import pic20 from '../../gallery/restaurant3.jpg';
import pic21 from '../../gallery/bar3.jpg';

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const { language } = useContext(LanguageContext);

    const pics = [
        pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21
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