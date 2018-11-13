import React from 'react';
import styles from './UpdateCard.module.css';
import classNames from 'classnames';
import dude from './dude.jpg';


const updatecard = (props) => {
    return (
        <div className={classNames("card", styles.base)}>
            <div className="card-content">
                <p className="title">New Ideas</p>
                <div className={classNames(styles.sub)}>
                    <span className="is-size-6">Artists and innovators on what shapes their world</span>
                    <a href="#" className="button is-light">Hear more</a>
                </div>
            </div>
            <div className="card-image">
                <img className={classNames("image")} src={dude} alt="dude"></img>
            </div>
            <div className="card-content">
                <p className="is-size-6">Raphael Lozano - Hemmer shares his inspiration and practice</p>
            </div>
        </div>
    )
}

export default updatecard;