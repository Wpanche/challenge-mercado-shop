import './SearchBarComponente.scss'
import { React, Component } from 'react';
import loupe from '../../assets/images/loupe.svg'
import logo from '../../assets/images/logo.png'
class SearchBarComponente extends Component {
    render() {
        return (
            <div className="container-bar">
                <img src={logo} className="logo-shop" alt="logo" />
                <div className='search-bar'>
                    <input type='text' placeholder='Nunca dejes de buscar' className='input-search' />
                    <img src={loupe} className="loupe-search" alt="loupe" />
                </div>
            </div>
        );
    }
}

export default SearchBarComponente;