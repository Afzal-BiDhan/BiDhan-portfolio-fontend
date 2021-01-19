import React, { useEffect, useState } from 'react';
import './Scroll.css';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowScroll } from 'react-use';

const ScrollToTopIcon = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    if (!visible) {
        return false;
    }

    return <FontAwesomeIcon onClick={scrollToTop} className="scroll_icon" icon={faArrowCircleUp} />

};

export default ScrollToTopIcon;