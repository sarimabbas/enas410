import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';
import egypt from './Egyptiangallery.png';


const temporary = (props) => {
    return (
        <Aux>
            <h1>Temporary Exhibits</h1>
            
            <img className={classNames("imageKing", "imageQueen")} src={egypt} alt ="Egyptian Gallery"></img>
            <h3>Egyptian Gallery</h3>
            <p>Our recently rennovated Egyptian Gallery allows visitors to have an immersive trip into an Egyptian tomb. The entrance to the gallery features specimens that span 2000&nbsp;years of Egyptian civilization from the royal to the common. The highlight of the exhibition is the 30&nbsp;foot interactive tomb. Using a unique combination of infrared sensing and visible light projection it allows visitors to explore—discovering specimens and viewing mural scenes within. The end of the tomb holds the Peabody's mummy. Based on the tomb of Vizier Nespakashuty, this is the only fully reconstructed Late Period Egyptian tomb in North America.</p>
            
            <div className="rule"></div>
            <br/>

            <img className={classNames("imageKing", "imageQueen")} src="http://1.bp.blogspot.com/-RKkbHSKyBPI/T9FSM4MMLAI/AAAAAAAADLc/fdA1PEeoQtE/s1600/Marsh+PMGH3b.jpg" alt ="Great Hall"></img>
                <h3>Student Gallery</h3>
                <p><i>Dinosaurs Take Flight</i> presents not only the history and science behind Archaeopteryx but also engages visitors at the intersection of art and science. Throughout the gallery, six renowned artists from around the world provide a glimpse into their studios and processes as they bring this iconic “missing link” back to life.</p>

        </Aux>
    )
}

export default temporary;