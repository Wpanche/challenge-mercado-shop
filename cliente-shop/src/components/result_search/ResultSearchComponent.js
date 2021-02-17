import React, { Component } from 'react';
import axios from 'axios'
import HeaderComponent from '../header/HeaderComponent'
import CardProductComponente from '../card_product/CardProductComponente'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

import './ResultSearchComponent.scss'


class ResultSearchComponent extends Component {


    componentWillMount() {

        this.setState({
            articles: {
                categories: []
            }
        })
    }
    componentWillReceiveProps() {

        this.getItems()

    }

    getItems = () => {
        var querystring = window.location.search
        var params = new URLSearchParams(querystring)
        axios.get(`http://localhost:3000/api/items?q=${params.get("q") }`).then((datos) => {

            this.setState({
                categories: datos.data.categories,
                articles: datos.data.items,
                status: 'success'
            })
            console.log(datos.data)
        })
    }


    render() {

        if (this.state?.articles?.length > 0) {

            return (
                <div>
                    <HeaderComponent>
                    </HeaderComponent>

                    <div className='content'>
                        <Breadcrumb categories={this.state.categories}></Breadcrumb>
                        <div className='content-card'>
                            {
                                this.state.articles.map((article, i) => {
                                    return (

                                        <CardProductComponente key={i} product={article}></CardProductComponente>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            )
        } else {
            return (

                <div>
                    <HeaderComponent>
                    </HeaderComponent>
                </div>

            )
        }
    }
}

export default ResultSearchComponent;