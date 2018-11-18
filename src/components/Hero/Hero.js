import React, { Component } from 'react';
import styles from './Hero.module.css';

import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';

class hero extends Component {

    // initial state
    state = {
        image: slide1,
        title : "Behind the Giant Squid",
        subtitle: "Peabody Spotlights",
    }

    // update state from controls
    controlHandler = (e) => {

        let image = null;
        let title = null;
        let subtitle = null;

        switch (e.currentTarget.id) {
            case "slider-1":
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Peabody Spotlights"
                break;
            case "slider-2":
                image = slide2
                title = "The Bronze Torosaurus"
                subtitle = "From the Anderson Lab"
                break;
            default:
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Peabody Spotlights"
                break;
        }

        // set state
        this.setState({
            image: image,
            title: title,
            subtitle: subtitle
        })

        console.log(this.state)
    }

    render() {

        let url = "url('" + this.state.image + "')"

        return (
            <section className={styles.hero} style={{backgroundImage: url}}>
                <div className={styles.heroInner}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>{this.state.title}</h1>
                        <h2 className={styles.subtitle}>{this.state.subtitle}</h2>
                        <div className={styles.controls}>
                            <input type="radio" name="slider" id="slider-1" onClick={this.controlHandler} defaultChecked />
                            <input type="radio" name="slider" id="slider-2" onClick={this.controlHandler}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default hero;