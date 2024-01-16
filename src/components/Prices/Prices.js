import { useContext } from 'react';
import { LanguageContext } from '../../App';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import './Prices.css';

export default function Prices() {
    const { language } = useContext(LanguageContext);

    return(
        <>
            <Header></Header>
            <Navigation></Navigation>
            <div className='pricesTitle'>
                {language === 'EN' ? 'Listino prezzi 2024' : 'Price list 2024'}
            </div>
            <div className='pricesDescriptionContainer'>
                <div className='pricesDescriptionItem'>
                    <div className='pricesDescriptionTitle'>
                        {language === 'EN' ? 'Nel prezzo sono inclusi tutti i servizi:' : 'All the following services are included:'}
                    </div>
                    <div className='pricesDescriptionValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Aria condizionata, TV, cassaforte, mini-frigo, telefono diretto e phon in camera' : 'Air conditioning, television, safe, fridge, telephone, and hair-dryer in the room'}
                            </li>
                            <li>
                                {language === 'EN' ? 'Bevande al ristorante (acqua, vino e soft drink)' : 'Beverages (water, wine, and soft drinks) at the restaurant'}
                            </li>
                            <li>
                                Wi-Fi
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesDescriptionItem'>
                    <div className='pricesDescriptionTitle'>
                        {language === 'EN' ? 'Riduzioni:' : 'Reductions'}
                    </div>
                    <div className='pricesDescriptionValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? '3° letto: -15% per adulti, -30% per bambini da 3 a 12 anni' : '3° bed: adults -15%, children (3-12 years) -30%'}
                            </li>
                            <li>
                                {language === 'EN' ? '4° letto: -30% per adulti, -50% per bambini da 3 a 12 anni' : '4° bed: adults -30%, children (3-12 years) -50%'}
                            </li>
                            <li>
                                {language === 'EN' ? 'Piano famiglia: 2 adulti + 2 bambini = 3 paganti' : 'Family plan: 2 adults + 2 children = 3 payers'}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pricesContainer'>
                <div className='pricesItem'>
                    {language === 'EN' ?
                    <div className='pricePeriod'>
                        25 Maggio - 9 Giugno
                    </div> :
                    <div className='pricePeriod'>
                        25<sup>th</sup> May - 9<sup>th</sup> June
                    </div>}
                    <div className='priceValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Pensione completa:' : 'Full board:'} € 65,00
                            </li>
                            <li>
                                {language === 'EN' ? 'Mezza pensione:' : 'Half board:'} € 60,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    {language === 'EN' ?
                    <div className='pricePeriod'>
                        10 Giugno - 4 Agosto
                    </div> :
                    <div className='pricePeriod'>
                        10<sup>th</sup> June - 4<sup>th</sup> August
                    </div>}
                    <div className='priceValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Pensione completa:' : 'Full board:'} € 70,00
                            </li>
                            <li>
                                {language === 'EN' ? 'Mezza pensione:' : 'Half board:'} € 65,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    {language === 'EN' ?
                    <div className='pricePeriod'>
                        5 Agosto - 24 Agosto
                    </div> :
                    <div className='pricePeriod'>
                        5<sup>th</sup> August - 24<sup>th</sup> August
                    </div>}
                    <div className='priceValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Pensione completa:' : 'Full board:'} € 84,00
                            </li>
                            <li>
                                {language === 'EN' ? 'Mezza pensione:' : 'Half board:'} € 79,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    {language === 'EN' ?
                    <div className='pricePeriod'>
                        25 Agosto - 1 Settembre
                    </div> :
                    <div className='pricePeriod'>
                        25<sup>th</sup> August - 1<sup>st</sup> September
                    </div>}
                    <div className='priceValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Pensione completa:' : 'Full board:'} € 70,00
                            </li>
                            <li>
                                {language === 'EN' ? 'Mezza pensione:' : 'Half board:'} € 65,00
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pricesItem'>
                    {language === 'EN' ?
                    <div className='pricePeriod'>
                        2 Settembre - 15 Settembre
                    </div> :
                    <div className='pricePeriod'>
                        2<sup>nd</sup> September - 15<sup>th</sup> September
                    </div>}
                    <div className='priceValue'>
                        <ul>
                            <li>
                                {language === 'EN' ? 'Pensione completa:' : 'Full board:'} € 60,00
                            </li>
                            <li>
                                {language === 'EN' ? 'Mezza pensione:' : 'Half board:'} € 55,00
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}