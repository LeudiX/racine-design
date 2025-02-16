import React from "react";
import { ImgLogo } from "./ImgLogo/ImgLogo";

const Logo: React.FC = () => {
    return (
        <a
        href="#hero"
        className="flex items-center transition-transform duration-300 hover:scale-y-125"
      > 
        <ImgLogo 
        key={"RacineWhite"}
        imgSrc={"/src/assets/images/logo/Racine_Halftonewhite.png"} 
        imgAlt={"Racine Halftonewhite Logo"}
        className={`h-16 w-16`}
        />
      </a>
    );
};
 export default Logo;