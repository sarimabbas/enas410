import React from 'react'

// components
import Aux from '../../../hoc/Aux';
import Generic from '../../Generic/Generic';

// styles
import classNames from 'classnames';
import styles from './Yale.module.css'

const yale = (props) => {
    return (
        <Aux>
            <Generic>
                <section className={classNames("section", styles.section)}>
                    <div className={classNames("container")}>
                        {props.children}
                    </div>
                </section>
            </Generic>
        </Aux>
    )
}

export default yale;