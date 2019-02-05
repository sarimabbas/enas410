import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import audio1 from './audio1.png'
import audio2 from './audio2.png'

class Audio extends Component {


    render() {
        return (
            <Aux>
                <p><Link onClick={this.props.handleBack2Overview} exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Immersive Audio Team</h1>
                <img className={classNames("imageKing")}
                    src={audio1} alt="Audio Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Our project started with the aim to change how visitors think about what a museum sounds like. The arresting beauty of the Peabody’s collection and its skilled display by exhibit designers caters wonderfully to the eyes, but there is precious little content for the ears. 	We believed there was a better, more intuitive, and more immersive experience that we could create.</p>
                <p>Our personal, headband-based system is centered around the emerging technology of Ultra Wideband localization (UWB). Using a distance-measuring technique called Time-Of-Flight, UWB transceivers can determine how far they are from each other by sending out continuous streams of time-stamped data packets along with personalized addresses. With some careful manipulation and calibration, we were able to obtain consistent readings accurate to 2 cm over a 30 meter range.</p>
                <p>Once able to measure very precise distances between two modules, we were able to designate four modules as “anchors” and one as a “tag”. The anchors were placed in well-defined positions, such that their location could be defined as 3D coordinates in a hypothetical space. Through the use of a localization and data smoothing algorithm called the Kalman Filter, the tag module could synthesize the set of distances to the four anchors into a single (X,Y,Z) coordinate describing its current position in the hypothetical space, accurate to 10cm or better. Because the localization is happening entirely within the tag module, and the anchor modules are passively transmitting, this system enables a large number of tag modules to be interacting in the space at once without overwhelming the anchors with connections. </p>
                <p>To utilize these 3D coordinates, we built a model of our classroom in the video game design program Unity. Unity is often used for first-person games, so there is a significant number of features aimed at inserting audio sources into the models and dynamically adjusting the output audio that a player hears based on their location within the digital space. By constructing the digital model of the classroom at an accurate scale to the real-world classroom and matching up the coordinate systems, we were able to write a C# script that took the tag’s data (over a simple Bluetooth transmitter) and controlled a “user” character in the Unity model. The last step was to incorporate an IMU, or motion sensor which can detect its orientation in space and relay it as a coordinate as well. This data was used to control the head position of the listener in the model, and allows the audio to change as a visitor moves their head as well as their body.</p>
                <img className={classNames("imageKing")}
                    src={audio2} alt="Audio Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>Finally, how is this system actually used? Our first step was to assure the safety of the delicate electronics. We designed discrete custom housings for the anchor modules which provide access to power them via wall outlets and to reprogram the Arduino Pro Minis inside if needed. The tag module was combined with other sensors and placed within a fitted headband component. This pairs with wireless headphones to complete the unit. The final data flow has the tag module computing its localization information, an Adafruit Feather M0 retrieving the IMU’s orientation information, and both sending their coordinates over Bluetooth to a controlling computer running the Unity scene. That computer is in turn serving the dynamic audio to the user’s headphones, allowing them to roam freely in the space and hear sounds that respond to them in the most personal and immersive way.</p>
                <p>The end product from this course is an extremely compelling prototype. The degree of accuracy we achieved using UWB localization was extremely exciting, and the potential use cases span personalized audio tours, to advanced accessibility measures for the visually impaired, to completely immersive dioramas. The Unity system is intuitive and easy to change the locations and audio files used, opening up the possibility of a rapidly changing experience that can be swapped out in a single click to create a totally different visit even with the same physical exhibits. It is not a stretch to imagine this tracking technology used in non-audio contexts as well, such as with interactive screens or dynamic lighting of cases.</p>
                <p>As the Peabody looks to evolve and grow during its renovation, the addition of a system like this would raise the bar for visitor experiences and enable a new world of content that is interactive, open-ended, dynamic, and inherently personal.</p>
            </Aux>
        )
    }
}

export default Audio;