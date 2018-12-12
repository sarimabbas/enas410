import React from 'react'
import { Link } from 'react-router-dom';

// components
import Aux from '../../../hoc/Aux';

// styles
import classNames from 'classnames';
import styles from './Evolutions.module.css'

// images
import evolutions_banner from './evolutionsbanner.png'

const evolutions = (props) => {
    return (
        <Aux>
            <h1>Peabody Evolutions</h1>
            <div className={classNames("workshop")}>
                {/* <img src={workshop} alt="workshop" className={styles.image}></img> */}
                <img src={evolutions_banner} alt="evolutions" className={styles.image}></img>
                <p>
                    The Evolutions (Evoking Learning and Understanding through Investigations of the Natural Science) Afterschool Program is a free science and college-focused program that provides academic support and science career exploration for 120 students from New Haven and West Haven public school districts.. The program focuses on supplementing the formal school experience and encourages students to see themselves as college-bound, scientifically literate citizens. Throughout all four years of high school, students participate in weekly afterschool classes focused on science career exploration, transferable skill development, and college preparation. Together they form a community of STEM-focused, academically driven youth leaders, and represent a key Peabody Museum initiative to bring science and local neighborhoods together.
                </p>
                <p>
                    EVOLUTIONS students participate in hands-on science activities, experience field trips to colleges and universities, and conduct research to produce their own public exhibition on a science topic of their choice. Students also have opportunities for laboratory internships and participate in a youth employment program that provides training on exhibit interpretation. Students in EVOLUTIONS transition into the Sci.CORPS (Science Career Orientation and Readiness Program for Students) component of the program, which offers participants opportunities to develop a sophisticated set of communication and workplace skills. This program includes paid work experience in the Peabody Museum for these students. The Peabody Museum employs these students as interpreters in the galleries.
                </p>
                <p>Visit the full <Link to="https://evolutions.peabody.yale.edu/">EVOLUTIONS</Link> website.</p>
            </div>
        </Aux>
    )
}

export default evolutions;
