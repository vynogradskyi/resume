import React from 'react';
import cv from 'data/resume';
import styles from 'css-modules/hr-view/header.scss';

export default () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h3 className={styles.name}>{cv.name}</h3>
                <p className={styles.position}>{cv.position}</p>
            </div>

            <div className={styles.address}>
                <i className="icon-address"/> <span>{`${cv.address.zip} / ${cv.address.city}, ${cv.address.country} / ${cv.address.street}`}</span>
            </div>
            <div className={styles.phone}>
                <i className="icon-phone" /> <span>{cv.telephone}</span>
            </div>
            <div className={styles.email}>
                <i className="icon-email"/> <a href={`mailto:${cv.email}`}>{cv.email}</a>
            </div>

            <hr/>
        </div>
    );
}