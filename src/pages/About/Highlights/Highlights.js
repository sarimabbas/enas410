import React, {Component} from 'react'
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';
import SpotlightCard from '../../../components/Spotlight/SpotlightCard';

// import sub pages here

// styles
import styles from './Highlights.module.css'

//images
// import dinosnore from './dinosnores_nhm.jpg';

class highlights extends Component {

    pullPosts = () => {
        
    }


    render() {
        return (    
            <Aux> 
                <h1>Peabody Highlights</h1> 
                <div className={classNames(styles.row)}>
                    <SpotlightCard
                        title=""
                    />
                </div>
            </Aux>
        )
    }
}

export default highlights;