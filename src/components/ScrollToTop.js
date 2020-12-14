import React, {useState} from 'react';

const ScrollToTop = () => {
    const [showArrow, setShowArrow] = useState(false);

    const scrollCheck = () => {
        setShowArrow(!showArrow && window.pageYOffset > 400);
    }

    const scroll = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', scrollCheck);

    return (
        <button 
            className="scrollTop" 
            onClick={scroll} 
            style={{
                height: 40, 
                display: showArrow ? 'block' : 'none'
            }}>
        ^
        </button>
    )
}

export default ScrollToTop;