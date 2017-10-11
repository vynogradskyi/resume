import React from 'react';
import cv from 'data/resume';
import styles from 'css-modules/hr-view/about.scss';

export default () => {
    const about = cv.sections.aboutMe;
    return (
        <div className={styles.about}>
            <h4 className={styles.title}>{about.title}</h4>
            <p className={styles.text}>{about.text}</p>
        </div>
    )

}