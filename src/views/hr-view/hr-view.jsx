import React from 'react';
import styles from 'css-modules/hr-view/main.scss';
import classnames from 'classnames';



//components
import CvHeader from './components/cv-header';
import CvAbout from './components/cv-about';
import CvWorkExperience from './components/cv-work-experience';
import CvSections from './components/cv-sections';

export default (props) => {
    return (
        <div className={classnames(styles.hr, 'content-container')}>
            <header>
                <CvHeader {...props}/>
            </header>
            <div>
                <CvAbout {...props}/>
                <CvWorkExperience {...props} />
                <CvSections {...props}/>
            </div>

        </div>
    )
}