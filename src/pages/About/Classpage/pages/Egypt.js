import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import egypt1 from './egypt1.png'
import egypt2 from './egypt2.png'

class Egypt extends Component {


    render() {
        return (
            <Aux>
                <p><Link onClick={this.props.handleBack2Overview} exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Egypt Team</h1>
                <img className={classNames("imageKing")}
                    src={egypt1} alt="Egypt Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Our  goal was to create an immersive and interactive space for visitors to be able to experience the wonders of the Peabody Museum in a new, more engaging way. In our initial phases of research, we were fascinated by the stories that staff of the Peabody told to our group, which were not necessarily captured in the various displays. Many of these stories centered around how the artifacts within the museum had been discovered - O.C. Marsh’s bone wars being a prime example. We decided to build upon that thrill of discovery to create our final product, the Egypt Room, affectionately referred to as Project Blend.</p>
                <p>We decided to build a rear-projection wall that would allow visitors to the museum to experience that feeling of discovery themselves, thereby getting more involved and hands-on with their learning in the museum. In addition to the projection wall, we wanted to construct a way to include real artifacts from the museum collections, so we decided to built small display cases on each side of the screen. We wanted to use a flashlight, a classic tool of discovery, as the guiding object that visitors would use within our new exhibit space. The Egyptian theme was chosen as we believed that the artifacts, especially the real mummy, that the Peabody had on display in their existing Egyptian Hall were absolutely fascinating and could benefit greatly from a more immersive experience.</p>
                <p>To build the rear-projection wall, we first had to create code in Processing, which would allow us to have a “reveal” effect as the visitors panned over the wall with their flashlight. This was done by using a blend command. A background image of our desired content was established, with a black foreground masking it. The foreground was drawn from the input of an infrared (IR) camera of a Kinect for Xbox, such that in the absence of a significant quantity of IR light, none of the background image would be visible. After light from an IR flashlight was seen by the Kinect, we revealed a certain radius of the background image. This radius would depend on proximity and angle to the screen and the Kinect sitting behind it. Once all the mapping and display processing had been done through the Kinect and our code, we actually displayed the desired image using a short throw projector, located behind the screen as well. The advantage of the short throw projector was that its aspect ratio would enable us to minimize the necessary space behind our wall.</p>
                <img className={classNames("imageKing")}
                    src={egypt2} alt="Egypt Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Within the code, we also built text boxes to be revealed at certain locations within our background image to display more information about the historical image that we had chosen. This was done by creating “trigger boxes” at specific coordinates so that when the IR flashlight was detected in those trigger boxes, the text would be prompted to be displayed.</p>
                <p>To build the display cases, we also started off with code and electronics as we wanted to make these display cases interactive with the IR light from the visitor’s flashlight as well. We used small IR detectors placed in the corners of each display box to pick up the IR light and then activate (through an Arduino) the LED strip that we had placed into the top of each display box. Each box was fully independent, meaning that the detectors for one box only activated the lights for that same box, allowing visitors to explore and see what they could find instead of revealing it all at once.</p>
            </Aux>
        )
    }
}

export default Egypt;