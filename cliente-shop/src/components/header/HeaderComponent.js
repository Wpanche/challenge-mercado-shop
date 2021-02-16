import { React, Component } from 'react';
import SearchBarComponente from '../search_bar/SearchBarComponente'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                Header<SearchBarComponente></SearchBarComponente>
            </div>
        );
    }
}

export default HeaderComponent;