import { React, Component } from 'react';
import { Link } from 'react-router-dom'
import './CardProductComponente.scss'
import delivery from '../../assets/images/delivery.svg'
class CardProductComponente extends Component {


    render() {
        const { free_shipping, id, picture, title, price } = this.props.product;



        return (
            <div className='card'>
                <div className='image-card'>
                    <Link to={location => `/items/${id}`} >
                        <img src={picture} />
                    </Link>
                </div>
                <div className='body-card'>
                    <div>$ {price.amount}
                        <span>
                            {
                                free_shipping &&
                                <img className='delivery-icon' src={delivery}></img>
                            }
                        </span>
                    </div>
                    <div className='description'>{title}</div>
                </div>
                <div className='location-card'>
                    <div> {price.currency}</div>
                </div>
            </div>
        );
    }
}

export default CardProductComponente;