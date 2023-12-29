import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import './ImagePopup.css';

export default function ImagePopup({image, showPopup, previous, next}) {
    return(
        <>
            <div className="popupContainer">
                <div className="popupPicContainer">
                    <img className="popupPic" src={image} alt="pic"></img>
                </div>
                <div className="closeButton" onClick={() => showPopup(false)}>
                    <FontAwesomeIcon icon={faClose} size="2x"></FontAwesomeIcon>
                </div>
                <div className="prevButton" onClick={previous}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x"></FontAwesomeIcon>
                </div>
                <div className="nextButton" onClick={next}>
                    <FontAwesomeIcon icon={faArrowCircleRight} size="2x"></FontAwesomeIcon>
                </div>
            </div>
        </>
    );
}