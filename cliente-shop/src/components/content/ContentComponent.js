import { React, Component } from 'react';
import CardProductComponente from '../card_product/CardProductComponente'

class ContentComponent extends Component {
    render() {
        return (
            <div>
               content
               <CardProductComponente></CardProductComponente>
            </div>
        );
    }
}

export default ContentComponent;