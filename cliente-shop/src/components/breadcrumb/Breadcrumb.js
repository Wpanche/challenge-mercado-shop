import { React, Component } from 'react';
import './Breadcrumb.scss'
import next from '../../assets/images/next.svg'
class Breadcrumb extends Component {
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

export default Breadcrumb;