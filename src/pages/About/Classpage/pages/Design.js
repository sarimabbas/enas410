import React, {Component} from 'react';
import Aux from '../../../../hoc/Aux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import design1 from './design1.png'
import design2 from './design2.png'
import design3 from './design3.png'

class Design extends Component {


    render() {
        return (
            <Aux>
                <p><Link onClick={this.props.handleBack2Overview} exact to="/about/class">&lsaquo; Back to Class</Link></p>
                <h1>Design Team</h1>
                <p>As the design team, we wanted to create a hypothetical image of the renovated Peabody. We brought to the forefront the historical significance of the museum with the logo and brand identity, we highlighted the diverse exhibits with the website and map, we emphasized the Peabody’s reputation as a leading research facility through the Highlights page, and we encapsulated all of our work by promoting it with our website and social media.</p>
                <h3>Visual Identity</h3>
                <img className={classNames("imageKing")}
                    src={design1} alt="Design Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>The shape of the Peabody icon is an abstracted version of the Weston Meteorite. Like many of the items in the Peabody’s vast collection, it symbolizes the museum’s position at the forefront of scientific research and discovery. The icon shape can function as an image frame, showcasing highlights from the Peabody’s collections. The ten sections of the icon represent the ten divisions of the Peabody Museum, calling to attention the collection’s colorful diversity.</p>
                <h3>Website</h3>
                <img className={classNames("imageKing")}
                    src={design2} alt="Design Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>The website was designed to inform and engage all Peabody patrons. It fully incorporates the visual identity. The website is built from scratch in HTML/CSS and React.js - powerful tools that allow for rapid prototyping and are in use at big companies. They make possible dynamic features such as the variable-width logo, animations, and hero-slider that add touches of magic to the page. An extensible menu simultaneously allows for quick navigation and a comprehensive overview. The hierarchical organization—<i>Visit</i>, <i>Exhibits</i>, <i>Learn</i>, <i>Collections</i> and <i>About</i>—distills the content into logical categories. The <i>Highlights</i> and <i>Collections</i> pages allow visitors to become better informed about the ground-breaking research taking place at the Peabody. Other pages display information about upcoming exhibits, Peabody staff, and the Making Spaces class.</p>
                <h3>Interactive Floor Plan</h3>
                <img className={classNames("imageKing")}
                    src={design3} alt="Design Team"
                    style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                <p>After researching best practices in wayfinding and navigation at dozens of museums, the design team determined that the new Peabody would benefit from an interactive floor plan. The final product includes engaging hover and click features that empower the user to create their own experience. In addition to its navigational function, the interactive floor plan also serves as a portal into exhibits and galleries by serving content with the click of a mouse or tap of a finger. The Great Hall has a room-level plan that provides visitors with case-by-case photos and information. The interactive floor plan shows promise for engaging a wide range of audiences, including families planning their visit, researchers looking for a specific object, and those who cannot visit browsing the galleries remotely.</p>
                <h3>Social Media Presence</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fwo0vwQBQOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>We felt it important to curate a social media platform for the museum, as social media is no longer something that is nice to have but something that businesses need to have. With the classic advertising goals in mind—raising awareness, increasing engagement, and driving conversions—we developed posts that targeted various audiences, such as students or the New Haven community, both to let people know what the Peabody offers and to drive people to visit the museum, buy event tickets, or sign up for various camps and classes. Additionally, we used social media to highlight our class projects, framed as ‘upcoming exhibits,’ to exemplify how the Peabody can use social media to target repreat and new visitors with posts that implicate a new experience with each visit. Lastly, the Peabody staff emphasized the museum’s focus on research and its role in groundbreaking historical discoveries. In order to both curate the perception of the Peabody as a research institution and highlight the research opportunities available at the museum, we used researcher spotlights to give a behind-the-scenes look into the incredible work staff, faculty, and students are doing. </p>
            </Aux>
        )
    }
}

export default Design;