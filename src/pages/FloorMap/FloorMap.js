// all the required stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import classNames from 'classnames';
import Aux from '../../hoc/Aux';
import Generic from '../Generic/Generic';
import { Route, Redirect, Switch } from 'react-router-dom';

// all the components that make up the page
import NavSimple from '../../components/Nav/NavSimple';
// import Footer from '../../components/Footer/Footer';
import FirstFloor from './FirstFloor/FirstFloor';
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

        this.state = {
            roomSelected : false,
            roomName : "",

            title: "",
            description: "",
            image: "",
            more: "",

            isMobile: false,
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
            more = <Link to={this.state.more}>View Room</Link>
        }


        return (
            <Aux>
                <Generic>
                    {/* Menu overlay */}
                    {/* <Menu   isOpen={this.state.roomSelected} 
                            noOverlay
                            right
                            onStateChange={ this.handleMenuChange }
                            width={this.state.isMobile ? "100vw" : 300}>
                        <img src={this.state.image} className={classNames(styles.image)} alt="overlay"></img>
                        <div className={classNames(styles.menuContent)}>
                            <h1 className={classNames(styles.title)}>{this.state.title}</h1> 
                            <p dangerouslySetInnerHTML={{ __html: this.state.description}} className={classNames(styles.description)}></p>
                            <div className={classNames(styles.more)}>{ more }</div>
                        </div>
                    </Menu> */}
                    {/* grid of sidebar and map */}
                    <div className={classNames(styles.grid)}>
                        <Sidebar></Sidebar>
                        <div className={classNames(styles.gridMiddle)}>
                            <div className={styles.floor}>
                            <Switch>
                                <Redirect exact from="/map" to="/map/first-floor"/>
                                <Route path='/map/first-floor' 
                                    render={(props) => <FirstFloor {...props} handleRoom={this.handleRoom} />}/>
                                <Route path='/map/second-floor' 
                                    render={(props) => <SecondFloor {...props} handleRoom={this.handleRoom} />}/>
                                <Route path='/map/third-floor' 
                                    render={(props) => <ThirdFloor {...props} handleRoom={this.handleRoom} />}/>
                            </Switch>
                            </div>
                        </div>
                        {/* content */}
                        <div>
                            <img src={this.state.image} className={classNames(styles.image)} alt="overlay"></img>
                            <div className={classNames(styles.menuContent)}>
                                <h3 className={classNames(styles.title)}>{this.state.title}</h3> 
                                <p dangerouslySetInnerHTML={{ __html: this.state.description}} className={classNames(styles.description)}></p>
                                <div className={classNames(styles.more)}>{ more }</div>
                            </div>
                        </div>
                    </div>
                </Generic>
            </Aux>
        )
    }
}

export default floormap;
