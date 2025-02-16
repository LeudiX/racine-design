import { PropsWithChildren } from "react";

export interface iImgLogoProps extends PropsWithChildren {
  imgID: string;
  imgSrcLight: string; // Source for light mode
  imgSrcDark: string; // Source for dark mode
  imgAlt: string;
  className?: string;
  theme?: "light" | "dark"; // Optional theme prop
}
