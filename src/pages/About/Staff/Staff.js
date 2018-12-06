import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

// import sub pages here

// styles
import styles from './Staff.module.css'

const staff = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                    {/* start sub pages components here */}
                        <h1 className={styles.title}>Administrative Staff</h1>   
                        <div class="columns">
                            <div class="column">
                                <p> <b>David Skelly</b>
                                    <br>Director, Yale Peabody Museum of Natural History</br>
                                    <br>(203) 432-3752</br>
                                    <br>Fax (203) 432-3758</br>
                                    <br>peabody.director@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>David Heiser</b>
                                    <br>Director of Student Programs</br>
                                    <br>(203) 432-9545</br>
                                    <br>Fax (203) 432-9816</br>
                                    <br>david.heiser@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Tim White</b>
                                    <br>Director of Collections and Research</br>
                                    <br>(203) 432-3767</br>
                                    <br>Fax (203) 432-9816</br>
                                    <br>tim.white@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Jonathan Rohner</b>
                                    <br>Director of Finance and Administration</br>
                                    <br>(203) 432-3757</br>
                                    <br>Fax (203) 432-9816</br>
                                    <br>jonathan.rohner@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Monty Shepardson</b>
                                    <br>Director of Development</br>
                                    <br>(203) 432-6567</br>
                                    <br>Fax (203) 432-0175</br>
                                    <br>monty.shepardson@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Susan Rodrigues</b>
                                    <br>Chief of Staff</br>
                                    <br>(203) 432-3753</br>
                                    <br>Fax (203) 432-9816</br>
                                    <br>susan.rodrigues@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Carol DeNatale</b>
                                    <br>Project Director</br>
                                    <br>(203) 432-9856</br>
                                    <br>Fax (203) 432-6575</br>
                                    <br>carol.denatale@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                            </div>
                            <div class="column">
                            </div>
                        </div>
                        <h1 className={styles.title}>Curatorial Staff</h1>   
                        <div class="row">
                            <div class="column">
                                <p> <b>Michael Anderson</b>
                                    <br>Preparator, Exhibitions</br>
                                    <br>(203) 432-9848</br>
                                    <br>michael.anderson@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Rich Boardman</b>
                                    <br>Operations Manager</br>
                                    <br>(203) 432-3782</br>
                                    <br>richard.boardman@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Walter Brenckle</b>
                                    <br>Museum Technician</br>
                                    <br>(203) 432-3792</br>
                                    <br>walter.brenckle@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Melanie Brigockas</b>
                                    <br>Public Relations and Marketing Manager</br>
                                    <br>(203) 432-5099</br>
                                    <br>melanie.brigockas@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Robert Charlesworth</b>
                                    <br>Museum Technician</br>
                                    <br>(203) 432-3792</br>
                                    <br>robert.charlesworth@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Dean Corcoran</b>
                                    <br>Materials Assistant</br>
                                    <br>(203) 919-6852</br>
                                    <br>dean.corcoran@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Luiz Cordeiro</b>
                                    <br>Financial Assistant</br>
                                    <br>(203) 432-3762</br>
                                    <br>luiz.cordeiro@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Danka Dadic</b>
                                    <br>Security Attendant</br>
                                    <br>(203) 432-3738</br>
                                    <br>danka.dadic@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Maishe Dickman</b>
                                    <br>Museum Technician</br>
                                    <br>((203) 432-3792</br>
                                    <br>maishe.dickman@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Shannon Giacobbe</b>
                                    <br>Publication Assistant</br>
                                    <br>(203) 432-3154</br>
                                    <br>shannon.giacobbe@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Adrienne Gottlieb</b>
                                    <br>Assistant Manager, Museum Store</br>
                                    <br>(203) 432-3740</br>
                                    <br>adrienne.gottlieb@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Erin Gredell</b>
                                    <br>Registrar</br>
                                    <br>(203) 737-4695</br>
                                    <br>erin.gredell@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <p> <b>Christine Hanks</b>
                                    <br>Sponsored Projects Administrator</br>
                                    <br>(203) 436-8499</br>
                                    <br>christine.hanks@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>TBD</b>
                                    <br>Volunteer Coordinator</br>
                                    <br>(203) 432-3731</br>
                                    <br>TBD</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Ken Kuester</b>
                                    <br>Materials Assistant</br>
                                    <br>(203) 432-3759</br>
                                    <br>kenneth.kuester@yale.edu</br>
                                </p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <p> <b>Alana Ladson</b>
                                    <br>After School Program Operations Assistant</br>
                                    <br>(203) 436-4862</br>
                                    <br>alana.ladson@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Bonnie Mahmood</b>
                                    <br>Senior Administrative Assistant, Director's Office</br>
                                    <br>(203) 432-3752</br>
                                    <br>bonnie.mahmood@yale.edu</br>
                                </p>
                            </div>
                            <div class="column">
                                <p> <b>Mark Masi</b>
                                    <br>Security Attendant</br>
                                    <br>(203) 432-3738</br>
                                    <br>mark.masi@yale.edu</br>
                                </p>
                            </div>
                        </div>
                    { /* end sub pages components here */ }
                    </div>
                </div>
            </Generic>
        </Aux>
    )
}

export default staff;