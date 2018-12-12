import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';

import classNames from 'classnames';
import styles from './random.module.css';

import Data from '../Search/Data';
import { Link } from 'react-router-dom';

class random extends Component {


    hashCode = (str) => {
        return str.split('').reduce((prevHash, currVal) =>
            (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0);
    }


    constructor(props) {
        super(props)

        // generate a hash of the date
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let full = "" + yyyy + mm + dd
        let hash = this.hashCode(full)


        // index into an array of items
        let post = Data[Math.abs(hash % Data.length)]

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
            <h1>Object of the Day</h1>
            <Aux>
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: this.state.title}} className={styles.title}></h3>
                    <img src={this.state.image} alt="Collections" className={classNames("imageKing", styles.imageFull)} ></img>
                    <p dangerouslySetInnerHTML={{__html: this.state.description}} className={styles.description}></p>
                </div>
            </Aux>
        </Aux>
        )
    }

}

export default random;