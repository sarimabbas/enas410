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

    constructor(props) {
        super(props)

        this.state = {
            gridView : true,
            title : "",
            subtitle : "",
            image : "",
            description : "",
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = (event) => {
        // let id = event.currentTarget.id
        // this.setState({
        //     gridView : false,
        //     title : "",
        //     subtitle : "",
        //     image : "",
        //     description : "",
        // })
    }

    pullPosts = () => {

        console.log(Data.length)
        let posts_array = []
        for (let i = 0; i < Data.length; i++) {
            posts_array.push(
                <div id={Data[i].id} onClick={this.handleClick}>
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
                {
                    this.state.gridView ? 
                    <div className={classNames(styles.grid)}>
                        { this.pullPosts() }
                    </div>
                    :
                    <div>
                        <img src={this.state.image} alt="Spotlight" className="imageKing"></img>
                        <p>{this.state.subtitle}</p>
                        <h3 className={styles.title}>{this.state.title}</h3>
                        <p className={styles.description}>{this.state.description}</p>
                    </div>
                }
            </Aux>
        )
    }
}

export default highlights;