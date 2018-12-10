import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './Current.module.css';

// routing
import { Link } from 'react-router-dom';


// assets
import egypt from './Egyptiangallery.png';
import NAdioramas from './NAdioramas.jpg';
import davidfriend from './David-Friend-Hall.jpg';
import mammals from './HallofMammals.jpg';
import discover from './Discovery-Room.jpg';
import anthro from './anthropology.jpg';
import introanthro from './introanthro.jpg';
import dinostakeflight from './dinostakeflight.jpg';
import central from './study_space.jpg';
import oceans from './ancientoceans.jpg';
import science from './historyofscience.jpg';
import greathall from './greathall.jpg';

const onview = (props) => {
    return (
        <Aux>
            <h1>Current Exhibits</h1>
            <br/>
            <br/>
            <img className={classNames("imageKing")} src={egypt} alt ="Egyptian Gallery"></img>
            <h3>Egyptian Gallery</h3>
            <p>Our recently rennovated Egyptian Gallery allows visitors an immersive trip into an Egyptian tomb. The entrance to the gallery features specimens that span Egyptian civilization from the royal to the common. The highlight of the exhibition is the 30&nbsp;foot interactive tomb. Using a unique combination of infrared sensing and visible light projection it allows visitors to explore—discovering specimens and viewing mural scenes within. The end of the tomb holds the Peabody's mummy. Based on the tomb of Vizier Nespakashuty, this is the only fully reconstructed Late Period Egyptian tomb in North America.</p>
            
            <br/>
            <br/>
            <img className={classNames("imageKing")} src={greathall} alt ="Great Hall"></img>
            <h3>The Great Hall of Dinosaurs</h3>
            <p>The Great Hall of Dinosaurs is the centerpiece of the Yale Peabody Museum. Featuring skeletons from the Museum’s world-renowned paleontology collections, it is also home to Rudolph Zallinger’s famous mural The Age of Reptiles. The hall contains the dinosaurs Deinonychus, Camarasaurus, Stegosaurus, Camptosaurus, and of course the Brontosaurus.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={NAdioramas} alt ="North American Dioramas"></img>
            <h3>North American Dioramas</h3>
            <p>The North American dioramas capture three scenes of the nature on our continent. In the museum world, the Yale Peabody Museum’s dioramas are considered masterpieces. In them our eye moves effortlessly from the specimens in the foreground to the background through the veil of atmosphere, into a vista that seems to stretch endlessly beyond the horizon. We accept the diorama as casually as if it were a window into the natural world.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={mammals} alt ="Mammal Evolution"></img>
            <h3>Whitney Hall: Mammal Evolution</h3>
            <p>After the extinction of the dinosaurs, the mammals began to dominate the Earth. The fossils in this hall, from the Yale Peabody Museum’s collections in the Division of Vertebrate Paleontology, belong to the main groups of mammals that evolved during the Cenozoic Era (65&nbsp;million years ago to the present), after the extinction of the dinosaurs.  These animals can be traced to modern mammals, like horses, camels, and dogs.  This gallery also contains the Otisville Mastodon (Mammut americanus) and the huge Brontotherium, both acquired in the 19th&nbsp;century by Yale’s O.C. Marsh.</p>

            <br/> 
            <br/>                          
            <img className={classNames("imageKing")} src={oceans} alt ="Hall of Ancient Oceans"></img>
            <h3>Hall of Ancient Oceans</h3>
            <p>From the Archelon and the Mososaur swimming above, to the jars of phytoplankton below, you can view the wide variety of ocean life present in the Peabody's collection. The collections of Hall of Ancient Oceans includes specimens from the oceans of the Mesozoic Era (248&nbsp;to&nbsp;65&nbsp;million years ago). </p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={science} alt ="History of Science and Technology"></img>
            <h3>History of Science and Technology</h3>
            <p>The Peabody Museum was founded 1886, but science at Yale started much before this.  The Yale Peabody Museum’s Division of Historical Scientific Instruments boasts several astronomical, navigational and survey instruments of notoriety, including a Hartman astrolabe from the 16th century. The exhibit about the histroy of scienctific equipment also contains the first microscope purchased by Yale, from 1735. The collection also houses three 18th century armillary spheres and two tellurions.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={anthro} alt ="Main Anthropology"></img>
            <h3>Main Anthropology Gallery</h3>
            <p>Featuring more than 150&nbsp;spectacular artifacts from four Yale collections—the Peabody Museum, Yale University Art Gallery, Yale Collection of Musical Instruments, and the Sterling Memorial Library—the exhibition will also introduce you to hungry emperors; drowned warriors reborn as small crabs; commoners alternately fearful of samurai violence but swept up in its romance; artists and writers conjuring scenes of adventure and wit; families reaching out to departed kin across the chasm of death; parents deciding whether to raise or reject a newborn baby; underground Christians hiding their faith behind a Buddhist icon; and Japanese artifacts that take on new meanings in Ainu villages and the parlors of New England collectors.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={introanthro} alt ="Intro to Anthropology"></img>
            <h3>Introduction to Anthropology</h3>
            <p>This gallery contains an introduction to the sceince and art of anthropology.  The establishment of the Division of Anthropology at the Yale Peabody Museum in 1902 by George Grant MacCurdybrought together the Museum’s archaeological, ethnological and physical anthropology collections under a single authority. Since then, through the University’s scientific expeditions and donations from Yale alumni and friends, the holdings of the Division have grown to over 280,000&nbsp;catalogued lots ranging from around the world.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={davidfriend} alt ="David Friend Hall" ></img>
            <h3>David Friend Hall</h3>
            <p>Explore the beauty and color of the natural in the David Friend Hall.  The gallery, opened in 2016, alows viewers to appreciate the austere beauty of gems and minerals. The 2,300-square-foot, state-of-the-art gem and mineral gallery features more than 150 premier specimens from the Museum's collection and also significant private collections from across the United States. Dynamic displays integrate free-standing, large-scale minerals with small-scale specimens, and customized lighting showcases each specimen’s beauty.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={discover} alt ="Discovery Room"></img>
            <h3>Discovery Room</h3>
            <p>The Discovery Room is one of the most popular destinations at the Yale Peabody Museum, visited by more than 60,000 people a year. Full of touchable specimens and hands-on activities, the Discovery Room also houses interesting live animals from both around the world and right in your own backyard! The Yale Peabody Museum’s Discovery Room is a chance for families, and especially children ages&nbsp;5 to 12, to explore the Museum’s collections. </p>
            <p>The Discovery Room’s most important rule is “Please Touch!” </p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={dinostakeflight} alt ="Dinosaurs Take Flight"></img>
            <h3>The North Hall: <i>Dinosaurs Take Flight</i></h3>
            <p> <i>Dinosaurs Take Flight </i>presents not only the history and science behind Archaeopteryx but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing")} src={central} alt ="Central Gallery"></img>
            <h3>Central Gallery</h3>
            <p>The central gallery is an open space to relax and study.  The gallery floor contains work tables and collaboartive meeting spaces. Along the walls, there are displays from each of the Museum's ten divisions.  </p>
        </Aux>
    )
}

export default onview;