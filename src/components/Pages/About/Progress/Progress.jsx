import React from 'react';

const Progress = (props) => {
    console.log(props.class)
    return (
        <div className="skill-item">
            <h5>{props.name} <span>{props.value}</span></h5>
            <div className="progress">
                <div className={props.class} style={{ width: props.value }}></div>
            </div>
        </div>
    );
};

export default Progress;