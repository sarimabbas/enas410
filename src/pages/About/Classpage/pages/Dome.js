import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import dome1 from './dome1.png'

class Dome extends Component {

    render() {
        return (
            <Aux>
                <p><Link exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Dome Team</h1>
                <iframe style={{minHeight: "350px" , width : "100%"}}  src="https://www.youtube.com/embed/tXaJ_J4Z-XU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Our project was inspired by a behind-the-scenes look at The Peabody’s world-renowned dioramas. The unbelievable attention to detail and care that goes into them is inspiring. Part of the beauty of this experience stems from its physicality. Unlike a two-dimensional image, the collection of objects in the diorama gives rise to real shadows and depth. These merge seamlessly with the beautifully painted landscapes on the curved back wall of the diorama. The horizons in these paintings seem to stretch on forever. The line between the painted background and foreground objects disappears, immersing the viewer in the scene. We found the complex mathematics that underlie the dioramas’ background landscapes to be particularly compelling. As early as 1940, James Perry Wilson developed a system of grids that allowed him to paint on curved surfaces in a way that created an otherwise impossible sense of depth. We were fascinated by the ability to completely immerse and transport viewers to another place. In this project, we explored how technology might create an equally magical experience.</p>
                <img className={classNames("imageKing")}
                    src={dome1} alt="Dome Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Our project — a prototype platform for immersive video installation on a half sphere — builds on the work of domed projection expert Paul Bourke. Bourke developed software (VLCwarp) that adjusts an image so that it appears correctly when projected on a concave surface. The set-up requires an ordinary projector, spherical mirror and dome. Using the parameters of the mirror, dome, and projector the software creates a warped video. The projector is placed behind the dome and shines through a hole at its base, hitting the mirror and projecting up onto the domed surface. We replaced the smooth spherical projection surface used in Bourke’s set-up with a planar polysurface composed of 108 cardboard panels. We used Rhino 3D modeling software in order to generate the plans for this prototype. The panels are attached to each other using plastic nuts and bolts (1,278 total). Acrylic arches help the dome maintain its shape.</p>
                <p>Projected into the depth of the half sphere, the image fills a viewer’s entire field of vision, engaging them completely. The dynamic, flexible nature of video technology means that the imagery can be easily adjusted to meet changing needs of the museum. </p>
            </Aux>
        )
    }
}

export default Dome;