import React from 'react';
import classnames from 'classnames';
import styles from 'css-modules/hr-view/sections.scss';
import List from './titled-list';
import cv from 'data/resume';


export default () => {
    const sections = cv.sections;
    return (
        <div className={styles.sections}>
            <List list={sections.coding} customPointRenderer={codingPointRenderer}/>
            <List list={sections.techstack}/>
            <List list={sections.personal}/>
            <List list={sections.social} customPointRenderer={socialPointRenderer}/>
            <List list={sections.hobbies}/>
        </div>
    );

}

const codingPointRenderer = point => {
    return (
        <li>
            <i className="icon-circle"/>
            {point.title}
            <span className={classnames(styles.level, 'text-grey')}>{` (${point.level})`}</span>
        </li>
    );
};

const socialPointRenderer = point => {
    return (
        <li>
            <i className="icon-circle"/>
            <span className={classnames(styles.site, 'text-grey')}>{`${point.site} / `}</span>
            {point.value}
        </li>
    );
};