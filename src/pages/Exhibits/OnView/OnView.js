import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import styles from './OnView.module.css';

// routing
import { Link } from 'react-router-dom';


// assets
import NAdioramas from './North-American-dioramas.jpg';
import davidfriend from './David-Friend-Hall.jpg';
import tempGallery from './temporary-gallery.jpg';

const onview = (props) => {
    return (
        <Aux>
            <h1>On View</h1>
            <p></p>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>The Great Hall of Dinosaurs</h3>
            <p>The Great Hall of Dinosaurs is the centerpiece of the Yale Peabody Museum. Featuring skeletons from the Museum’s world-renowned paleontology collections, it is also home to Rudolph Zallinger’s famous mural The Age of Reptiles. The hall contains the dinosaurs Deinonychus, Camarasaurus, Stegosaurus, Camptosaurus, and of course the Brontosaurus.  </p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src={NAdioramas} alt ="North American Dioramas"></img>
            <h3>North American Dioramas</h3>
            <p>The North American dioramas capture three scenes of the nature on our continent. In the museum world, the Yale Peabody Museum’s dioramas are considered masterpieces. In them our eye moves effortlessly from the specimens in the foreground to the background through the veil of atmosphere, into a vista that seems to stretch endlessly beyond the horizon. We accept the diorama as casually as if it were a window into the natural world.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Whitney Hall: Mammal Evolution</h3>
            <p>After the extinction of the dinosaurs, the mammals  began to dominate the Earth. The fossils in this hall, from the Yale Peabody Museum’s collections in the Division of Vertebrate Paleontology, belong to the main groups of mammals that evolved during the Cenozoic Era (65 million years ago to the present), after the extinction of the dinosaurs.  These animals can be traced to modern mammals, like horses, camels, and dogs.  This gallery also contains the Otisville Mastodon (Mammut americanus) and the huge Brontotherium, both acquired in the 19th century by Yale’s O.C. Marsh.</p>

            <br/> 
            <br/>                          
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Hall of Ancient Oceans</h3>
            <p>From the Archelon and the Mososaur swimming above, to the jars of phytoplankton below, you can view the wide variety of ocean life present in the Peabody's collection. The collections of Hall of Ancient Oceans includes specimens from the oceans of the Mesozoic Era (248 to 65 million years ago). </p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>History of Science and Technology</h3>
            <p>The Peabody Museum was founded 1886, but science at Yale started much before this.  The Yale Peabody Museum’s Division of Historical Scientific Instruments boasts several astronomical, navigational and survey instruments of notoriety, including a Hartmann astrolabe from the 16th century. The exhibit about the histroy of scienctific equipment also contains the first microscope purchased by Yale, from 1735. The collection also houses three 18th century armillary spheres and two tellurions.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Main Anthropology Gallery</h3>
            <p>Featuring more than 150 spectacular artifacts from four Yale collections—the Peabody Museum, Yale University Art Gallery, Yale Collection of Musical Instruments, and the Sterling Memorial Library—the exhibition will also introduce you to hungry emperors; drowned warriors reborn as small crabs; commoners alternately fearful of samurai violence but swept up in its romance; artists and writers conjuring scenes of adventure and wit; families reaching out to departed kin across the chasm of death; parents deciding whether to raise or reject a newborn baby; underground Christians hiding their faith behind a Buddhist icon; and Japanese artifacts that take on new meanings in Ainu villages and the parlors of New England collectors.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Introduction to Anthropology</h3>
            <p>This gallery contains an introduction to the sceince and art of anthropology.  The establishment of the Division of Anthropology at the Yale Peabody Museum in 1902 by George Grant MacCurdybrought together the Museum’s archaeological, ethnological and physical anthropology collections under a single authority. Since then, through the University’s scientific expeditions and donations from Yale alumni and friends, the holdings of the Division have grown to over 280,000 catalogued lots ranging from around the world.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src={davidfriend} alt ="David Friend Hall" ></img>
            <h3>David Friend Hall</h3>
            <p>Explore the beauty and color of the natural in the David Friend Hall.  The gallery, opened in 2016, alows viewers to appreciate the austere beauty of gems and minerals. The 2,300-square-foot, state-of-the-art gem and mineral gallery features more than 150 premier specimens from the Museum's collection and also significant private collections from across the United States. Dynamic displays integrate free-standing, large-scale minerals with small-scale specimens, and customized lighting showcases each specimen’s beauty.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Discovery Room</h3>
            <p>The Discovery Room is one of the most popular destinations at the Yale Peabody Museum, visited by more than 60,000 people a year. Full of touchable specimens and hands-on activities, the Discovery Room also houses interesting live animals from both around the world and right in your own backyard! The Yale Peabody Museum’s Discovery Room is a chance for families, and especially children ages 5 to 12, to explore the Museum’s collections. </p>
            <p>The Discovery Room’s most important rule is “Please Touch!” </p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>The North Hall: <i>Dinosaurs Take Flight</i></h3>
            <p> <i>Dinosaurs Take Flight </i>presents not only the history and science behind Archaeopteryx but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.</p>

            <br/>
            <br/>
            <img className={classNames("imageKing",styles.exhibitImg)} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
            <h3>Central Gallery</h3>
            <p>The central gallery is an open space to relax and study.  The gallery floor contains work tables and collaboartive meeting spaces. Along the walls, there are displays from each of the Museum's ten divisions.  </p>
        </Aux>
    )
}

export default onview;