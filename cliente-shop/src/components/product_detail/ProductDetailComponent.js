import React, { Component } from 'react';
import axios from 'axios'
import HeaderComponent from '../header/HeaderComponent'
import DataSheetComponent from '../../components/data_sheet/DataSheetComponent'
import BreadcrumbComponente from '../../components/breadcrumb/BreadcrumbComponente'

class ProductDetailComponent extends Component {
    componentWillMount() {

        this.getItems()

    }

    getItems = () => {

        axios.get(`${process.env.REACT_APP_EXTERNAL_SERVICES}/api/items/${this.props.match.params.id}`).then((datos) => {

            this.setState({
                article: datos.data.item,
                status: 'success'
            })

        })
    }

    render() {
        return (
            <div>
                <HeaderComponent>
                </HeaderComponent>
                <div className='content'>
                    <BreadcrumbComponente></BreadcrumbComponente>
                    {this.state?.article !== undefined &&

                        <DataSheetComponent article={this.state.article}></DataSheetComponent>

                    }

                </div>
            </div>

        )
    }
}

export default ProductDetailComponent;