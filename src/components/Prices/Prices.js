import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import './Prices.css';

export default function Prices() {
    return(
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className='pricesTitle'>
                Listino prezzi 2024
            </div>
            <div className='pricesDescriptionContainer'>
                <div className='pricesDescriptionItem'>
                    <div className='pricesDescriptionTitle'>
                        Nel prezzo sono inclusi tutti i servizi:
                    </div>
                    <div className='pricesDescriptionValue'>
                        <ul>
                            <li>
                                Aria condizionata, TV, cassaforte, mini-frigo, telefono diretto e phon in camera
                            </li>
                            <li>
                                Bevande al ristorante (acqua, vino e soft drink)
                            </li>
                            <li>
                                Wi-Fi
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesDescriptionItem'>
                    <div className='pricesDescriptionTitle'>
                        Riduzioni:
                    </div>
                    <div className='pricesDescriptionValue'>
                        <ul>
                            <li>
                                3° letto: -15% per adulti, -30% per bambini da 3 a 12 anni
                            </li>
                            <li>
                                4° letto: -30% per adulti, -50% per bambini da 3 a 12 anni
                            </li>
                            <li>
                                Piano famiglia: 2 adulti + 2 bambini = 3 paganti
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pricesContainer'>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        Settimana di Pasqua
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 45,00
                            </li>
                            <li>
                                Mezza pensione: € 65,00
                            </li>
                            <li>
                                Pensione completa: € 70,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        27 Maggio - 10 Giugno
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 35,00
                            </li>
                            <li>
                                Mezza pensione: € 58,00
                            </li>
                            <li>
                                Pensione completa: € 63,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        11 Giugno - 5 Agosto
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 40,00
                            </li>
                            <li>
                                Mezza pensione: € 63,00
                            </li>
                            <li>
                                Pensione completa: € 68,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        6 Agosto - 20 Agosto
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 50,00
                            </li>
                            <li>
                                Mezza pensione: € 78,00
                            </li>
                            <li>
                                Pensione completa: € 82,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        21 Agosto - 2 Settembre
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 40,00
                            </li>
                            <li>
                                Mezza pensione: € 63,00
                            </li>
                            <li>
                                Pensione completa: € 68,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    <div className='pricePeriod'>
                        3 Settembre - 19 Settembre
                    </div>
                    <div className='priceValue'>
                        <ul>
                            <li>
                                B&B: € 35,00
                            </li>
                            <li>
                                Mezza pensione: € 53,00
                            </li>
                            <li>
                                Pensione completa: € 58,00
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}