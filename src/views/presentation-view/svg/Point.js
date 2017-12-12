import React from 'react';

export default function ({w, h, t}) {
    return (
        <use width={w} height={h} transform={t} xlinkHref="#point" />
    );
}