import React, {Component} from 'react'
import classNames from 'classnames';
import { Link, Redirect, Route } from 'react-router-dom';


// components
import Aux from '../../../hoc/Aux';
import SpotlightCard from '../../../components/Spotlight/SpotlightCard';
import HighlightsFull  from './HighlightsFull';

// data
import Data from './Data';

// styles
import styles from './Highlights.module.css'

class highlights extends Component {

    constructor(props) {
        super(props)

        console.log(window.location.pathname)

        if (window.location.pathname !== "/about/highlights") {
            this.state = {
                gridView : false,
            }
        } else {
            this.state = {
                gridView : true,
            }
        }

        
        this.handleClick = this.handleClick.bind(this);
        this.handleBack2Grid = this.handleBack2Grid.bind(this);
    }

    
    handleClick = (event) => {
        this.setState({
            gridView : false,
        })
    }

    handleBack2Grid = (event) => {
        this.setState({
            gridView : true,
        })
    }

    pullPosts = () => {
        let posts_array = []
        for (let i = 0; i < Data.length; i++) {
            let path = "/about/highlights/" + Data[i].id
            posts_array.push(
                <div id={Data[i].id}>
                    <SpotlightCard
                        title={Data[i].title}
                        subtitle={Data[i].subtitle}
                        image={Data[i].image}
                        description={Data[i].short}>
                    </SpotlightCard>
                    <p onClick={this.handleClick}><Link to={path}>Read More &rsaquo;</Link></p>
                </div>
            )
        }
        return posts_array;
    }

    render() {
        return (    
            <Aux> 
                {
                    this.state.gridView ? 
                    <Aux>
                        <h1>Peabody Highlights</h1>
                        <div className={classNames(styles.grid)}>
                            { this.pullPosts() }
                        </div>
                    </Aux>
                    :
                    <Route path='/about/highlights/:id' 
                            render={(props) => <HighlightsFull {...props} handleBack2Grid={this.handleBack2Grid}/>}/>
                }
            </Aux>
        )
    }
}

export default highlights;