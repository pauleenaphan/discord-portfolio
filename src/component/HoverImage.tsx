import React, { useState } from 'react';

interface HoverImageProps {
    staticSrc: string;
    gifSrc: string;
    alt: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ staticSrc, gifSrc, alt }) => {
    const [imageSrc, setImageSrc] = useState<string>(staticSrc);

    return (
        <img 
            src={imageSrc} 
            alt={alt}
            onMouseOver={() => setImageSrc(gifSrc)}
            onMouseOut={() => setImageSrc(staticSrc)}
            style={{ 
                transition: 'opacity 0.3s ease', 
                width: "100%", 
                padding: "10px 0px",
            }}
        />
    );
};

export default HoverImage;