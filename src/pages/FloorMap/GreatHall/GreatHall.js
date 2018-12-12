import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classNames from 'classnames';
import styles from './GreatHall.module.css';

const greathall = (props) => {
    return (
        <Aux>
            <h2>Great Hall</h2>
            <svg id="greathalldetail" viewBox="0 0 1009 461">
                <defs/>
                <g id="nohover">
                    <rect className={styles.cls1} height="447" id="background" width="995" x="7" y="7"/>
                    <rect className={styles.cls2} height="457" id="border" width="1005" x="2" y="2"/>
                </g>
                <g id="hover">
                    <g id="GH23" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="76" x="7" y="7"/>
                    </g>
                    <g id="GH21" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="121" x="225" y="7"/>   
                    </g>
                    <g id="GH20" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="50" width="239" x="346" y="7"/>
                    </g>
                    <g id="GH18" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="121" x="585" y="7"/>
                    </g>
                    <g id="GH17" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="135" x="766" y="7"/>
                    </g>  
                    <g id="GH13" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="97" x="905" y="229"/>
                    </g>
                    <g id="GH12" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="97" x="905" y="302"/>
                    </g>
                    <g id="GH25" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="103" width="50" x="7" y="154"/>
                    </g>
                    <g id="GH27" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="32" x="7" y="257"/>
                    </g>
                    <g id="GH01" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="74" width="32" x="7" y="380"/>
                    </g>
                    <g id="GH02" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="98" x="39" y="422"/>
                    </g>
                    <g id="GH22" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="76" x="83" y="7"/>
                    </g>
                    <g id="GH03" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="98" x="137" y="422"/>
                    </g>
                    <g id="GH04" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="50" width="92" x="235" y="404"/>
                    </g>
                    <g id="GH05" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="91" x="327" y="422"/>
                    </g>
                    <g id="GH06" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="91" x="418" y="422"/>
                    </g>
                    <g id="GH07" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="91" x="509" y="422"/>
                    </g>
                    <g id="GH08" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="50" width="105" x="600" y="404"/>
                    </g>
                    <g id="GH09" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="99" x="705" y="422"/>
                    </g>
                    <g id="GH10" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="101" x="804" y="422"/>
                    </g>
                    <g id="GH11" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="32" width="97" x="905" y="422"/>
                    </g>
                    <g id="GH24" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="32" x="7" y="81"/>
                    </g>
                    <g id="GH14" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="97" x="905" y="156"/>
                    </g>
                    <g id="GH15" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="73" width="97" x="905" y="83"/>
                    </g>
                    <g id="GH29" onClick={props.handleRoom}>
                        <rect className={styles.cls3} height="201.41" width="196.02" x="531.74" y="128.59"/>
                    </g>
                    <g id="GH28" onClick={props.handleRoom} onMouseDown={props.playTrollAudio}>
                        <rect className={styles.cls3} height="201.41" width="306.74" x="225" y="128.59"/>
                    </g>
                </g>
            </svg>
        </Aux>
    )
}

export default greathall;
