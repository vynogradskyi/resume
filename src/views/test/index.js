import React from 'react';
import cv from 'data/resume';

export default () => {
    return (
        <div className={"test"}>
            <h1>{cv.name}</h1>
            <h2>{cv.name}</h2>
            <h3>{cv.name}</h3>
            <h4>{cv.name}</h4>
            <h5>{cv.name}</h5>
            <p>{cv.sections.aboutMe.text}</p>
        </div>
    )
}