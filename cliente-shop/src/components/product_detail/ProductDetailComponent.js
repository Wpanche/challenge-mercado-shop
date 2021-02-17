import React, { Component } from 'react';
import axios from 'axios'
import HeaderComponent from '../header/HeaderComponent'
import DataSheetComponent from '../../components/data_sheet/DataSheetComponent'

class ProductDetailComponent extends Component {
    componentWillMount() {

        this.getItems()

    }

    getItems = () => {

        axios.get(`http://localhost:3000/api/items/${this.props.match.params.id}`).then((datos) => {

            this.setState({
                article: datos.data.item,
                status: 'success'
            })
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent>
                </HeaderComponent>
                <div className='content'>
                    {this.state?.article !== undefined &&

                        <DataSheetComponent article={this.state.article}></DataSheetComponent>

                    }

                </div>
            </div>

        )
    }
}

export default ProductDetailComponent;