import React from 'react';
import { useState } from 'react';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Sidebar from './Sidebar';

const SidbarIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="sidbar_nav">
            <ClearAllIcon className="nav_icon" onClick={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </div>
    );
};

export default SidbarIcon;