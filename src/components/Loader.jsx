import { useEffect, useState } from 'react';

export default function Loader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fade out opacity after component mounts
        const fadeOutTimer = setTimeout(() => {
            setIsVisible(false);
        }, 500);

        return () => clearTimeout(fadeOutTimer);
    }, []);

    return (
        <div 
            id="loader" 
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <div className="spinner"></div>
            <p className="loader-text">Loading...</p>
        </div>
    );
}
