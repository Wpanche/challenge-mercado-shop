import React, { Component } from 'react';
import parse from 'html-react-parser';
import './DataSheetComponent.scss'
class DataSheetComponent extends Component {

    render() {
        const { description, title, id, picture, price } = this.props.article;
        return (
            <div>

                <div className='content-detail'>
                    <div className="content-description">
                        <div className="content-img-detail"> <img src={picture} /></div>
                        <div className="title-description">Descripción del producto</div>
                        <div className="content-description">{parse(description.replace(/\r?\n/g, "<br>"))}</div>

                    </div>
                    <div className="content-pay">

                        <div className="title-description">{title}</div>
                        <div className="amount-article">{price.amount}
                            <div className="decimal-article">00</div>
                        </div>
                        <div>
                            <button> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default DataSheetComponent;