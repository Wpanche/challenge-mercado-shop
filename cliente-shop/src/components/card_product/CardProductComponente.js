import { React, Component } from 'react';
import './CardProductComponente.scss'
import delivery from '../../assets/images/delivery.svg'
class CardProductComponente extends Component {
    render() {
        return (
            <div className='card'>
                <div className='image-card'>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_805950-MCO40352919808_012020-V.webp" />
                </div>
                <div className='body-card'>
                    <div>$1.980
                        <span>
                            <img className='delivery-icon' src={delivery}></img>
                        </span>
                    </div>
                    <div class='description'>Celular iPhone SE 2020 64gb Chip A13</div>
                </div>
                <div className='location-card'>
                    <div>Bogotá</div>
                </div>
            </div>
        );
    }
}

export default CardProductComponente;