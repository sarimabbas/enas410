import React from 'react'

// components
import Aux from '../../../hoc/Aux';

// styles
import classNames from 'classnames';
import styles from './Camps.module.css'

// images

const camps = (props) => {
    return (
        <Aux>
            <h1>Summer Camps</h1>
            <div className={classNames("workshop")}>
                {/* <img src={workshop} alt="workshop" className={styles.image}></img> */}
                <p>
                    Four of our very best camps will be available this summer for students entering Grades 1-7! Your child will have the unique opportunity to hang out with dinosaur fossils, explore ancient cultures, study rocks and minerals, and investigate wildlife through the museum's hands-on, interactive, sciencefocused camps. These five-day camps offer a glimpse behind-the-scenes of the Peabody and into rarely visited spaces, while providing fun, safe, engaging summer activities. 
                </p>
                <h2>Schedule</h2>
                <h3>July 9-13, 2018</h3>
                <p><b>Dinosaur Detectives (Grades 1-3)</b>
                    <br/>Explore and discover the prehistoric world of dinosaurs! Dig in and uncover the mysteries of the fossils they left behind. Using their handy dinosaur journal, your little ones are sure to never miss a dinosaur detail. Join us for hands-on interactive activities and an unforgettable journey to the past! 
                </p> 
                <p><b>Junior Paleontologist (Grades 4-7) </b>
                    <br/>Explore and discover the prehistoric world of dinosaurs! Undergo training to learn how to identify and analyze dinosaur fossils. Record your findings with your team and you may even discover something new! With behind-the-scenes tours and special training, you'll be a junior paleontologist in no time!
                </p> 
                <h3>July 16-20, 2018</h3>
                <p><b>Adventures in Archaeology (Grades 1-3)</b>
                    <br/>Take a journey to the past and experience all the wonders of the Earth. Uncover clues from the past, examine ancient artifacts, and participate in a mock excavation. Watch as your little ones learn to analyze and record data. Do you have what it takes to unwrap the hidden mysteries of the Earth?
                </p> 
                <p><b>Bones and Stones (Grades 4-7) </b>
                    <br/>Take a journey to the past and explore all the wonders of the Earth. Discover ancient civilizations and learn excavation techniques as you uncover what lies beneath our very feet! Experience a real archaeological dig and a hands-on introduction to archaeology. Do you have what it takes to unwrap the hidden mysteries of the Earth?
                </p> 
                <h3>July 23-27, 2018</h3>
                <p><b>Rocks, Gems, and Minerals! Oh My! (Grades 1-3)</b>
                    <br/>Let's get ready to rock' n' roll! Explore nearby quarries and get ready to get your hands dirty. Your little one will get to learn all about why rocks and minerals are important to our everyday lives. With behind-the-scenes tours of our Mineralogy Department and an in-depth look at our Hall of Minerals exhibit, your little one will get inspired to start their very own rock collection!
                </p> 
                <p><b>Junior Geologist (Grades 4-7) </b>
                    <br/>Get ready to rock' n' roll! Undergo training as you are introduced to the wonderful world of rocks and minerals. Explore and uncover the mysteries of rocks and minerals to find out what secrets are hidden in them. Do you have what it takes to explore Earth and its hidden treasures?
                </p> 
                <h3>July 30-Aug 3, 2018 </h3>
                <p><b>Eco-World Adventures (Grades 1-3)</b>
                    <br/>Get ready to take a ride on the wild side. Take a step into the animal kingdom and discover what makes them so unique. Your little one is in for a wild week jam packed with animal-themed encounters and special behind-the-scenes tours.
                </p> 
                <p><b>Junior Biologist (Grades 4-7)</b>
                    <br/>Explore and discover the wild side of the natural world. Undergo training as you are introduced to the exciting world of animals. Find out what habitats animals live in and how they play important roles in the natural world. From mammals to birds, and even insects, you'll be able to examine them up close and become a junior biologist in no time!
                </p> 
                <h3>Aug 6-10, 2018</h3>
                <p><b>Dinosaur Detectives (Grades 1-3)  </b>
                    <br/>Explore and discover the prehistoric world of dinosaurs! Dig in and uncover the mysteries of the fossils they left behind. Using their handy dinosaur journal, your little ones are sure to never miss a dinosaur detail. Join us for hands-on interactive activities and an unforgettable journey to the past! 
                </p> 
                <p><b>Junior Paleontologist (Grades 4-7)</b>
                    <br/>Explore and discover the prehistoric world of dinosaurs! Undergo training to learn how to identify and analyze dinosaur fossils. Record your findings with your team and you may even discover something new! With behind-the-scenes tours and special training, you'll be a junior paleontologist in no time!
                </p> 
                <h3>Aug 13-17, 2018</h3>
                <p><b>Adventures in Archaeology (Grades 1-3)</b>
                    <br/>Take a journey to the past and experience all the wonders of the Earth. Uncover clues from the past, examine ancient artifacts, and participate in a mock excavation. Watch as your little ones learn to analyze and record data. Do you have what it takes to unwrap the hidden mysteries of the Earth?
                </p> 
                <p><b>Bones and Stones (Grades 4-7)</b>
                    <br/>Take a journey to the past and explore all the wonders of the Earth. Discover ancient civilizations and learn excavation techniques as you uncover what lies beneath our very feet! Experience a real archaeological dig and a hands-on introduction to archaeology. Do you have what it takes to unwrap the hidden mysteries of the Earth?
                </p> 



                <p>
                    <h2>Rates</h2>
                    $340 a week for Peabody Museum members and for Yale Employees
                    <br/>$370 a week for non-members
                </p>
                <p>
                    <h2>Hours</h2>
                    Camp Hours: 9:00am-4:00pm
                    <br/>Aftercare services available from 4:00-5:00pm for $60 per week. 
                </p>
                
                <p>
                    <h2>Refund Policy</h2>
                    A non-refundable, non-transferrable $100.00 deposit, applied to the camp balance is required to secure a spot for each camp week. Our Refund Policy states that all deposits are non-refundable and non-transferable. Cancellations prior to May 1, 2018 will be refunded 50% less the $100.00 refund. No refund will be offered for any cancellations after May 1, 2018. All camps must be paid in full by June 15, 2018.
                </p>
            </div>
        </Aux>
    )
}

export default camps;
