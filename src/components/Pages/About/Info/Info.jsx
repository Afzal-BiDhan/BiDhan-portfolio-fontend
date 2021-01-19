import React from 'react';

const Info = (props) => {
    return <p className="info_p">{props.name} : <span>{props.data}</span></p>
};

export default Info;