import React from 'react';

import styles from 'css-modules/hr-view/list.scss';

export default function ({list, customPointRenderer}) {

    return (
        <div className={styles.list}>
            <h4 className={styles.title}>{list.title}</h4>
            <ul>
                {
                    list.points.map(customPointRenderer || pointRenderer)
                }
            </ul>
        </div>
    );
}


const pointRenderer = point => {
    return (<li> <i className="icon-circle"/> {point}</li>);
};