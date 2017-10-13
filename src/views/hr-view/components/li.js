import React from 'react';
import styles from 'css-modules/hr-view/li.scss';
import classnames from 'classnames';


export default ({text, className, customLi}) => {
    return <li className={classnames(styles.li, className)}>{customLi || text}</li>
}