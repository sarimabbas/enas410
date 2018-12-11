import React, {Component} from 'react'
import classNames from 'classnames';

// components
import Aux from '../../../hoc/Aux';
import SpotlightCard from '../../../components/Spotlight/SpotlightCard';

// data
import Data from './Data';

// styles
import styles from './Highlights.module.css'

class highlights extends Component {

    pullPosts = () => {

        console.log(Data.length)
        let posts_array = []
        for (let i = 0; i < Data.length; i++) {
            posts_array.push(
                <div>
                    <SpotlightCard
                        title={Data[i].title}
                        subtitle={Data[i].subtitle}
                        image={Data[i].image}
                        description={Data[i].short}>
                    </SpotlightCard>
                </div>
            )
        }
        return posts_array;
    }

    render() {
        return (    
            <Aux> 
                <h1>Peabody Highlights</h1> 
                <div className={classNames(styles.grid)}>
                    { this.pullPosts() }
                </div>
            </Aux>
        )
    }
}

export default highlights;