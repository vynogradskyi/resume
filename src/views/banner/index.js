import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from 'assets/styles/banner.scss';
import cv from 'data/resume';


export default () => {
    return (
        <div className={styles.banner}>
            <header>
                <a href="http://goo.gl/JqjRa9" target="_blank" className="save-decoration"><h1>{cv.search}</h1></a>
            </header>
            <div className={styles.nav}>
                <NavLink className={styles.navItem} to="/hr-view">HR View</NavLink>
                <NavLink className={styles.navItem} to="/presentational-view">Presentational View</NavLink>
                <NavLink className={styles.navItem} to="/test">Test</NavLink>
            </div>
        </div>
    )
}