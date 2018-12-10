import React, { Component } from 'react';

// styles
import styles from './Hero.module.css';
import classNames from 'classnames';

// animations
import posed from 'react-pose';

// assets
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';

const Hero = posed.div({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
})

class hero extends Component {

    constructor(props) {
        super(props);

        // initial state
        this.state = {
            image: slide1,
            title: "Behind the Giant Squid",
            subtitle: "Peabody Highlights",
            selected: "slider-1",
        }

        // controls handler binding
        this.handleControls = this.handleControls.bind(this);
    }

    // update state from controls
    handleControls = (e) => {

        let image = null;
        let title = null;
        let subtitle = null;

        switch (e.currentTarget.id) {
            case "slider-1":
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Peabody Highlights"
                break;
            case "slider-2":
                image = slide2
                title = "The Bronze Torosaurus"
                subtitle = "From the Anderson Lab"
                break;
            default:
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Peabody Highlights"
                break;
        }

        // set state
        this.setState({
            image: image,
            title: title,
            subtitle: subtitle,
            selected: e.currentTarget.id,
        })
        
        console.log(this.state)
    }

    render() {

        // prepare image
        let vignette = "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), "
        let url = vignette + "url('" + this.state.image + "')"

        // which is selected?
        const slider1Selected = this.state.selected === "slider-1" ? styles.radioSelected : NaN
        const slider2Selected = this.state.selected === "slider-2" ? styles.radioSelected : NaN

        return (
            <Hero 
                className={classNames(styles.hero, styles.fadeIn)} 
                style={{backgroundImage: url}}>
                <div className={styles.heroInner}>
                    <div className={styles.text}>
                        <h1 className={styles.title}>{this.state.title}</h1>
                        <h2 className={styles.subtitle}>{this.state.subtitle}</h2>
                    </div>
                    <div className={styles.controls}>
                        <div name="slider" id="slider-1" 
                             className={classNames(styles.radio, slider1Selected)} 
                             onClick={this.handleControls}/>
                        <div name="slider" 
                             id="slider-2" 
                             className={classNames(styles.radio, slider2Selected)} 
                             onClick={this.handleControls}/>
                    </div>
                </div>
            </Hero>
        )
    }
}

export default hero;