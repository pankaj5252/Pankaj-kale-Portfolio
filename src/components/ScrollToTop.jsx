// ScrollToTop.js
import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-button">
                    <i className="fa-solid fa-arrow-up-long"></i>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
