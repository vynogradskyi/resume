import React from 'react';
import classnames from 'classnames'

export default function ({w, h, t, show}) {
    return (
        <use className={classnames('point','svg-elm', show && 'show')} width={w} height={h} transform={t} xlinkHref="#point" />
    );
}