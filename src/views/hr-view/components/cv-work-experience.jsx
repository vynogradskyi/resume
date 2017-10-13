import React from 'react';
import styles from 'css-modules/hr-view/experience.scss';
import cv from 'data/resume';

//components
import ExperienceSection  from './experience-section';



export default () => {
    const exp = cv.sections.experience;
    return (
        <div className={styles.experience}>
            <h4 className={styles.title}>WORK EXPERIENCE</h4>
            {exp.map((section, i) =>  <ExperienceSection key={i} item={section}/>)}
        </div>
    );
}
