import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './Contact.module.css'

const contact = (props) => {
    return (    
        <Aux>
            <h1 className={styles.title}>Contact Us</h1>
            <p>
                The Yale Peabody Museum is supported by nearly 100 full and part-time administrative 
                and divisional staff, including curators and associate curators who are faculty 
                members in related Yale University academic departments, and curators emeriti, as 
                well as several dozen curatorial affiliates and a large corps of Museum volunteers.
            </p>
            <p>
                Call our Admissions Desk (203) 432-8987 for any questions about your visit.
            </p>
            <p> 
                Direct inquiries to the appropriate Yale Peabody Museum department or division.
            </p>
            <p>
                Information about employment at Yale University is available from the University’s 
                Placement and Staff Relations.
            </p>
            <p>
                The Peabody Museum of Natural History at Yale University is located in the Science 
                Hill section of the Yale campus, at Whitney Avenue and Sachem Street in New Haven, 
                Connecticut.
            </p>    
            <div class="columns">
                <div class="column">
                    <p> <b>Mailing Address</b>
                        <br/>Name of Individual
                        <br/>Name of Department
                        <br/>Peabody Museum of Natural History
                        <br/>Yale University
                        <br/>P.O. Box 208118
                        <br/>New Haven, CT 06520-8118 USA
                    </p>
                </div>
                <div class="column">
                    <p> <b>Shipping Address</b>
                        <br/>Name of Individual
                        <br/>Name of Department
                        <br/>Peabody Museum of Natural History
                        <br/>Yale University
                        <br/>170–210 Whitney Avenue
                        <br/>New Haven, CT 06511 USA
                    </p>
                </div>
                <div class="column">
                    <p> <b>Office of Shipping and Receiving</b>
                        <br/>(203) 432-3759
                    </p>
                    </div>
            </div>
            <div class="columns">
                The Peabody Museum of Natural History at Yale University is not affiliated with the Peabody 
                Essex Museum, Salem, Massachusetts, or the Peabody Museum of Archaeology and Ethnology at 
                Harvard University.
            </div>
        </Aux>
    )
}

export default contact;