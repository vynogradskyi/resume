import React from 'react';

export default function ({w, h, t, type}) {
    return (
        <use width={w} height={h} transform={t} xlinkHref={type} />
    );
}