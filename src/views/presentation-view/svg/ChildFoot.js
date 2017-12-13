import React from 'react';
import classnames from 'classnames';


export default function ({w, h, t, type, show}) {
    return (
        <use className={classnames('child-foot','svg-elm', show && 'show')} width={w} height={h} transform={t} xlinkHref={type} />
    );
}