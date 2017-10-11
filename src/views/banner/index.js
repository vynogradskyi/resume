import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from 'css-modules/banner/banner.scss';
import cv from 'data/resume';
import classnames from 'classnames';



export default () => {
    return (
        <div className={classnames(styles.banner, 'content-container')}>
            <header>
                <a href="http://goo.gl/JqjRa9" target="_blank"><h1>{cv.search}</h1></a>
            </header>
            <div className={styles.nav}>
                <NavLink className={classnames(styles.navItem, 'save-decoration')} to="/hr-view">HR View</NavLink>
                <NavLink className={classnames(styles.navItem, 'save-decoration')} to="/presentational-view">Presentational View</NavLink>

            </div>
        </div>
    )
}