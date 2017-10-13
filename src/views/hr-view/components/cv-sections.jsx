import React from 'react';
import styles from 'css-modules/hr-view/sections.scss';
import cv from 'data/resume';
import {li_types as types} from 'appConstants';


//components
import List from './titled-list';


export default () => {
    const sections = cv.sections;
    return (
        <div className={styles.sections}>
            <List list={sections.coding} type={types.coding}/>
            <List list={sections.techstack}/>
            <List list={sections.personal}/>
            <List list={sections.social} type={types.social}/>
            <List list={sections.hobbies}/>
        </div>
    );

}
