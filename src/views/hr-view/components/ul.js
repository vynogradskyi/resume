import React from 'react';
import styles from 'css-modules/hr-view/ul.scss';
import {li_types as types} from "appConstants";
import classnames from 'classnames';

//components
import Li from './li';


export default ({points, type, className}) => {
    return (
        <ul className={classnames(styles.ul, className || '')}>
            {points.map((point, i) => {
                let customLi = getCusomLi(type);
                return (
                    <Li text={point} key={i} customLi={customLi && customLi(point)}/>
                )
            })
            }
        </ul>
    )
}

const getCusomLi = type => {
    switch (type) {
        case types.coding:
            return codingLi;
        case types.social:
            return socialLi;
        default:
            return null;
    }
};


const socialLi = point => {
    let aParam = {};
    if(!point.nohref){
        aParam.href = point.url;
    }
    if(!point.noTarget){
        aParam.target = '_blank';
    }
    return (
        <a {...aParam}>
                <span className={classnames(styles.site, 'text-grey')}>{`${point.site} / `}</span>
            {point.value}
            </a>
    )
};

const codingLi = point => {
    return (
        <span>
                {point.title}
            <span className={classnames(styles.level, 'text-grey')}>{` (${point.level})`}</span>
            </span>
    )
}