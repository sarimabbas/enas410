// all the required stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import classNames from 'classnames';
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import { Route, Redirect, Switch } from 'react-router-dom';

// all the components that make up the page
import FirstFloor from './FirstFloor/FirstFloor';
import GreatHall from './GreatHall/GreatHall';

import SecondFloor from './SecondFloor/SecondFloor';
import ThirdFloor from './ThirdFloor/ThirdFloor';
import Sidebar from './Sidebar';

// styling
import styles from './FloorMap.module.css';
import './FloorMap.css';

// data source for the map
import Data from './Data';

class floormap extends Component {

    constructor(props) {
        super(props);


        // console.log(this.props.location.pathname)

        this.state = {
            roomSelected : false,
            roomName : "",

            title: "",
            description: "",
            image: "",
            more: "",

            currentPath: "",
        }

        this.handleRoom = this.handleRoom.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);
        this.monitorScreenWidth = this.monitorScreenWidth.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.monitorScreenWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.monitorScreenWidth);
    }


    handleMenuChange = (state) => {
        this.setState({
            roomSelected: state.isOpen,
        })
    }

    handleRoom = (event) => {
        let name = "" + event.currentTarget.id
        console.log(name)
        this.setState({
            roomSelected: true,
            roomName: name,

            title: Data.roomName[name].title,
            description: Data.roomName[name].description,
            image: Data.roomName[name].image,
            more: Data.roomName[name].more,
        })
    }

    monitorScreenWidth = () => {
        console.log(window.innerWidth);
        if (window.innerWidth < 768) {
            if (!this.isMobile) {
                this.setState({
                    isMobile: true,
                })
            }
        } else {
            this.setState({
                isMobile: false,
            })
        }
    }
 
    render() {

        let more = <div></div>
        if (this.state.more !== "") {
            more = <Link to={this.state.more}>View Room &rsaquo;</Link>
        }

        let currentPath = this.props.location.pathname;

        return (
            <Aux>
                <Generic>
                    {/* grid of sidebar and map */}
                    <div className={classNames(styles.grid)}>
                        {/* left sidebar */}
                        <Sidebar></Sidebar>
                        {/* middle floor */}
                        <div className={styles.gridMiddle}>
                            <Switch>
                                <Redirect exact from="/floor-plan" to="/floor-plan/first-floor"/>
                                <Route exact path='/floor-plan/first-floor' 
                                    render={(props) => <FirstFloor {...props} handleRoom={this.handleRoom} />}/>
                                <Route path='/floor-plan/second-floor' 
                                    render={(props) => <SecondFloor {...props} handleRoom={this.handleRoom} />}/>
                                <Route path='/floor-plan/third-floor' 
                                    render={(props) => <ThirdFloor {...props} handleRoom={this.handleRoom} />}/>
                                <Route path='/floor-plan/first-floor/great-hall' 
                                    render={(props) => <GreatHall {...props} handleRoom={this.handleRoom} />}/>
                            </Switch>
                        </div>
                        {/* content */}
                        {
                            this.state.roomSelected ? 
                            <div className={styles.gridRight}>
                            <img src={this.state.image} className={classNames(styles.image)} alt="overlay"></img>
                            <div className={classNames(styles.menuContent)}>
                                <h3 className={classNames(styles.title)}>{this.state.title}</h3> 
                                <p dangerouslySetInnerHTML={{ __html: this.state.description}} className={classNames(styles.description)}></p>
                                <p className={classNames(styles.more)}>{ more }</p>
                            </div>
                            </div> :
                            <div></div>
                        }
                    </div>
                </Generic>
            </Aux>
        )
    }
}

export default floormap;
