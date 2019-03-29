import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import cafe1 from './cafe1.png'
import cafe2 from './cafe2.png'

class Cafe extends Component {

    render() {
        return (
            <Aux>
                <p><Link exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Cafe Team</h1>
                <img className={classNames("imageKing")}
                    src={cafe1} alt="Cafe Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Our aim was to design a space in the museum for visitors to take a break and refuel and for students to come together and study. For this, we started by surveying students around the campus and visitors in the museum. We found that nearly all of the visitors we surveyed said they would use a café if the Peabody had one and that they would be most interested in purchasing small snacks or coffee. Additionally, many visitors mentioned that they enjoyed museum cafés that were unique and somehow related to the museum, such as those that displayed museum objects or had themed menus.</p>
                <p>After many iterations during the design process, we decided to build our booth by layering plywood to create a dynamic design using curves that compliment the ergonomics of the human body. We used a CNC router called Shopbot in the CEID, to cut 256 pieces from 3⁄4” plywood. We then assembled them layer by layer, through metal rods for structural stability.</p>
                <img className={classNames("imageKing")}
                    src={cafe2} alt="Cafe Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>For the top piece that goes onto the frame, we were inspired by the scenes we saw in the exhibitions. We wanted to recreate a space where people could walk into and feel like they are in the scene. So each booth in the cafe would celebrate and promote various themes around the museum. The one we chose to build was a scene inspired by the Southern New England dioramas. We photoshopped an image to create a dome-like effect and then printed this onto frosted mylar to create a translucent effect so that light can still come through while producing an individual space underneath.</p>
                <p>With the use of these varying canopies, we started curating the experience of the space. Working closely with the Design team, we developed a menu for the cafe. The menu was also inspired by themes from the Peabody. We made sure to include healthy options, as well as some quick bites, keeping in mind the feedback we got from our surveys.</p>
                <p>We also made sure to brand our products. We laser-engraved our logo onto our plates for serving during the presentation,presentation, printed out copies of our menus and engraved our logo onto our booth. We also cooked some of the food for our presentation to enhance the effect of being inside a cafe space.</p>
            </Aux>
        )
    }
}

export default Cafe;