import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Temporary.module.css';

// routing
import { Link } from 'react-router-dom';

const temporary = (props) => {
    return (
        <Aux>
            <h1>Temporary Exhibits</h1>
            <p></p>
            <img className="imageKing" src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
                <h3>Student Gallery</h3>
                <p><i>Dinosaurs Take Flight</i> presents not only the history and science behind Archaeopteryx but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.</p>

            <img className="imageKing" src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
                <h3>Egypt</h3>
        </Aux>
    )
}

export default temporary;