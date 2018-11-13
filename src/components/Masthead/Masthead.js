import React from 'react';
import Aux from '../../hoc/Aux';
import squid from './squid.jpg';
import styles from './Masthead.module.css'
import classNames from 'classnames';

const masthead = () => {
    return (
        <Aux>
            <div class="container">
                <div className={classNames("image")}>
                    <img src={squid} className={styles.mastheadImg} alt="squid"/>
                </div>
            </div>
           
        </Aux>
    )
}

export default masthead;