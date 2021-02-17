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
                    <Route exact path="/" render={(props) => <SearchProductComponent {...props} title="Home" />} ></Route>
                    <Route exact path="/items" render={(props) => <ResultSearchComponent {...props} title="Result search" />}></Route>
                    <Route exact path="/items/:id"  render={(props) => <ProductDetailComponent {...props} title="Product detail" />} ></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouterComponente;