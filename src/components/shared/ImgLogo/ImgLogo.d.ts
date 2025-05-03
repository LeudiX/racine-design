export interface iImgLogoProps {
  imgID: string;
  imgSrcLight: string; // Source for light mode
  imgSrcDark: string; // Source for dark mode
  imgAlt: string;
  className?: string;
  theme?: "light" | "dark"; // Optional theme prop
  scrollToSection: (id: string) => void // Prop function for Id sharing between father and childs components
}
