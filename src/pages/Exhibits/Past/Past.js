import React from 'react';
import Aux from '../../../hoc/Aux';


import classNames from 'classnames';

import Peabody2 from './peabody2.jpg'

const past = (props) => {
    return (
        <Aux>
            <h1>Past Exhibits</h1>
            <p></p>

            <img className={classNames("imageKing", "imageQueen")} alt="Peabody2" src={Peabody2}></img>
                <h3>Peabody2</h3>
                <p>The Peabody2 featured a parade of stunning objects from the Museum’s division of anthropology—many of which have never before been exhibited. Highlighting the Museum’s fantastic collections from Southeast Asia and Australia, the exhibition featured a personal letter from the Philippines inscribed on a bamboo strip, leather shadow puppets from Java, a towering masked costume from New Guinea, didjeridoos from Australia, and a 16-foot dugout canoe from the Mentawai Islands. A centerpiece of the display was an impressive collection of aboriginal art from Australia. The collection included both acrylic pieces and paintings on eucalyptus bark. Together, these pieces will told the stories of water, gathering, and hunting.</p>
            <br/>
        </Aux>
    )
}

export default past;