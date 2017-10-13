import React from 'react';
import styles from 'css-modules/hr-view/titled-list.scss';

//components
import Ul from './ul';


export default function ({list, type}) {

    return (
        <div className={styles.list}>
            <h4 className={styles.title}>{list.title}</h4>
            <Ul points={list.points} type={type} />
        </div>
    );
}