import React, { Component } from 'react';

import HeaderComponent from '../header/HeaderComponent'
import CardProductComponente from '../card_product/CardProductComponente'
import BreadcrumbComponente from '../../components/breadcrumb/BreadcrumbComponente'
import { connect } from 'react-redux';

import './ResultSearchComponent.scss'



class ResultSearchComponent extends Component {


    render() {

        if (this.props?.articles?.length > 0) {

            return (
                <div>
                    <HeaderComponent>
                    </HeaderComponent>

                    <div className='content'>
                        <BreadcrumbComponente></BreadcrumbComponente>
                        <div className='content-card'>
                            {
                                this.props.articles.map((article, i) => {
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



const mapStateToProps = state => ({
    products: state.products,
    articles: state.products.articles,
    categories: state.products.categories,

});

export default connect(mapStateToProps, {})(ResultSearchComponent);