// first floor images
import cafeOverlayImg from './/images/cafeOverlay.png'
import lobbyOverlayImg from './/images/lobbyOverlay.png'
import centralGalleryOverlayImg from './/images/centralGalleryOverlay.png'
import greatHallOverlayImg from './/images/greatHallOverlay.png'
import hallOceansOverlayImg from './/images/hallOceansOverlay.png'
import whitneyHallOverlayImg from './/images/whitneyHallOverlay.png'
import northHallOverlayImg from './/images/northHallOverlay.png'

// second floor images
import tempOverlayImg from './/images/tempGalleryOverlay.png'
import introAnthroOverlayImg from './/images/introAnthroOverlay.png'
import anthroOverlayImg from './/images/anthroOverlay.png'
import histOverlayImg from './/images/histOverlay.png'

// third floor images
import studentOverlayImg from './/images/studentOverlay.png'
import NAOverlayImg from
'.//images/NAOverlay.png'
import NEOverlayImg from
'.//images/NEOverlay.png'
import DFHOverlayImg from
'.//images/DFHOverlay.png'
import lifesciOverlayImg from
'.//images/lifesciOverlay.png'
import discoveryRoomOverlayImg from './images/discoveryRoomOverlay.png';

// great hall images
import GH01 from './GreatHall/images/GH01.png';
import GH02 from './GreatHall/images/GH02.png';
import GH03 from './GreatHall/images/GH03.png';
import GH04 from './GreatHall/images/GH04.png';
import GH05 from './GreatHall/images/GH05.png';
import GH06 from './GreatHall/images/GH06.png';
import GH07 from './GreatHall/images/GH07.png';
import GH08 from './GreatHall/images/GH08.png';
import GH09 from './GreatHall/images/GH09.png';
import GH10 from './GreatHall/images/GH10.png';
import GH11 from './GreatHall/images/GH11.png';
import GH12 from './GreatHall/images/GH12.png';
import GH13 from './GreatHall/images/GH13.png';
import GH14 from './GreatHall/images/GH14.png';
import GH15 from './GreatHall/images/GH15.png';
import GH17 from './GreatHall/images/GH17.png';
import GH18 from './GreatHall/images/GH18.png';
import GH20 from './GreatHall/images/GH20.png';
import GH21 from './GreatHall/images/GH21.png';
import GH22 from './GreatHall/images/GH22.png';
import GH23 from './GreatHall/images/GH23.png';
import GH24 from './GreatHall/images/GH24.png';
import GH25 from './GreatHall/images/GH25.png';
import GH27 from './GreatHall/images/GH27.png';
import GH28 from './GreatHall/images/GH28.png';
import GH29 from './GreatHall/images/GH29.png';


const data = {

    roomName: {

        // first floor

        "cafe" : {
            title: "Peabody Café", 
            description: "The café will be a space in the museum for visitors to take a break and refuel in addition to a study spot for Yale and New Haven students. The cafe features seven decorated booths, one for each of the Museum's main halls.",
            image: cafeOverlayImg,
            more: "",
        } ,

        "lobby" : {
            title: "Lobby",
            description: "Welcome to the Peabody! Through the lobby, you can access the coatroom, the admissions desk and the first floor galleries. Bathrooms are available beyond the admission desk and past the central gallery. A coatroom is immediately to the left of the admissions desk. In the air above the lobby is the first life-size model of a giant squid, <i>Architeuthis dux </i>created in 1960s using the Peabody's own specimen of a giant squid tentacle. ",
            image: lobbyOverlayImg,
            more: "",
        },

        "central_gallery": {
            title: "Central Gallery",
            description: "The central gallery is an open space to relax and study.  The gallery floor contains work tables and collaboartive meeting spaces. Along the walls, there are displays from each of the Museum's ten divisions.",
            image: centralGalleryOverlayImg,
            more: "",
        },

        "great_hall" : {
            title: "The Great Hall",
            description: "The Great Hall of Dinosaurs is the centerpiece of the Peabody. Featuring skeletons from the Museum’s world-renowned paleontology collections, it is also home to Rudolph Zallinger’s famous mural The Age of Reptiles. The hall contains the notable dinosaurs <i>Deinonychus, Stegosaurus,</i> and of course the <i>Brontosaurus.</i>",
            image: greatHallOverlayImg,
            more: "/floor-plan/first-floor/great-hall",
        },

        "hall_of_ancient_oceans": {
            title: "Hall of Ancient Oceans",
            description: "From the Archelon and the Mososaur swimming above, to the jars of phytoplankton below, you can view the wide variety of ocean life present in the Peabody's collection. The collections of Hall of Ancient Oceans includes specimens from the oceans of the Mesozoic Era (248 to 65&nbsp;million years ago). ",
            image: hallOceansOverlayImg,
            more: "",
        },

        "whitney_hall": {
            title: "Whitney Hall",
            description: "After the extinction of the dinosaurs, the mammals  began to dominate the Earth. The fossils in this hall, from the Yale Peabody Museum’s collections in the Division of Vertebrate Paleontology, belong to the main groups of mammals that evolved during the Cenozoic Era (65 million years ago to the present), after the extinction of the dinosaurs.  These animals can be traced to modern mammals, like horses, camels, and dogs.  This gallery also contains the Otisville Mastodon (Mammut americanus) and the huge Brontotherium, both acquired in the 19th century by Yale’s O.C. Marsh.",
            image: whitneyHallOverlayImg,
            more: "",
        },


        "north_hall": {
            title: "North Hall",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },

        // second floor
    
        "temp_gallery": {
            title: "Temporary Gallery",
            description: "Our recently rennovated Temporary Gallery allows visitors an immersive trip into an Egyptian tomb. The entrance to the gallery features specimens that span Egyptian civilization from the royal to the common. The highlight of the exhibition is the 30&nbsp;foot interactive tomb.  Using a unique combination of infrared sensing and visible light projection it allows visitors to explore—discovering specimens and viewing mural scenes within. The end of the tomb holds the Peabody's mummy. Based on the tomb of Vizier Nespakashuty, this is the only fully reconstructed Late Period Egyptian tomb in North America.",
            image: tempOverlayImg,
            more: "",
        },


        "intro_anthro": {
            title: "Introduction to Anthropology",
            description: "This gallery contains an introduction to the sceince and art of anthropology.  The establishment of the Division of Anthropology at the Yale Peabody Museum in 1902 by George Grant MacCurdybrought together the Museum’s archaeological, ethnological and physical anthropology collections under a single authority. Since then, through the University’s scientific expeditions and donations from Yale alumni and friends, the holdings of the Division have grown to over 280,000 catalogued lots ranging from around the world.",
            image: introAnthroOverlayImg,
            more: "",
        },  

        "anthro_gallery": {
            title: "Anthropology Gallery",
            description: "Featuring more than 150 spectacular artifacts from four Yale collections—the Peabody Museum, Yale University Art Gallery, Yale Collection of Musical Instruments, and the Sterling Memorial Library—the exhibition will also introduce you to hungry emperors; drowned warriors reborn as small crabs; commoners alternately fearful of samurai violence but swept up in its romance; artists and writers conjuring scenes of adventure and wit; families reaching out to departed kin across the chasm of death; parents deciding whether to raise or reject a newborn baby; underground Christians hiding their faith behind a Buddhist icon; and Japanese artifacts that take on new meanings in Ainu villages and the parlors of New England collectors.",
            image: anthroOverlayImg,
            more: "",
        },  

        "history_science_hall": {
            title: "History of Science and Technology",
            description: "The Peabody Museum was founded 1886, but science at Yale started much before this.  The Yale Peabody Museum’s Division of Historical Scientific Instruments boasts several astronomical, navigational and survey instruments of notoriety, including a Hartmann astrolabe from the 16th century. The exhibit about the histroy of scienctific equipment also contains the first microscope purchased by Yale, from 1735. The collection also houses three 18th century armillary spheres and two tellurions.",
            image: histOverlayImg,
            more: "",
        },  

        // third floor

        "new_england_dioramas": {
            title: "New England Dioramas",
            description: "The dioramas feature scenes from Southern New England The dioramas feature scenes of life in the regions of Connecticut near New Haven, including the impressive 35 foot Coastal Region diorama. The dioramas were originally painted in 1944 by Perry Wilson and Ralph Morris.",
            image: NEOverlayImg,
            more: "",
        },  

        "student_exhibit": {
            title: "Student Gallery",
            description: "Garnet: This beautiful red mineral can reveal the secrets of mountains.  In the proces of mountain forming, garnets record the temperature and pressure of the mountain core.  View garnet samples from the major mountain ranges of the world in this comphrensive display of January's birthstone. The student gallery features a rotating sereies of exhibits by Yale College undergraduates which feature their work. This exhibit, by Seamus Houlihan '19, will be on display from January 2019 until July 2019.",
            image: studentOverlayImg,
            more: "",
        },  

        "life_sciences": {
            title: "Life Sciences",
            description: "The rennovated Life Sciences Hall offers a view into the diversity and beuaty of the life on Earth. Featuring the Peabody's extensive collections of flora and fauna, the Life Science Hall has something for everyone who loves life.  Peabody contains information on the dioramas and specimens from the previous Connecticut Hall of Birds.",
            image: lifesciOverlayImg,
            more: "",
        },  

        "north_american_dioramas": {
            title: "North American Dioramas",
            description: "The North American dioramas capture three scenes of the nature on our continent. In the museum world, the Yale Peabody Museum’s dioramas are considered masterpieces. In them our eye moves effortlessly from the specimens in the foreground to the background through the veil of atmosphere, into a vista that seems to stretch endlessly beyond the horizon. We accept the diorama as casually as if it were a window into the natural world.",
            image: NAOverlayImg,
            more: "",
        },  

        "david_friend_hall": {
            title: "David Friend Hall",
            description: "Explore the beauty and color of the natural in the David Friend Hall.  The gallery, opened in 2016, alows viewers to appreciate the austere beauty of gems and minerals. The 2,300-square-foot, state-of-the-art gem and mineral gallery features more than 150 premier specimens from the Museum's collection and also significant private collections from across the United States. Dynamic displays integrate free-standing, large-scale minerals with small-scale specimens, and customized lighting showcases each specimen’s beauty.",
            image: DFHOverlayImg,
            more: "",
        },

        "discovery_room" : {
            title: "Discovery Room",
            description: "The Discovery Room is one of the most popular destinations at the Yale Peabody Museum, visited by more than 60,000 people a year. Full of touchable specimens and hands-on activities, the Discovery Room also houses interesting live animals from both around the world and right in your own backyard—endangered poison dart frogs from South America, giant hissing cockroaches from Madagascar, tropical leaf-cutter ants from Trinidad, a bearded dragon from Australia, and walking sticks from Vietnam.",
            image: discoveryRoomOverlayImg,
            more: "",
        },

        // great hall cases
        
        "GH01" : {
            title: "<i>Poposaurus</i>",
            description: "The most complete remains ever found of the extremely rare Poposaurus, dating from approximately 220 million years ago. Poposaurus is a representative from a fleet-footed, land-dwelling, side line in crocodile evolution that could easily have preyed on dinosaurs, and certainly challenged them as the top carnivores of their day.",
            image: GH01,
            more: "",
        }, 

        "GH02" : {
            title: "Apatosaurus Skull Restoration",
            description: "This is the original skull mounted on the Apatosaurus in the Great Hall in 1931 and provided the basis for Zallinger's Age of Reptiles mural. This plaster skull is a restoration which contains part of jaw now known to be part of a Camarusaurus.",
            image: GH02,
            more: "",
        }, 

        "GH03" : {
            title: "<i>Tyrannosaurus rex</i>",
            description: "The Peabody contains the first T-Rex ever discovered.",
            image: GH03,
            more: "",
        }, 

        "GH04" : {
            title: "Crinoid: A Jurassic Sea Lily",
            description: "Although cinoids with long stems are commonly called &ldquo;sea lilies&rdquo; because of their resemblance to flowers, they are actually animals belonging to the echinoderms, the group that includes sea stars, sand dollars, sea urchins and sea cucumbers. This specimen Seirocrinus subangularis was quarried from the 180-million-year-old Jurassic of southern Germany",
            image: GH04,
            more: "",
        }, 

        "GH05" : {
            title: "<i>Limnoscelis paludis</i>",
            description: "One of the earliest known terrestrial vertebrates, Limnoscelis lived about 290 million years ago. It had claws like living mammals and reptiles, and could have used its forelimbs to dig holes to bury its eggs.  The specimen is a cast of the Peabody Museum's collections, which is the most complete example of this species.",
            image: GH05,
            more: "",
        }, 

        "GH06" : {
            title: "<i>Edaphosaurus boanerges</i>",
            description: "Edaphosaurus is not a dinosaur. Rather, it is a very distant cousin of today's mammals. The hole in its cheek behind the eye, bounded below by a bar of bone, is the same one through which your jaw muscles bulge out. The earliest ecidence of land-egg laying animals (amniotes), more than 300 million years old, shows the mammal and reptile lines had already diverged.",
            image: GH06,
            more: "",
        }, 

        "GH07" : {
            title: "<i>Othnielia rex</i>",
            description: "Othnielia is a plant-eating ornithopod, part of the great ornithischian branch of dinsaurs that also includes Triceratops and Stegosaurus. A small bipedal dinosaur, it was probably a fast runner and relied primarily on speed for protection from large predatory dinosaurs such as Allosaurus.",
            image: GH07,
            more: "",
        }, 

        "GH08" : {
            title: "The Devlopment of Plants",
            description: "Various plant specimens from the Devonian Era to modern times. These fossils represent a variety of mechanisms of preservation and plant life styles. ",
            image: GH08,
            more: "",
        }, 

        "GH09" : {
            title: "Dinosaurs",
            description: "Dinosaurs are a great and exciting group of reptiles that lived from the Triassic until the extinction 65&nbsp;million years ago.",
            image: GH09,
            more: "",
        }, 

        "GH10" : {
            title: "Birds",
            description: "Birds are warm blooded, egg-laying feathered vertebrates related to crocodiles and dinosaurs.",
            image: GH10,
            more: "",
        },

        "GH11" : {
            title: "<i>Moas</i>",
            description: "The extinct Moa was a flightless bird unique to the islands of New Zealand. There were at least 13 species on the North and South Island. Moas were herbivores, primarily favoring verries and fruits growing in branches.",
            image: GH11,
            more: "",
        },

        "GH12" : {
            title: "<i>Torosaurus</i>",
            description: "<i>Torosaurus</i>, a horned dinosaur that lived at the end of the Cretaceous Period (65 million years ago), is a member of the group of frilled and horned dinosaurs known as ceratopsians that also includes the more familiar Triceratops. Ceratopsians were herbivorous dinosaurs that fed on cycads and other low-lying plants, using their tough beak to crop plants, and their well-developed cheek teeth to chew.",
            image: GH12,
            more: "",
        },

        "GH13" : {
            title: "<i>Torosaurus</i> skull",
            description: "Torosaurus — like Bronotosaurus, Stegosaurus and Triceratops — is a classic dinosaur whose name is intimately linked to the Yale Peabody Museum. Yet, unlike those other famous Peabody dinosaurs, the meaning of the name Torosaurus has generated much confusion for professional paleontologists and amateur natural historians alike.",
            image: GH13,
            more: "",
        },

        "GH14" : {
            title: "<i>Deinonychus</i>",
            description: "For decades, dinosaurs were thought to be big, dumb, slow reptiles. Then came Deinonychus. This Cretaceous carnivore, discovered by Yale’s own paleontologist John Ostrom, catalyzed a new view of the “terrible lizards” as agile, active animals that were dramatically different from what experts had expected.",
            image: GH14,
            more: "",
        },

        "GH15" : {
            title: "<i>Cycadeoid</i>",
            description: "In the early 1890s O.C. Marsh became interested in an extinct group of Mesozoic plants known as the cycadeoids and instructed his agent, H.F. Wells, to begin acquiring them for Yale. Aiding Marsh in this collecting was George R. Wieland, the Peabody’s first paleobotanist. Wieland’s scientific interest in these enigmatic fossil trunks flourished, and it is principally through his efforts that the Museum accumulated over 1,000 specimens—the world’s largest collection of cycadeoids.",
            image: GH15,
            more: "",
        },

        "GH17" : {
            title: "<i>Tyrannosaurus rex</i>",
            description: "This skull is a cast of a specimen collected by the American Museum of Natural History. Is is from Hell Creek Formation in Montana, a rock deposit from the very end of the Cretaceous some 67 to 65 million years ago.",
            image: GH17,
            more: "",
        },

        "GH18" : {
            title: "<i>Ichthyosaurs & Plesiosaurs<i>",
            description: "Ichthyosaurs were highly specialized fish-like predators that lived from about 245 to 90 million years ago. The earliest ichthyosaurs looked more like lizards with fins, but over time there was a general transition from a lizard-shaped body plan to a fish-shaped one. Plesiosaurs were less fish-like than ichthyosaurs but were sitll well adapted for life in the oceans. A large and varied group, some were over 50 feet (15 meters) long. They have been broadly defined as two distinct types: the long-necked, small-headed plesopsaurs such as Thalassiodracon, and the short necked, large-headed pliosaurs.",
            image: GH18,
            more: "",
        },

        "GH20" : {
            title: "Mosasaur",
            description: "Mosasaurs lived during the Late Cretaceous from around 99 to 65&nbsp;million years ago. They are members of the group of reptiles that includes living lizards (including snakes), although their precise relationships among lizards are unclear.",
            image: GH20,
            more: "",
        },

        "GH21" : {
            title: "Petrified Wood",
            description: "The gem-like cross section and petrified logs displayed in the Yale Peabody Museum’s paleobotany exhibition Petrified Wood: Rainbows in Stone in the Great Hall are portions of the trunks of towering trees belonging to a family of conifers known as the araucarians.",
            image: GH21,
            more: "",
        },

        "GH22" : {
            title: "Dermochelys",
            description: "Modern sea turtles are omnivorous, eating seaweed and algae as well as invertebrates and fish. Dermochelys lives predominantly on a diet of jellyfish.",
            image: GH22,
            more: "",
        },

        "GH23" : {
            title: "Evolution of Fishes",
            description: "A new exhibition opening at the Yale Peabody Museum of Natural History blends science and art with something distinctly fishy.",
            image: GH23,
            more: "",
        },

        "GH24" : {
            title: "Coelacanths",
            description: "Coelacanths are a ratre order of fish that was thought extinct until a specimen was discovered 1938 off the coast of South&nbsp;Africa. Coelacanths are a &ldquo;living fossil,&rdquo; meaning that they represent traits present in ancient fish species.",
            image: GH24,
            more: "",
        },

        "GH25" : {
            title: "The Giant Turtle <i>Archelon</i>",
            description: "The giant turtle, <i>Archelon</i>, skeleton measures about 11 feet from snout to tail (more than 3 meters), and about 15 feet (4.5 meters) from the tip of one fore paddle to the other. Comparisons with the most similar and largest modern turtle suggest that <i>Archelon</i> weighed over 3 tons.",
            image: GH25,
            more: "",
        },

        "GH27" : {
            title: "Bony Fishes",
            description: "Bony fishes represent a diverse group of fish that contain bones, in place of cartilage.  The majority of fish are bony fish.",
            image: GH27,
            more: "",
        },

        "GH28" : {
            title: "Brontosaurus",
            description: " The Bro-toe-saurus is a four-legged herbivorous dinosaur which lived during the Late Jurassic Period. First described by O.C. Marsh in 1879, this dinosaur is named from the Greek for “thunder lizard”. It was excavated from a dig site on Como Bluff, Wyoming.  The Brontonsaurus was the first mounted dinosaur to be featured in a university museum, in 1901.",
            image: GH28,
            more: "",
        },

        "GH29" : {
            title: "Stegosaurus",
            description: "In 1877 O.C. Marsh described and named Stegosaurus ungulatus from bones collected in the Morrison Formation at Como Bluff, Wyoming, some of which is included in the mounted skeleton on display in the Yale Peabody Museum’s Great Hall. This skeleton is reconstructed from the fossil bones of at least five individuals, possibly including more than one species and different sexes.",
            image: GH29,
            more: "",
        },


    }
}

export default data;