import React from 'react'

// components
import GenericInfo from '../GenericInfo/GenericInfo'

// styles
import styles from './Visit.module.css'
import classNames from 'classnames';

const visit = (props) => {
    return (
        <GenericInfo>
            <h1 className={(classNames(styles.title))}>Hours {'&'} Admission</h1>
        </GenericInfo>
    )
}

export default visit