import React from 'react';
import { iImgThemeProps } from "./ImgTheme.d"

export const ImgTheme: React.FC<iImgThemeProps> = ({ imgID, imgSrcLight, imgSrcDark, imgAlt, className, theme = "light" }) => {
    const imgSrc = theme === "dark" ? imgSrcDark : imgSrcLight;
    return (
        <>
            <img key={imgID} src={imgSrc} alt={imgAlt} className={`${className || ''}`} /> {/*Optional className prop*/}
        </>
    )
}
