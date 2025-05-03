export interface iImgThemeProps {
    imgID:string;
    imgSrcLight:string;
    imgSrcDark:string;
    imgAlt: string;
    className?: string;
    theme?: "light" | "dark";
}