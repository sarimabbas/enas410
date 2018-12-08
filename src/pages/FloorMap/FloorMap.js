// all the required stuff
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import classNames from 'classnames';
import Aux from '../../hoc/Aux';

// all the components that make up the page
import NavSimple from '../../components/Nav/NavSimple';
// import Footer from '../../components/Footer/Footer';
import FirstFloor from './FirstFloor/FirstFloor';

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
        }

        this.handleRoom = this.handleRoom.bind(this);
        this.handleMenuChange = this.handleMenuChange.bind(this);
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

 
    render() {

        let more = <div></div>
        if (this.state.more !== "") {
            console.log('wihf')
            more = <Link to={this.state.more}>View Room</Link>
        }


        return (
            <Aux>
                <NavSimple />
                <Menu   isOpen={this.state.roomSelected} 
                        noOverlay
                        right
                        onStateChange={ this.handleMenuChange }>
                    <img src={this.state.image} className={classNames(styles.image)} alt="overlay"></img>
                    <div className={classNames(styles.content)}>
                        <h1 className={classNames(styles.title)}>{this.state.title}</h1> 
                        <p className={classNames(styles.description)}>{this.state.description}</p>
                        <div className={classNames(styles.more)}>{ more }</div>
                    </div>
                </Menu>
                <div className={classNames(styles.wrapper)}>
                    <FirstFloor handleRoom={this.handleRoom}/>
                </div>
            </Aux>
        )
    }
}

export default floormap;
