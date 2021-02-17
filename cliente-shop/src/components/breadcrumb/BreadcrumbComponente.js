import { React, Component } from 'react';
import './BreadcrumbComponente.scss'
import next from '../../assets/images/next.svg'
class BreadcrumbComponente extends Component {
    render() {
        return (
            <div className='content-bread-cromb'>
                <ul>

                    {

                        this.props.categories.map((category) => {
                            return (
                                <li>
                                    {category}
                                    <span><img src={next} /></span>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default BreadcrumbComponente;