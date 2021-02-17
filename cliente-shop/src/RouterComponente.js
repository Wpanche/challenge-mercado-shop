import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProductComponent from './components/search_product/SearchProductComponent'
import ResultSearchComponent from './components/result_search/ResultSearchComponent'
import ProductDetailComponent from './components/product_detail/ProductDetailComponent'

class RouterComponente extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SearchProductComponent}></Route>
                    <Route exact path="/items" component={ResultSearchComponent}></Route>
                    <Route exact path="/items/:id" component={ProductDetailComponent}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterComponente;