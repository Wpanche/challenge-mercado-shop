import { React, Component } from 'react';
import SearchBarComponente from '../search_bar/SearchBarComponente'
import './HeaderComponent.scss'

class HeaderComponent extends Component {
    render() {
        return (
            <div className="content-header">
            
                <SearchBarComponente></SearchBarComponente>
            </div>
        );
    }
}

export default HeaderComponent;