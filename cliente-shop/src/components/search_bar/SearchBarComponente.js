import './SearchBarComponente.scss'
import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import loupe from '../../assets/images/loupe.svg'
import logo from '../../assets/images/logo.png'
import { connect } from 'react-redux';






const SearchBarComponente = ({ setItems }) => {
    const searchRef = React.createRef();

    let searchText = "";

    const setSearchText = () => {
        console.log()
        searchText = searchRef.current.value

    };

    const history = useHistory();

    const getItems = () => {
        if (searchText === "")
            return

        axios.get(`http://localhost:3000/api/items?q=${searchText}`).then((datos) => {

            setItems({
                categories: datos.data.categories,
                articles: datos.data.items,
                status: 'success'
            })
        })
    }

    const navigateToListItems = () => {
        getItems();
        history.push(`/items?q=${searchText ? searchText : ""}`)
    }
    const navigateToListItemsKeyPres = (e) => {
        if (e.key == 'Enter')
            navigateToListItems()
    }

    return (
        <div className="container-bar">
            <img src={logo} className="logo-shop" alt="logo" />
            <div className='search-bar'>
                <input type='text' placeholder='Nunca dejes de buscar' ref={searchRef} className='input-search' onInput={setSearchText} onKeyPress={navigateToListItemsKeyPres.bind(this)} />
                
                <img src={loupe} className="loupe-search" alt="loupe" onClick={navigateToListItems} />

            </div>
        </div>
    );

};

const mapStateToProps = state => ({
    products: state.products,
    articles: state.products.articles,
    categories: state.products.categories

});
const mapDispatchToProps = dispatch => ({

    setItems(datos) {

        dispatch({
            type: "GET_ITEMS_SEARCH",
            items: datos
        })
    },



})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponente);