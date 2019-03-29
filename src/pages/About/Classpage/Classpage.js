import React, {Component} from 'react'
import classNames from 'classnames';
import { Link, Route } from 'react-router-dom';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here
import Design from './pages/Design'
import Cafe from './pages/Cafe'
import Mural from './pages/Mural'
import Egypt from './pages/Egypt'
import Audio from './pages/Audio'
import Dome from './pages/Dome'

// import images
import cafeCover from './images/cafeCover.png'
import designCover from './images/designCover.png'
import immersiveAudioCover from './images/immersiveAudioCover.png'
import domeCover from './images/domeCover.png'
import egyptCover from './images/egyptCover.png'
import magicMuralCover from './images/magicMuralCover.png'

// styles
import styles from './Classpage.module.css'

class classpage extends Component {


    constructor(props) {
        super(props)

        if (window.location.pathname !== "/about/class") {
            this.state = {
                overview: false,
            }
        } else {
            this.state = {
                overview: true,
            }
        }
    }


    render() {
        return (
            <Aux>
                { this.state.overview ?
                <Aux>
                    <h1>Design Team</h1>
                    <img className={classNames("imageKing")} 
                        src={designCover} alt="Design Team"
                        style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Sarim Abbas</b>
                                <br />Computer Science
                            <br />Pauli Murray '20
                            <br />sarim.abbas@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Seamus Houlihan</b>
                                <br />Geology {'&'} Geophysics, <br />Ecology {'&'} Evolutionary Biology
                            <br />Trumbull '19
                            <br />seamus.houlihan@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Kevin Koste</b>
                                <br />Mechanical Engineering
                            <br />Ezra Stiles '19
                            <br />kevin.koste@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Julia Ma</b>
                                <br />Art, Mechanical Engineering
                            <br />Jonathan Edwards '19
                            <br />julia.ma@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Rebecca Reza</b>
                                <br />Mechanical Engineering
                            <br />Saybrook '19
                            <br />rebecca.reza@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/design"}>Read more about our process &rsaquo;</Link></p>
                    <br />

                    <h1>Café Team</h1>
                    <img className={classNames("imageKing", "imageQueen")} 
                        src={cafeCover} alt="Cafe Team"
                        style={{ objectPosition: "20% 50%" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Maddie Hoffmann</b>
                                <br />Chemistry, Mechanical Engineering
                            <br />Hopper '19
                            <br />madeline.hoffmann@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Deniz Saip</b>
                                <br />Architecture
                            <br />Trumbull '19
                            <br />deniz.saip@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Jenny Xiao</b>
                                <br />Economics, <br />Mechanical Engineering
                            <br />Pierson '19
                            <br />jenny.xiao@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/cafe"}>Read more about our process &rsaquo;</Link></p>
                    <br />

                    <h1>Immersive Audio Team</h1>
                    <img className={classNames("imageKing", "imageQueen")} 
                        src={immersiveAudioCover} alt="Immersive Audio Team"
                        style={{ objectPosition: "0% 0%" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Collin Bentley</b>
                                <br />Computer Science
                            <br />Jonathan Edwards '19
                            <br />collin.bentley@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Evan Smith</b>
                                <br />Electrical Engineering, <br />Computer Science
                            <br />Jonathan Edwards '19
                            <br />evan.smith@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/audio"}>Read more about our process &rsaquo;</Link></p>
                    <br />

                    <h1>Dome Team</h1>
                    <img className={classNames("imageKing", "imageQueen")}
                        src={domeCover} alt="Dome Team"
                        style={{ objectPosition: "20% 50%" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Avital Smotrich-Barr</b>
                                <br />History, Mechanical Engineering
                            <br />Timothy Dwight '19
                            <br />avital.smotrich-barr@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Ben Weiss</b>
                                <br />Mechanical Engineering
                            <br />Saybrook '20
                            <br />benjamin.s.weiss@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/dome"}>Read more about our process &rsaquo;</Link></p>
                    <br />

                    <h1>Egypt Team</h1>
                    <img className={classNames("imageKing", "imageQueen")}
                        src={egyptCover} alt="Egypt Team"
                        style={{ maxHeight: "350px", objectFit: "scale-down" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Emily Chu</b>
                                <br />Mechanical Engineering, <br />Geology {'&'} Geophysics
                            <br />Pauli Murray '19
                            <br />emily.chu@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Cole Fandrich</b>
                                <br />Architecture
                            <br />Davenport '20
                            <br />elena.fandrich@yale.edu
                        </p>
                        </div>
                        <div>
                            <p> <b>Jacob Payne</b>
                                <br />Architecture
                            <br />Timothy Dwight '21
                            <br />jacob.payne@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/egypt"}>Read more about our process &rsaquo;</Link></p>
                    <br />

                    <h1>Magic Mural</h1>
                    <img className={classNames("imageKing", "imageQueen")}
                        src={magicMuralCover} alt="Magic Mural"
                        style={{ objectPosition: "20% 50%" }}></img>
                    <div className={classNames(styles.grid)}>
                        <div>
                            <p> <b>Antonio Cao</b>
                                <br />Undeclared
                            <br />Morse '21
                            <br />antonio.cao@yale.edu
                        </p>
                        </div>
                    </div>
                    <p><Link to={"/about/class/mural"}>Read more about our process &rsaquo;</Link></p>
                    <br />
                </Aux>
                :
                <Aux>
                    <Route path='/about/class/design' 
                        render={(props) => <Design {...props} />}/>
                    <Route path='/about/class/cafe'
                        render={(props) => <Cafe {...props} />} />
                    <Route path='/about/class/audio'
                        render={(props) => <Audio {...props} />} />
                    <Route path='/about/class/mural'
                        render={(props) => <Mural {...props} />} />
                    <Route path='/about/class/dome'
                        render={(props) => <Dome {...props} />} />
                    <Route path='/about/class/egypt'
                        render={(props) => <Egypt {...props} />} />
                </Aux> }
            </Aux>
        )
    }


}

export default classpage;