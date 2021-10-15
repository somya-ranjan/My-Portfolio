import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function ScrolBtn() {
    const [scrolledToTop, setScrolledToTop] = useState(false);

    const handleScrollToTop = () => {
        const offset = window.scrollY;
        if (offset > 300) {
            setScrolledToTop(true);
        }
        else {
            setScrolledToTop(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScrollToTop)
    })

    let x = [' '];
    if (scrolledToTop) {
        x.push('scrollToTop');
    }
    return (
        <div className={`scrolBtn ${x.join("")}`}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            ><i class="fad fa-arrow-alt-circle-up"></i></Link>
        </div>
    )
}

export default ScrolBtn
