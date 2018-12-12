import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Data from './Data';
import styles from './Search.module.css'
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class searchfull extends Component {

    constructor(props) {
        super(props)

        let id = props.match.params.id
        let post  = NaN
        for(let i = 0; i < Data.length; i++) {
            if (Data[i].id === id) {
                post = Data[i];
            }
        }

        this.state = {
            title : post.title,
            subtitle : post.subtitle,
            image : post.image,
            short: post.short,
            description : post.long,
        }
    }
    
    render() {
        return (
            <Aux>
                <div>
                    <p className={styles.back}><Link onClick={this.props.handleBack2Grid} exact to="/collections/search">&lsaquo; Back to Collections</Link></p>
                    <h3 dangerouslySetInnerHTML={{__html: this.state.title}} className={styles.title}></h3>
                    <img src={this.state.image} alt="Collections" className={classNames("imageKing", styles.imageFull)} ></img>
                    <p dangerouslySetInnerHTML={{__html: this.state.description}} className={styles.description}></p>
                </div>
            </Aux>
        )
    }
}

export default searchfull;