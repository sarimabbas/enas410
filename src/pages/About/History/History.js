import React from 'react'
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';

// import sub pages here

// styles
import styles from './History.module.css'

const history = (props) => {
    return (    
        <Aux>
            
            <h1 className={styles.title}>Mission</h1>
                <p>
                    The mission of the Peabody Museum is to serve Yale University by advancing our understanding of earth’s history through geological, biological, and anthropological research, and by communicating the results of this research to the widest possible audience through publication, exhibition, and educational programs. Fundamental to this mission is stewardship of the Museum’s rich collections, which provide a remarkable record of the history of the earth, its life, and its cultures. Conservation, augmentation and use of these collections become increasingly urgent as modern threats to the diversity of life and culture continue to intensify.
                </p>
            <br/>
            <h1 className={styles.title}>History of the Peabody</h1>
            <div class="columns">
                <div class="column is-three-quarters">
                    <br/> 
                    <p>
                        Yale University’s earliest museum collection, begun in the 18th century, was a miscellaneous 
                        assortment of “natural and artificial curiosities” from around the world typical of college 
                        collections of the time. Systematic collecting of specimens for teaching and research began 
                        in 1802 with the appointment of Benjamin Silliman as Professor of Chemistry and Natural 
                        History. The outstanding mineral collection Silliman built for Yale, which he used in his 
                        pioneering teaching of geology and mineralogy, became an important source of public 
                        entertainment and one of the principal attractions for visitors to New Haven.
                    </p>
                    <br/> 
                    <p>
                        Silliman’s activities helped to establish Yale as a major center of scientific education in 
                        the first half of the 19th century. Among the undergraduates attracted to the University by 
                        its scientific reputation was Othniel Charles Marsh. Marsh’s education and his postgraduate 
                        studies abroad were funded by his uncle, the wealthy international financier George Peabody. 
                        When toward the end of his life Peabody began to distribute his vast fortune to, among others, 
                        institutions concerned with education, Marsh persuaded his uncle to include Yale in his 
                        philanthropies. In 1866 the Peabody Museum of Natural History at Yale University was founded 
                        with a gift of $150,000 for the construction of a museum building and the care and increase of 
                        the museum and its collections.
                    </p>
                    <br/> 
                    <p> 
                        O.C. Marsh was appointed Professor of Paleontology at Yale in 1866, the first such 
                        professorship in the United States, and only the second in the world. In addition to serving 
                        as director of the Peabody Museum, Marsh, with George Jarvis Brush (Mineralogy) and Addison 
                        Emery Verrill (Zoology), was also one of the Peabody Museum’s first three curators. Using 
                        his inheritance from his uncle, who died in 1869, Marsh proceeded to amass large collections 
                        vertebrate skeletons, vertebrate and invertebrate fossils, fossil footprints, and 
                        archaeological and ethnological artifacts.
                    </p>
                    <br/> 
                    <p>
                        The first Peabody Museum building opened to the public in 1876, but its capacity was soon 
                        strained by the huge dinosaur bones that Marsh’s collectors were sending in to the rapidly 
                        growing collections. In 1917 it was demolished to make way for a major dormitory complex, 
                        the Harkness Quadrangle. Construction of a new building was delayed by World War I, and the 
                        collections were in nearly inaccessible storage for seven years, until the current Peabody 
                        Museum building became ready for occupancy in 1924.
                    </p>
                    <br/> 
                    <p>
                        Dedicated in December 1925, the new building’s two-story Great Hall was specifically 
                        designed to accommodate some of O.C. Marsh’s dinosaurs, such the mounting of the giant 
                        Brontosaurus, completed in 1931 after six years of labor. In 1947 Rudolph F. Zallinger 
                        finished the fresco secco painting that is probably the Yale Peabody Museum’s best known 
                        feature, the 110-foot mural The Age of Reptiles on the south wall of the Great Hall.
                    </p> 
                    <br/>  
                    <p>
                        The new building, like the old one, quickly filled with growing collections and the people 
                        studying them. Bingham Laboratory, completed in 1959, and the Kline Geology Laboratory 
                        (1963), each connected to the Museum and helped to relieve the need for storage, work, and 
                        classroom space. Museum collections and staff are also housed in parts of three additional 
                        buildings, and a field station a few miles away on Long Island Sound provides varied 
                        research opportunities.
                    </p> 
                    <br/>  
                    <p>
                        In recognition of the importance of conserving the collections and of enabling scientists 
                        and scholars to study them properly, the University constructed the new Class of 1954 
                        Environmental Science Center to house approximately half of the Museum’s collections and 
                        to provide space for collections-based teaching and research.
                    </p>
                    <br/> 
                    <p>
                        Current efforts are addressing the conservation, education and research needs of the 
                        collections that make up the remaining portion of the Yale Peabody Museum’s approximately 
                        13 million specimens and objects requiring upgraded storage, lab and classroom facilities.
                    </p>
                </div>
                <div class="column">
                <br/>
                <figure class="image is-1000 × 1366">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Othniel_Charles_Marsh_-_Brady-Handy.jpg" alt="OC Marsh"></img>
                    <figcaption class="history_captions">OC Marsh</figcaption>
                </figure>
                <br/>
                <figure class="image is-1986×2400">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Othniel_Charles_Marsh_-_Brady-Handy.jpg" alt="OC Marsh"></img>
                    <figcaption class="history_captions">Benjamin Silliman</figcaption>
                </figure>
                </div>
            </div>
        </Aux>
    )
}

export default history;