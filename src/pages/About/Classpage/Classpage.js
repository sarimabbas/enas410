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
            <br/>  

            <p> <b>Sarim Abbas</b>
                <br/>Computer Science
                <br/>Pauli Murray '20
                <br/>sarim.abbas@yale.edu
            </p>

            <p> <b>Seamus Houlihan</b>
                <br/>Geology {'&'} Geophysics, <br/>Ecology {'&'} Evolutionary Biology
                <br/>Trumbull '19
                <br/>seamus.houlihan@yale.edu
            </p>

            <p> <b>Kevin Koste</b>
                <br/>Mechanical Engineering
                <br/>Ezra Stiles '19
                <br/>kevin.koste@yale.edu
            </p>

            <p> <b>Julia Ma</b>
                <br/>Art, Mechanical Engineering
                <br/>Jonathan Edwards '19
                <br/>julia.ma@yale.edu
            </p>

            <p> <b>Rebecca Reza</b>
                <br/>Mechanical Engineering
                <br/>Saybrook '19
                <br/>rebecca.reza@yale.edu
            </p>
            <br/>

            <h1>Interaction Team</h1>
            <h3>Café</h3>
            <b>Jenny Xiao</b>
            <br/> <b>Deniz</b>
            <br/> <b>Maddie</b>
            <h3>Egypt</h3>
            <b>Emily Chu</b>
            <br/><b>Jacob</b>
            

            <h1>Tech Team</h1>
            <h3>Audio</h3>
            <h3>Dome</h3>
            <b>Ben Weiss</b>
            <br/><b>Avital</b>
            

        </Aux>
    )
}

export default classpage;