import React from 'react';
import classnames from 'classnames';
import styles from 'css-modules/hr-view/experience-section.scss';

//components
import Ul from './ul';




export default ({item}) => {
    return (
        <div className={styles.item}>
            <div className={styles.vertical}/>
            <div className={styles.content}>
                <h5 className={styles.title}>{item.position}</h5>
                <span
                    className={classnames(styles.info, 'text-grey')}>{`${item.company} / ${item.city} / ${item.date}`}</span>
                <p className={styles.text}>{item.description}</p>
                <Ul points={item.points}/>
            </div>
        </div>
    );
}