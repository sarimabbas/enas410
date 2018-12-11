import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classNames from 'classnames';
import styles from './GreatHall.module.css';

const greathall = (props) => {
    return (
        <Aux>
            <svg viewBox="0 0 2009.7765 1777.5634">
                <defs/>
                <g id="nohover">
                    <rect className={styles.cls1} x="2" y="2" width="995" height="447"/>
                    <rect className={styles.cls2} x="220" y="123.588" width="306.7441" height="201.412"/>
                    <rect className={styles.cls2} x="526.7441" y="123.588" width="196.0181" height="201.412"/>
                </g>
                <g id="GH_01" onClick={props.handleRoom}>
                    <g id="hover">
                        {/* paste all rects below into these things.. may have a matching issue*/}
                        <rect className={styles.cls2} x="2" y="2" width="76" height="32"/>
                    </g>
                </g>
                <rect className={styles.cls2} x="220" y="2" width="121" height="32"/>
                <rect className={styles.cls2} x="341" y="2" width="239" height="50"/>
                <rect className={styles.cls2} x="580" y="2" width="121" height="32"/>
                <rect className={styles.cls2} x="761" y="2" width="135" height="32"/>
                <rect className={styles.cls2} x="900" y="224" width="97" height="73"/>
                <rect className={styles.cls2} x="900" y="297" width="97" height="73"/>
                <rect className={styles.cls2} x="2" y="149" width="50" height="103"/>
                <rect className={styles.cls2} x="2" y="252" width="32" height="73"/>
                <rect className={styles.cls2} x="2" y="375" width="32" height="74"/>
                <rect className={styles.cls2} x="34" y="417" width="98" height="32"/>
                <rect className={styles.cls2} x="78" y="2" width="76" height="32"/>
                <rect className={styles.cls2} x="132" y="417" width="98" height="32"/>
                <rect className={styles.cls2} x="230" y="399" width="92" height="50"/>
                <rect className={styles.cls2} x="322" y="417" width="91" height="32"/>
                <rect className={styles.cls2} x="413" y="417" width="91" height="32"/>
                <rect className={styles.cls2} x="504" y="417" width="91" height="32"/>
                <rect className={styles.cls2} x="595" y="399" width="105" height="50"/>
                <rect className={styles.cls2} x="700" y="417" width="99" height="32"/>
                <rect className={styles.cls2} x="799" y="417" width="101" height="32"/>
                <rect className={styles.cls2} x="900" y="417" width="97" height="32"/>
                <rect className={styles.cls2} x="2" y="76" width="32" height="73"/>
                <rect className={styles.cls2} x="900" y="151" width="97" height="73"/>
                <rect className={styles.cls2} x="900" y="78" width="97" height="73"/>
            </svg>
        </Aux>
    )
}

export default greathall;
