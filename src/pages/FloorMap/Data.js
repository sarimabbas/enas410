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

// great hall images

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
                description: "The Great Hall of Dinosaurs is the centerpiece of the Yale Peabody Museum. Featuring skeletons from the Museum’s world-renowned paleontology collections, it is also home to Rudolph Zallinger’s famous mural The Age of Reptiles. The hall contains the dinosaurs <i>Deinonychus, Camarasaurus, Stegosaurus, Camptosaurus, </i>and of course the <i>Brontosaurus.</i>",
                image: greatHallOverlayImg,
                more: "/map/first-floor/great-hall",
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
            description: "Why can't you hear a pteractyl go to the bathroom? The 'p' is silent.",
            image: studentOverlayImg,
            more: "",
        },  

        "life_sciences": {
            title: "Life Sciences",
            description: "no text",
            image: northHallOverlayImg,
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

    }
}

export default data;