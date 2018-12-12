import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './Classpage.module.css'

const classpage = (props) => {
    return (    
        <Aux>
            <h1>Design Team</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Sarim Abbas</b>
                        <br/>Computer Science
                        <br/>Pauli Murray '20
                        <br/>sarim.abbas@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Seamus Houlihan</b>
                        <br/>Geology {'&'} Geophysics, <br/>Ecology {'&'} Evolutionary Biology
                        <br/>Trumbull '19
                        <br/>seamus.houlihan@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Kevin Koste</b>
                        <br/>Mechanical Engineering
                        <br/>Ezra Stiles '19
                        <br/>kevin.koste@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Julia Ma</b>
                        <br/>Art, Mechanical Engineering
                        <br/>Jonathan Edwards '19
                        <br/>julia.ma@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Rebecca Reza</b>
                        <br/>Mechanical Engineering
                        <br/>Saybrook '19
                        <br/>rebecca.reza@yale.edu
                    </p>
                </div>
            </div>
            <br/>

            <h1>Café Team</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Antonio Cao</b>
                        <br/>Undeclared
                        <br/>Morse '21
                        <br/>antonio.cao@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Maddie Hoffmann</b>
                        <br/>Chemistry, Mechanical Engineering
                        <br/>Hopper '19
                        <br/>madeline.hoffmann@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Deniz Saip</b>
                        <br/>Architecture
                        <br/>Trumbull '19
                        <br/>deniz.saip@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Jenny Xiao</b>
                        <br/>Economics, <br/>Mechanical Engineering
                        <br/>Pierson '19
                        <br/>jenny.xiao@yale.edu
                    </p>
                </div>
            </div>
            <br/>

            <h1>Egypt Team</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Emily Chu</b>
                        <br/>Geology {'&'} Geophysics, <br/>Mechanical Engineering
                        <br/>Pauli Murray '20
                        <br/>emily.chu@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Cole Fandrich</b>
                        <br/>Architecture
                        <br/>Davenport '20
                        <br/>elena.fandrich@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Jacob Payne</b>
                        <br/>Architecture
                        <br/>Timothy Dwight '21
                        <br/>jacob.payne@yale.edu
                    </p>
                </div>
            </div>
            <br/>

            <h1>Dome Team</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Avital Smotrich-Barr</b>
                        <br/>History, Mechanical Engineering
                        <br/>Timothy Dwight '19
                        <br/>avital.smotrich-barr@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Ben Weiss</b>
                        <br/>Mechanical Engineering
                        <br/>Saybrook '20
                        <br/>benjamin.s.weiss@yale.edu
                    </p>
                </div>
            </div>
            <br/>

            <h1>Audio Team</h1> 
            <div className={classNames(styles.grid)}>
                <div>
                    <p> <b>Collin Bentley</b>
                        <br/>Computer Science
                        <br/>Jonathan Edwards '19
                        <br/>collin.bentley@yale.edu
                    </p>
                </div>
                <div>
                    <p> <b>Evan Smith</b>
                        <br/>Electrical Engineering, <br/>Computer Science
                        <br/>Jonathan Edwards '19
                        <br/>evan.smith@yale.edu
                    </p>
                </div>
            </div>
            <br/>
            

        </Aux>
    )
}

export default classpage;