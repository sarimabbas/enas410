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

        "cafe" : {
            title: "Peabody Cafe", 
            description: "Designed by Jenny, Dennis, Maddy.",
            image: cafeOverlayImg,
            more: "",
        } ,

        "lobby" : {
            title: "Lobby",
            description: "Where you enter",
            image: lobbyOverlayImg,
            more: "",
        },

        "central_gallery": {
            title: "Central Gallery",
            description: "The main frames",
            image: centralGalleryOverlayImg,
            more: "",
        },

        "great_hall" : {
            title: "The Great Hall",
            description: "Home of the Brontosaurus",
            image: greatHallOverlayImg,
            more: "/map/first-floor/great-hall",
        },

        "hall_of_ancient_oceans": {
            title: "Hall of Ancient Oceans",
            description: "Many old oceans here",
            image: hallOceansOverlayImg,
            more: "",
        },

        "whitney_hall": {
            title: "Whitney Hall",
            description: "whitney my boi",
            image: whitneyHallOverlayImg,
            more: "",
        },


        "north_hall": {
            title: "North Hall",
            description: "home of the starks",
            image: northHallOverlayImg,
            more: "",
        },
    }
}

export default data;