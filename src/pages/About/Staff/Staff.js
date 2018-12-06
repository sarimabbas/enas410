import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './Staff.module.css'

const staff = (props) => {
    return (    
        <Aux>
            <h1 className={styles.title}>Administrative Staff</h1>   
            <div class="columns">
                <div class="column">
                    <p> <b>David Skelly</b>
                        <br/>Director, Yale Peabody Museum of Natural History
                        <br/>(203) 432-3752
                        <br/>Fax (203) 432-3758
                        <br/>peabody.director@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>David Heiser</b>
                        <br/>Director of Student Programs
                        <br/>(203) 432-9545
                        <br/>Fax (203) 432-9816
                        <br/>david.heiser@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Tim White</b>
                        <br/>Director of Collections and Research
                        <br/>(203) 432-3767
                        <br/>Fax (203) 432-9816
                        <br/>tim.white@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Jonathan Rohner</b>
                        <br/>Director of Finance and Administration
                        <br/>(203) 432-3757
                        <br/>Fax (203) 432-9816
                        <br/>jonathan.rohner@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Monty Shepardson</b>
                        <br/>Director of Development
                        <br/>(203) 432-6567
                        <br/>Fax (203) 432-0175
                        <br/>monty.shepardson@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Susan Rodrigues</b>
                        <br/>Chief of Staff
                        <br/>(203) 432-3753
                        <br/>Fax (203) 432-9816
                        <br/>susan.rodrigues@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Carol DeNatale</b>
                        <br/>Project Director
                        <br/>(203) 432-9856
                        <br/>Fax (203) 432-6575
                        <br/>carol.denatale@yale.edu
                    </p>
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
            </div>
            <h1 className={styles.title}>Curatorial Staff</h1>   
            <div class="columns">
                <div class="column">
                    <p> <b>Michael Anderson</b>
                        <br/>Preparator, Exhibitions
                        <br/>(203) 432-9848
                        <br/>michael.anderson@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Rich Boardman</b>
                        <br/>Operations Manager
                        <br/>(203) 432-3782
                        <br/>richard.boardman@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Walter Brenckle</b>
                        <br/>Museum Technician
                        <br/>(203) 432-3792
                        <br/>walter.brenckle@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Melanie Brigockas</b>
                        <br/>Public Relations and Marketing Manager
                        <br/>(203) 432-5099
                        <br/>melanie.brigockas@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Robert Charlesworth</b>
                        <br/>Museum Technician
                        <br/>(203) 432-3792
                        <br/>robert.charlesworth@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Dean Corcoran</b>
                        <br/>Materials Assistant
                        <br/>(203) 919-6852
                        <br/>dean.corcoran@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Luiz Cordeiro</b>
                        <br/>Financial Assistant
                        <br/>(203) 432-3762
                        <br/>luiz.cordeiro@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Danka Dadic</b>
                        <br/>Security Attendant
                        <br/>(203) 432-3738
                        <br/>danka.dadic@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Maishe Dickman</b>
                        <br/>Museum Technician
                        <br/>((203) 432-3792
                        <br/>maishe.dickman@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Shannon Giacobbe</b>
                        <br/>Publication Assistant
                        <br/>(203) 432-3154
                        <br/>shannon.giacobbe@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Adrienne Gottlieb</b>
                        <br/>Assistant Manager, Museum Store
                        <br/>(203) 432-3740
                        <br/>adrienne.gottlieb@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Erin Gredell</b>
                        <br/>Registrar
                        <br/>(203) 737-4695
                        <br/>erin.gredell@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Christine Hanks</b>
                        <br/>Sponsored Projects Administrator
                        <br/>(203) 436-8499
                        <br/>christine.hanks@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>TBD</b>
                        <br/>Volunteer Coordinator
                        <br/>(203) 432-3731
                        <br/>TBD
                    </p>
                </div>
                <div class="column">
                    <p> <b>Ken Kuester</b>
                        <br/>Materials Assistant
                        <br/>(203) 432-3759
                        <br/>kenneth.kuester@yale.edu
                    </p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p> <b>Alana Ladson</b>
                        <br/>After School Program Operations Assistant
                        <br/>(203) 436-4862
                        <br/>alana.ladson@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Bonnie Mahmood</b>
                        <br/>Senior Administrative Assistant, Director's Office
                        <br/>(203) 432-3752
                        <br/>bonnie.mahmood@yale.edu
                    </p>
                </div>
                <div class="column">
                    <p> <b>Mark Masi</b>
                        <br/>Security Attendant
                        <br/>(203) 432-3738
                        <br/>mark.masi@yale.edu
                    </p>
                </div>
            </div>

        </Aux>
    )
}

export default staff;