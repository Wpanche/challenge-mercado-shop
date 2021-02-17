import { React, Component } from 'react';
import './Breadcrumb.scss'
import next from '../../assets/images/next.svg'
class Breadcrumb extends Component {
    render() {
        return (
            <div className='content-bread-cromb'>
                <ul>
                    <li>
                        Electronica, Audio y video
                        <span><img src={next} /></span>
                    </li>
                    <li>
                        Ipod
                        <span><img src={next} /></span>
                    </li>
                    <li>
                        Reproductores
                        <span><img src={next} /></span>
                    </li>
                    <li>
                        Ipod touch
                        <span><img src={next} /></span>
                    </li>
                    <li>
                        32 GB
                        <span><img src={next} /></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Breadcrumb;