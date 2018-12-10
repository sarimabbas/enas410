import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './GroupVisits.module.css'

const groupvisits = (props) => {
    return (    
        <Aux>
                <h1>Group Admission/Program Fees and Policies</h1>
                <h3>Fees</h3>
                <b>School {'&'} Youth Group Programs</b>
                <p>
                    $200 for 1 program (includes museum admission) with up to 25 students and 5 adults (including teachers, aides and chaperones)
                </p>
                <p>A minimum of 1 chaperone must be provided for every 8 students </p>
                <p>Additional chaperones - $10 (discounted regular admission)</p>
                <p>Multiple Programs/Same Visit/Same Class: Regular fee for first program, $50 fee for additional program</p>

                <br/>
                <b>School {'&'} Youth Group Self-Guided/Group Admission</b>
                <p>$5 per student</p>
                <p>$10 per chaperone</p>
                <p>A minimum of 1 chaperone must be provided for every 8 students </p>
                <p>Teachers and staff admitted free with school ID</p>
                
                <br/>
                <b>Adult Group Self-Guided/Group Admission</b>
                <p>$10 per person</p>
                <p>To receive group rate, visit must be booked at least two weeks in advance and include at least 10 members</p>

                <br/>
                <b>Museum Highlights Tours (adult groups)</b>
                <p>$15 per person (includes museum admission) Maximum group size of 20 per tour.</p>
                <p>20% discount for senior groups</p>
                <p>Minimum group size of 10.</p>

                <br/>
                <b>Colleges and Universities</b>
                <p>Yale faculty and students with ID are admitted free </p>
                <p>College and university classes: group rates apply for self-guide or program reservations</p>
                <p>College students will be charged the student rate of $6 for individual admission</p>

                <br/>
                <b>All Groups</b>
                <p>Free bus parking</p>
                <p>All cars parking in the Peabody lot will be charged a $5 parking fee</p>
                <p>Parking for cars is limited, space not guaranteed</p>

                <br/>
                <h3>Payment Policies</h3>
                <p> Payment must be received prior to or on the day of your visit.  If we must contact you for payment after the date of the visit, an administrative fee of $25 will be added to the invoice. </p>
                <p>Accepted forms of payment include:
                    <br/>Credit card (VISA, MasterCard or Discover)
                    <br/>Check made out to Yale University
                    <br/>Cash (no change please)
                    <br/>Purchase order
                </p>
                <p>Coupons, Museum memberships, Yale IDs, or library passes will not be honored as part of the group rate; anyone using these will be considered an individual visitor by the admissions staff and not counted as part of the group. </p>
                <p><b>To pay by mail, address your payment to:</b>
                    <br/>Yale Peabody Museum of Natural History
                    <br/>Education Office
                    <br/>P.O. Box 208118
                    <br/>New Haven, CT 06520-8118
                    <br/>Attn: Elizabeth Steele
                </p>
                
                <br/>
                <h3>Refunds</h3>
                <p>Full refund for cancellation at least two weeks prior to program.</p>
                <p>No refunds/discount for fewer students than reservation.</p>
                <p>No refund for cancellation fewer than 5 business days before program.</p>
                <p>Groups that fail to show up will not receive a refund or will be billed for the program if payment has not already been received.</p>


                <br/>
                <p><i>All program and admissions income goes directly to support the Yale Peabody Museum and its education initiatives.</i></p>

        </Aux>
    )
}

export default groupvisits;