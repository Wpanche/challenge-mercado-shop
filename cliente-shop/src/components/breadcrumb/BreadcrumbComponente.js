import { React, Component } from 'react';
import './BreadcrumbComponente.scss'
import next from '../../assets/images/next.svg'
import { connect } from 'react-redux';
class BreadcrumbComponente extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className='content-bread-cromb'>
                <ul>

                    {
                        

                        this.props.categories.map((category, i) => {
                            return (
                                <li key={i}>
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

const mapStateToProps = state => ({
    categories: state.products.categories,
});

export default connect(mapStateToProps, {})(BreadcrumbComponente);