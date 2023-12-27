import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import homeView from '../../gallery/homeView.jpg';
import './Home.css';

export default function Home() {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className='homeMainPicContainer'>
                <div className='homeMainPicText'>
                    Hotel Michelangelo
                </div>
                <img className='homeMainPic' src={homeView} alt='homeMainPic'></img>
            </div>
        </>
    );
}