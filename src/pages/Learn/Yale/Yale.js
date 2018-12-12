import React from 'react'

// components
import Aux from '../../../hoc/Aux';

// styles
import classNames from 'classnames';
import styles from './Yale.module.css'

// images
import drawing from './assets/drawing.jpg';
import rebecca from './assets/rebecca.jpg';
import yusbs from './assets/yusbs.jpg';

const yale = (props) => {
    return (
        <Aux>
            <h1 className={classNames(styles.title)}>Yale Student Opportunities</h1>
                <div className={classNames("yale")}>
                    <p> The Yale Peabody Museum Office of Student Programs was established in 2016 to support Yale student participation in the activities of the Peabody Museum across all of its departments and divisions. In the 2016 academic year, over 100 students developed sustained, long-term relationships with the Museum as research interns, advisors and student employees, while an additional 1000+ students learned from Peabody objects and specimens as part of their coursework. This really is your natural history museum – our resources are here for you, to learn from and to help steward for the next generation.
                    </p>
                    <img src={rebecca} alt="rebecca" className={styles.image}></img>
                    <p className="caption">Rebecca Beilinson ('16) giving a tour of the Entomology division</p>
                    <p> The Office of Student Programs is currently expanding the number and types of courses that make use of Peabody Museum resources. With dedicated classroom and lab facilities in the Class of 1954 Environmental Sciences Center and the Kline Geology Building, and many of our unparalleled collections just steps away, the Museum provides exceptional object-based learning opportunities.
                    </p>
                    <img src={drawing} alt="drawing" className={styles.image}></img>
                    <p className="caption">Basic Drawing students with Peabody specimens</p>
                    <p> We also strive to create a sense of community among the students who work and conduct research with Museum staff and faculty. Field trips, special tours, exhibition previews, picnics and evening events draw these and other students together in fun and informal settings where natural history and social interaction often share the bill.
                    </p>
                    <img src={yusbs} alt="yusbs" className={styles.image}></img>
                    <p className="caption">YUSBS Night at the Peabody event</p>
                    <p> Yale College? Apply for a summer research internship! We place motivated students in labs or divisions where your work could result in a senior thesis or peer-reviewed publication. During the academic year, be on the lookout for collections management and undergraduate research opportunities. Undergraduate students even lead behind-the-scenes collections tours – we need you! And we invite relevant student organizations to find a home in the Peabody Museum.<br /><br />
                        Grad student? Ask us about student employment opportunities and gigs at the Museum through the Graduate School’s Teaching Fellow professional development program, or join us at one of our popular Science Cafés to discuss current science with Peabody curators and other Yale faculty, held at local favorite pizza restaurant and brewpub BAR.<br /><br />
                        Ready to get involved?<br/><br/>
                        <b>Contact:</b><br />
                        David Heiser<br />
                        Director of Student Programs<br />
                        david.heiser@yale.edu
                    </p>
                </div>
                <div className={classNames("images")}>
                    
                    
                    
                </div>
        </Aux>
    )
}

export default yale;