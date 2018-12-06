import React from 'react'
import { Route } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import Sidebar from './Sidebar';

// import sub pages here

// styles
import styles from './Exhibits.module.css'

const exhibits = (props) => {
    return (    
        <Aux>
            <Generic>
                <div className={classNames(styles.grid)}>
                    <Sidebar></Sidebar>
                    <div className={classNames(styles.content)}>
                    {/* start sub pages components here */}
                        {/* <Route path={'/about/history'} component={History} /> */}
                    { /* end sub pages components here */ }
                    </div>
                </div>
                <h1 className={styles.title}>Current Exhibits</h1>
                <br/>
                <h3 className={styles.subtitle}>First Floor</h3>
                <br/>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">The Great Hall</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">The North Hall</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Whitney Hall</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Hall of Ancient Oceans</figcaption>
                            </figure>
                        </div>
                    </div>
                <h3 className={styles.subtitle}>Second Floor</h3>
                <br/>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Native American Gallery</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Main Anthropology Gallery</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Introduction to Anthropology</figcaption>
                            </figure>
                        </div>
                        <div class="column"></div>
                    </div>
                <h3 className={styles.subtitle}>Third Floor</h3>
                <br/>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">David Friend Hall</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Discovery Room</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                        <div class="column">
                            <figure class="image is-1600 × 1061">
                                <img src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg"></img>
                            <figcaption class="exhibits_captions">Exhibit</figcaption>
                            </figure>
                        </div>
                    </div>
                <h1 className={styles.title}>Temporary Exhibits</h1>
                <h1 className={styles.title}>Upcoming Exhibits</h1>
                <br/>
            </Generic>
        </Aux>
    )
}

export default exhibits;