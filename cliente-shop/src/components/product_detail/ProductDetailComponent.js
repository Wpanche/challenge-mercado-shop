import React, { Component } from 'react';
import HeaderComponent from '../header/HeaderComponent'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
class ProductDetailComponent extends Component {

    render() {
        return (
            <div>
                <HeaderComponent>
                </HeaderComponent>
                <div className='content'>
                    <Breadcrumb></Breadcrumb>

                </div>
            </div>

        )
    }
}

export default ProductDetailComponent;