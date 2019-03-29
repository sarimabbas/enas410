import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import mural1 from './mural1.gif'

class Mural extends Component {

    render() {
        return (
            <Aux>
                <p><Link exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Magic Mural</h1>
                <img className={classNames("imageKing")}
                    src={mural1} alt="Magic Mural"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Inspired by Rudolph Zallinger’s mural “The Age of Reptiles”, the magic mural is a digital installation that allows visitors to the Peabody museum to paint their own dinosaurs on an iPad app and transport their creations into a 3D virtual world projected on a screen. Inside the virtual world, the painted dinosaurs can roam around and play with each other. The system, powered by Unity’s AI engine, allows the museum to change the setting in the virtual world, modify the types of brushes used in the painting app, and even tune different dinosaurs’ tempers and physical characteristics. We envision that this installation can help make the museum’s exhibit more engaging, interactive,  and memorable.  We’d like to think that with our  Magic Mural 2.0, every visitor to the Peabody museum will get to be a creator.</p>
                <iframe style={{minHeight: "350px" , width : "100%"}}  src="https://www.youtube.com/embed/qBnRatOBpd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Aux>
        )
    }
}

export default Mural;