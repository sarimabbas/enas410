// import React, {Component} from 'react'
// import Aux from '../../../hoc/Aux';
// import SpotlightCard from '../../../components/Spotlight/SpotlightCard';


// import classNames from 'classnames';
// import styles from './Search.module.css';

// // routing
// import { Link } from 'react-router-dom';

// // data
// import Data from './Data';

// class search extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             gridView : true,
//             title : "",
//             subtitle : "",
//             image : "",
//             description : "",
//         }

//         this.handleClick = this.handleClick.bind(this);
//         this.handleBack2Grid = this.handleBack2Grid.bind(this);
//     }
    
//     handleClick = (event) => {
//         let id = event.currentTarget.id
//         let post  = NaN
//         for(let i = 0; i < Data.length; i++) {
//             if (Data[i].id === id) {
//                 post = Data[i];
//             }
//         }

//         this.setState({
//             gridView : false,
//             title : post.title,
//             subtitle : post.subtitle,
//             image : post.image,
//             description : post.long,
//         })
//     }

//     handleBack2Grid = (event) => {
//         this.setState({
//             gridView : true,
//         })
//     }

//     pullPosts = () => {

//         console.log(Data.length)
//         let posts_array = []
//         for (let i = 0; i < Data.length; i++) {
//             posts_array.push(
//                 <div id={Data[i].id} onClick={this.handleClick}>
//                     <SpotlightCard
//                         title={Data[i].title}
//                         subtitle={Data[i].subtitle}
//                         image={Data[i].image}
//                         description={Data[i].short}>
//                     </SpotlightCard>
//                 </div>
//             )
//         }
//         return posts_array;
//     }

//     render() {
//         return (    
//             <Aux> 
//                 {
//                     this.state.gridView ? 
//                     <Aux>
//                         <h1>Search the Collections</h1>
//                         <div className={classNames(styles.grid)}>
//                             { this.pullPosts() }
//                         </div>
//                     </Aux>
//                     :
//                     <div>
//                         <p className={styles.back} onClick={this.handleBack2Grid}>&lsaquo; Back to Collections</p>
//                         <h3 dangerouslySetInnerHTML={{__html: this.state.title}} className={styles.title}></h3>
//                         <img src={this.state.image} alt="Spotlight" className={classNames("imageKing", styles.imageFull)} ></img>
//                         <p dangerouslySetInnerHTML={{__html: this.state.description}} className={styles.description}></p>
//                     </div>
//                 }
//             </Aux>
//         )
//     }
// }

// export default search;


import React, {Component} from 'react'
import classNames from 'classnames';
import { Link, Redirect, Route } from 'react-router-dom';


// components
import Aux from '../../../hoc/Aux';
import SpotlightCard from '../../../components/Spotlight/SpotlightCard';
import SearchFull  from './SearchFull';

// data
import Data from './Data';

// styles
import styles from './Search.module.css'

class search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gridView : true,
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
            let path = "/collections/search/" + Data[i].id
            posts_array.push(
                <Link to={path} onClick={this.handleClick} style={ {
                    textDecoration: "none", color: "inherit"
                }}>
                    <div id={Data[i].id}>
                    <SpotlightCard
                        title={Data[i].title}
                        subtitle={Data[i].subtitle}
                        image={Data[i].image}
                        description={Data[i].short}>
                    </SpotlightCard>
                    </div>
                </Link>
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
                        <h1>Search the Collections</h1>
                        <div className={classNames(styles.grid)}>
                            { this.pullPosts() }
                        </div>
                    </Aux>
                    :
                    <Route exact path='/collections/search/:id' 
                            render={(props) => <SearchFull {...props} handleBack2Grid={this.handleBack2Grid}/>}/>
                }
            </Aux>
        )
    }
}

export default search;