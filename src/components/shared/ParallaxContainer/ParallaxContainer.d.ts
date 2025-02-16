import { PropsWithChildren } from "react";

export interface iParallaxContainerProps extends PropsWithChildren {
  bgImage: string; //background image of the container
  fgImage: string; //foreground image of the container
  fgSize:string; //foreground image custom size
  width:string; //Text Box custom widht
  text: string;    //text
  text2?:string;
  textPosition: "left" | "right"; //txt position
  fgPosition?: "center" | "right"; //foreground image position
}
