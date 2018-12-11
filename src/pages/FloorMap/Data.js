// first floor images
import cafeOverlayImg from './/images/cafeOverlay.png'
import lobbyOverlayImg from './/images/lobbyOverlay.png'
import centralGalleryOverlayImg from './/images/centralGalleryOverlay.png'
import greatHallOverlayImg from './/images/greatHallOverlay.png'
import hallOceansOverlayImg from './/images/hallOceansOverlay.png'
import whitneyHallOverlayImg from './/images/whitneyHallOverlay.png'
import northHallOverlayImg from './/images/northHallOverlay.png'

// second floor images

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
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },


        "intro_anthro": {
            title: "Introduction to Anthropology",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "anthro_gallery": {
            title: "Anthropology Gallery",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "history_science_hall": {
            title: "History of Science and Technology",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        // third floor

        "new_england_dioramas": {
            title: "History of Science and Technology",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "student_exhibit": {
            title: "History of Science and Technology",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "life_sciences": {
            title: "Life Sciences",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "north_american_dioramas": {
            title: "North American Dioramas",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

        "david_friend_hall": {
            title: "David Friend Hall",
            description: "<i>Dinosaurs Take Flight </i>presents not only the history and science behind <i>Archaeopteryx</i> but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.",
            image: northHallOverlayImg,
            more: "",
        },  

    }
}

export default data;