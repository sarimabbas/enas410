import React from 'react';
import Aux from '../../../hoc/Aux';;

const directions = (props) => {
    return (
        <Aux>
            <h1>Directions {'&'} Parking</h1>
            <h3>Directions</h3>
                
            <p>We are located in New Haven at 170 Whitney Avenue, at the corner of Sachem Street, one block north of Trumbull Street.</p>

            <p><a href="https://map.yale.edu/?">Yale University Campus Map</a></p>

            <p>
                <b>By Car</b> 
                <br/>In New Haven, Connecticut, take Exit 3 off Interstate 91 (either north or southbound) onto the Trumbull Street connector. Turn right at the second light onto Whitney Avenue. The Museum is located at the next light on the corner of Whitney Avenue and Sachem Street. Metered street parking is available on Sachem Street, and a small visitor lot is located less than one block north of the Museum. Additional information about parking can be found below.
            </p>
            <p>
                <b>By Bus</b> 
                <br/>The Yale Peabody Museum is on New Haven’s 228 and 229 bus routes. For information contact <a href="https://www.cttransit.com/schedules">CT Transit</a> at 203.624.0151. 
            </p>
            <p>
                <b>By Train</b> 
                <br/>The Yale Peabody Museum is convenient to <a href="https://www.amtrak.com/home">Amtrak</a>, <a href="http://www.mta.info/">MTA Metro-North Railroad</a> and <a href="http://shorelineeast.com">Shore Line East</a> passenger rail service in New Haven.
            </p>
            <p>
                <a href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Yale+Peabody+Museum+of+Natural+History,+New+Haven,+CT&sll=41.242874,-73.200669&sspn=0.190516,0.445976&ie=UTF8&hq=Yale+Peabody+Museum+of+Natural+History,&hnear=New+Haven,+Connecticut&ll=41.31611,-72.920938&spn=0.022982,0.055747&z=15&iwloc=A">Google Maps directions</a> to the Yale Peabody Museum.
            </p>

            <br/>
            <h3>Visitor Parking</h3>
            <p>
                <b>Weekdays</b>
                <br/>Limited parking is available in the Yale Peabody Museum Visitors Parking Lot located next to 221 Whitney Avenue (Yale Lot 41.)  From the Peabody, head north on Whitney Avenue and the parking lot is located approximately 300 feet up the street and on the right, before the next traffic light for Humphrey St. See the <a href ="http://peabody.yale.edu/sites/default/files/documents/exhibits/YPM%20Parking%20Map%202016%20Final.pdf">parking map</a> for more details.
                <br/><br/>The parking fee is $5, and you must bring the ticket with you and pay inside the Museum. 
            </p>
            <p>
                <b>Weekends</b>
                <br/>Parking in the Peabody lot, and in the adjacent Yale parking lots, is free and open to the public.
            </p>
            <p>
                <b>Event Lectures and Events</b>
                <br/>Parking is available in the Peabody visitor lot (tickets can be validated for free at our admissions desk,) and in the adjacent Yale Lot 16 which is open for public parking after 4:30 pm. See the <a href="See parking map for more details.">parking map</a> for more details.
            </p>
            <p>
                <b>Accessible Parking</b>
                <br/>The Peabody parking lot has several designated accessible parking spots. Additional designated, metered parking spots can be found on Sachem Street.
            </p>
            <p>
                <b>Bus Parking</b>
                <br/>Buses and mini buses cannot park in the visitor lot. Buses can stand (driver must stay in the bus) on Sachem Street. See the <a href = "See the parking map for more details.">parking map</a> for more details.
            </p>
        </Aux>
    )
}

export default directions;