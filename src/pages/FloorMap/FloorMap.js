import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import classNames from 'classnames';
import Aux from '../../hoc/Aux';

import NavSimple from '../../components/Nav/NavSimple';
import Footer from '../../components/Footer/Footer';
import FirstFloor from './FirstFloor/FirstFloor';

import styles from './FloorMap.module.css';
import './FloorMap.css';


class floormap extends Component {

    constructor(props) {
        super(props);

        this.state = {
            roomSelected : false,
            roomName : ""
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
        let roomName = "" + event.currentTarget.id
        if (this.state.roomSelected) {
            this.setState({
                roomSelected: false,
                roomName: roomName,
            })
        } else {
            this.setState({
                roomSelected: true,
                roomName: roomName,
            })
        }
    }

    render() {
        return (
            <Aux>
                <NavSimple />
                <Menu   isOpen={this.state.roomSelected} 
                        noOverlay
                        right
                        onStateChange={ this.handleMenuChange }>
                        <h1>Cafe</h1> 
                        <p>Enjoy a relaxing sandwich.</p>
                </Menu>
                <div className={classNames(styles.wrapper)}>
                    <FirstFloor handleRoom={this.handleRoom}/>
                </div>
            </Aux>
        )
    }
}

export default floormap;
