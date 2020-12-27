import React from 'react';
import EventIcon from '@material-ui/icons/Event';

const TimelineTtem = (props) => {
    return (
        <div className="timeline-item">
            <div className="circle-dot"></div>
            <h6 className="timeline-data">
                <EventIcon /> <span className="dt">{props.date}</span>
            </h6>
            <h4 className="timeline-title">{props.title}</h4>
            <p className="timeline-text">{props.description}</p>
        </div>
    );
};

export default TimelineTtem;