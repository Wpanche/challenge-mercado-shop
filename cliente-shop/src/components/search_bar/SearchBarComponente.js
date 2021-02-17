import './SearchBarComponente.scss'
import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom'

import loupe from '../../assets/images/loupe.svg'
import logo from '../../assets/images/logo.png'
class SearchBarComponente extends Component {
    searchRef = React.createRef();

    searchText = "";
    setSearchText = () => {
        this.searchText = `${this.searchRef.current.value}`
    };

    render() {
        return (
            <div className="container-bar">
                <img src={logo} className="logo-shop" alt="logo" />
                <div className='search-bar'>
                    <input type='text' placeholder='Nunca dejes de buscar' ref={this.searchRef} className='input-search' onInput={this.setSearchText}  />
                    <Link to={location => `/items?q=${this.searchText}`} >

                        <img src={loupe} className="loupe-search" alt="loupe" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default SearchBarComponente;