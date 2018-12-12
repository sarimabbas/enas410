import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// styles
import styles from './Hero.module.css';
import classNames from 'classnames';

// animations
import posed from 'react-pose';

// assets
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';

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
            link: "/about/highlights/2015-08-12"
        }

        // controls handler binding
        this.handleControls = this.handleControls.bind(this);
    }

    // update state from controls
    handleControls = (e) => {

        let image = null;
        let title = null;
        let subtitle = null;
        let link = null;

        switch (e.currentTarget.id) {
            case "slider-1":
                link = "/about/highlights/2015-08-12"
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Specimen Highlight"
                break;
            case "slider-2":
                link = "/about/highlights/2018-10-10-renovation"
                image = slide4
                title = "Peabody Expands After Donation"
                subtitle = "Event News"
                break;            
            case "slider-3":
                link = "/floor-plan/first-floor"
                image = slide2
                title = "New Inter&shy;active Floor Plan"
                subtitle = "Click to Visit"
                break;
            case "slider-4":
                link = "/about/highlights/2019-01-01-egypt-hall"
                image = slide3
                title = "New Ancient Egypt Hall"
                subtitle = "Exhibit Update"
                break;
            default:
                link = "/about/highlights/2015-08-12"
                image = slide1
                title = "Behind the Giant Squid"
                subtitle = "Specimen Highlight"
                break;
        }

        // set state
        this.setState({
            image: image,
            title: title,
            subtitle: subtitle,
            selected: e.currentTarget.id,
            link : link,
        })
    }

    render() {

        // prepare image
        let vignette = "linear-gradient(to right, rgba(51, 47, 109, 0.3), rgba(51, 47, 109, 0.3)), "
        let url = vignette + "url('" + this.state.image + "')"

        // which is selected?
        const slider1Selected = this.state.selected === "slider-1" ? styles.radioSelected : NaN
        const slider2Selected = this.state.selected === "slider-2" ? styles.radioSelected : NaN
        const slider3Selected = this.state.selected === "slider-3" ? styles.radioSelected : NaN
        const slider4Selected = this.state.selected === "slider-4" ? styles.radioSelected : NaN

        return (
            <Hero 
                className={classNames(styles.hero, styles.fadeIn)} 
                style={{backgroundImage: url}}>

                <div className={styles.heroInner}>
                    {/* <Link to={this.state.link} style={{textDecoration: "none", color:"inherit", lineHeight:"0", marginBottom:"0"}}> */}
                    <div className={styles.text}>
                        <h1 dangerouslySetInnerHTML={{__html: this.state.title}} className={styles.title}></h1>
                        <h2 className={styles.subtitle}>{this.state.subtitle}</h2>
                    </div>
                    {/* </Link> */}
                    <div className={styles.controls}>
                        <div name="slider" id="slider-1" 
                             className={classNames(styles.radio, slider1Selected)} 
                             onClick={this.handleControls}/>
                        <div name="slider" 
                             id="slider-2" 
                             className={classNames(styles.radio, slider2Selected)} 
                             onClick={this.handleControls}/>
                        <div name="slider" 
                             id="slider-3" 
                             className={classNames(styles.radio, slider3Selected)} 
                             onClick={this.handleControls}/>
                        <div name="slider" 
                             id="slider-4" 
                             className={classNames(styles.radio, slider4Selected)} 
                             onClick={this.handleControls}/>
                    </div>
                </div>
            </Hero>
        )
    }
}

export default hero;