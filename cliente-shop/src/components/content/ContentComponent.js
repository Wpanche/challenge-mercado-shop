import { React, Component } from 'react';
import CardProductComponente from '../card_product/CardProductComponente'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import './ContentComponent.scss'
class ContentComponent extends Component {
    render() {
        return (
            <div className='content'>
                <Breadcrumb></Breadcrumb>
                <div className='content-cards'>
                    <CardProductComponente></CardProductComponente>
                    <CardProductComponente></CardProductComponente>
                    <CardProductComponente></CardProductComponente>
                    <CardProductComponente></CardProductComponente>

                </div>
            </div>
        );
    }
}

export default ContentComponent;