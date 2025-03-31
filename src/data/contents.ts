//! Logo icons import
import racine_halftone from "/media/logo/racine_halftone.webp"
import racine_halftonewhite from "/media/logo/racine_halftonewhite.webp"

//! Hero section main pictures import
import tracers_logo from "/media/hero/tracers_logo.webp";
import racine_mask from "/media/hero/racine_mask.webp";

//! Gallery section portrait images import
import dorian_portrait from "/media/gallery/dorian.webp";
import teezo_portrait from "/media/gallery/teezo.webp";
import mattox_portrait from "/media/gallery/mattox.webp";
import lilnas_portrait from "/media/gallery/lil_nas.webp";
import others_portrait from "/media/gallery/others.webp";
import paper_mag from "/media/gallery/paper_mag.webp";

//! About section required parallax images import
import parallax_leafs from "/media/about/parallax_leafs_cloud.webp";
import parallax_arm_blue from "/media/about/parallax_arm_blue.webp";
import parallax_park from "/media/about/parallax_park_cloud.webp";
import xavier_cloud from "/media/about/xavier_cloud.webp";
import arm from "/media/about/arm.webp";
import black_person from "/media/about/black_person.webp";

//! CAROUSEL MEDIA IMPORTS!!!

//! LIL NAS X [MEDIA]
//? Eric Andre Show!!
import eric_andre_video_url from "/media/lil_nasx/lilnasx_eric_andre.mp4";
import eric_andre_img1_url from "/media/lil_nasx/lilnasx_updated/1.webp";
import eric_andre_img2_url from "/media/lil_nasx/lilnasx_updated/2.webp";
import eric_andre_img3_url from "/media/lil_nasx/lilnasx_updated/3.webp";

//? Vitamin Water Ad!!
import vitamin_water_img1_url from "/media/lil_nasx/1.jpg";
import vitamin_water_img2_url from "/media/lil_nasx/2.jpg";
import vitamin_water_img3_url from "/media/lil_nasx/3.jpg";

//? Kerwin Frost Show
import kerwin_frost_video_url from "/media/lil_nasx/lilnasx_kerwin_frost/lilnasx_kerwin_frost.mp4";
import kerwin_forst_img1_url from "/media/lil_nasx/lilnasx_kerwin_frost/1.webp";

//! TEEZO [MEDIA]
//? Doja Cat - Masc!!
import doja_cat_masc_video_url from "/media/teezo/teezo_doja_cat_masc.mp4";

//? Coachela - Masc!!
import coachela_masc_video_url from "/media/teezo/teezo_doja_cat_coachella_performance.mp4";
import coachela_masc_img1_url from "/media/teezo/4.jpg";
import coachela_masc_img2_url from "/media/teezo/5.webp";

//? Apple Music!!
import apple_music_img1_url from "/media/teezo/1.jpg";
import apple_music_img2_url from "/media/teezo/2.jpg";
import apple_music_img3_url from "/media/teezo/3.jpg";

//? Exit Magazine!!
import exit_mgzine_img1_url from "/media/teezo/6.jpg";

//! DORIAN ELECTRA [MEDIA]
//? My Agenda Tour!!
import my_agenda_img1_url from "/media/dorian_electra/1.jpg";
import my_agenda_img2_url from "/media/dorian_electra/2.jpg";
import my_agenda_img3_url from "/media/dorian_electra/3.jpeg";

//? My Agenda Videoclip!!
import my_agenda_video_url from "/media/dorian_electra/dorian_electra_my_agenda_2021.mp4";

//? Paper Magazine!!
import paper_mag_img_url from "/media/dorian_electra/4.webp";

//! MATTOX [MEDIA]
//? Monterality!!
import montreality_video_url from "/media/mattox/mattox_montreality.mp4";
import montreality_img1_url from "/media/mattox/1.webp";
import montreality_img2_url from "/media/mattox/2.webp";
import montreality_img3_url from "/media/mattox/3.webp";
import montreality_img4_url from "/media/mattox/4.webp";
import montreality_img5_url from "/media/mattox/5.webp";
import montreality_img6_url from "/media/mattox/6.webp";

//! PAPERMAG [MEDIA]
//? Interview!!
import paper_mag_img1_url from "/media/paper_mag/1.webp";
import paper_mag_img2_url from "/media/paper_mag/2.webp";
import paper_mag_img3_url from "/media/paper_mag/3.webp";
import paper_mag_img4_url from "/media/paper_mag/4.webp";
import paper_mag_img5_url from "/media/paper_mag/5.webp";

//! APEX [MEDIA]
//? Custom Skates!!
import custom_skates_img1_url from "/media/apex/1.webp";
import custom_skates_img2_url from "/media/apex/2.webp";
import custom_skates_img3_url from "/media/apex/3.webp";
import custom_skates_img4_url from "/media/apex/4.webp";
import custom_skates_img5_url from "/media/apex/5.webp";

//! OTHERS [MEDIA]
//? Costume Design 2024 I
import costume_designI_video_url from "/media/others/babymonster.mp4";
import costume_designI_img1_url from "/media/others/badvilain_1.webp";
import costume_designI_img2_url from "/media/others/badvilain_2.webp";
import costume_designI_img3_url from "/media/others/jinco_1.webp";
import costume_designI_img4_url from "/media/others/jinco_2.webp";
import costume_designI_img5_url from "/media/others/jinco_3.webp";
import costume_designI_img6_url from "/media/others/moonchild_1.webp";
import costume_designI_img7_url from "/media/others/moonchild_2.webp";
import costume_designI_img8_url from "/media/others/moonchild_3.webp";
import costume_designI_img9_url from "/media/others/xg_1.webp";
import costume_designI_img10_url from "/media/others/xg_2.webp";

//? Costume Design 2024 II

//! Carousel section Swiper styles import
const swiperStyles = `
.swiper-button-next, .swiper-button-prev {
color: #101828; /* Custom color for arrows */
width: 35px;
height: 35px;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
}
.swiper-button-next::after, .swiper-button-prev::after {
font-size: 15px;
}
.swiper-pagination-bullet {
background-color: rgba(255, 255, 255, 0.5); /* Custom color for pagination dots */
opacity: 0.5;
width: 10px;
height: 10px;
margin: 0 5px !important;
}
.swiper-pagination-bullet-active {
opacity: 1;
}
`;
export const content = {
  heroContainer: {
    logoOnLight: racine_halftone,
    logoOnDark: racine_halftonewhite,
  },
  hero: {
    className:
      "scroll-section items-center md:my-15 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 flex flex-col overflow-y-auto",
    title: {
      className:
        "font-[kanit] font-semibold lowercase mb-8 text-left scale-y-90 text-2xl max-w-2xl w-full",
      first: "Apparel brand",
      second: "centered at the intersection of",
      third: "art, consciousness & functionality",
    },
    images: {
      container: {
        className:
          "flex items-center justify-center -space-x-44 md:-space-x-64  lg:-space-x-80",
      },
      first: {
        image: tracers_logo,
        className: "w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80",
        alt: "Tracers Logo",
      },
      second: {
        image: racine_mask,
        className: "w-full h-48 md:w-full md:h-64 lg:w-full lg:h-80 z-10",
        alt: "Racine Mask",
      },
    },
    description: {
      container: {
        className: "md:w-2xl pb-14",
      },
      content:
        "Its nomenclature and vision is representative of the work of leading artist Émile Lemay Racine, whose multidisciplinary background ranging from forward-thinking music production to an expertise in the field of industrial design along with a bold,instinctual, and yet result-oriented methodology, has laid the foundation  for the brand's continuous innovation in creating unique, playful and eco-conscious product.",
      className:
        "font-inter text-justify text-xs md:text-sm font-medium scale-y-90",
    },
  },
  gallery: {
    className:
      "scroll-section items-center md:my-20 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    title: {
      className:
        "font-[kanit] font-semibold lowercase scale-y-90 mb-2 text-left text-2xl max-w-2xl w-full",
      content: "Gallery",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 pb-10",
      colspan10: {
        className: "col-span-12",
        container: {
          className:
            "grid sm:grid-cols-2 md:grid-cols-3 justify-center mx-auto gap-3",
        },
      },
    },
    portraits: {
      className: "relative overflow-visible cursor-pointer",
      content: {
        className:
          "sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 hover:z-10",
        images: [
          {
            id: "dorian",
            src: dorian_portrait,
            alt: "Dorian",
            title: "Dorian Electra",
          },
          {
            id: "teezo",
            src: teezo_portrait,
            alt: "Teezo",
            title: "Teezo",
          },
          {
            id: "mattox",
            src: mattox_portrait,
            alt: "Mattox",
            title: "Mattox",
          },
          {
            id: "lilnas",
            src: lilnas_portrait,
            alt: "LilNasX",
            title: "Lil NasX",
          },
          {
            id: "others",
            src: others_portrait,
            alt: "Others",
            title: "Others",
          },
          {
            id: "papermag",
            src: paper_mag,
            alt: "Paper Mag",
            title: "Paper Mag",
          },
        ],
      },
    },
  },
  carousel: {
    className:
      "scroll-section items-center md:my-20 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    swiperStyles: swiperStyles,
    title: {
      className:
        "font-[kanit] font-bold lowercase scale-y-90 tracking-wide text-left -mb-3 text-2xl max-w-2xl w-full ",
    },
    subtitle: {
      className: "text-left font-inter md:text-sm lowercase mb-4",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 pb-10",
    },
    button: {
      className:
        "rounded-full w-full font-[kanit] md:text-sm scale-y-90 tracking-tight leading-none bg-transparent border border-gray-600 hover:border-transparent md:px-2.5 py-0.5 lowercase transition-colors cursor-pointer",
    },
    projects: {
      className: "grid grid-cols-2 md:grid-cols-1 gap-1 mb-2",
      artists: [
        {
          id: "lilnas",
          title: "Lil Nas X",
          projects: [
            {
              subtitle: "Eric Andre Show",
              media: [
                { type: "video", url: eric_andre_video_url, title: "Lil Nas X - Eric Andre Show" },
                { type: "image", url: eric_andre_img1_url, title: "Lil Nas X - Eric Andre Show" },
                { type: "image", url: eric_andre_img2_url, title: "Lil Nas X - Eric Andre Show" },
                { type: "image", url: eric_andre_img3_url, title: "Lil Nas X - Eric Andre Show" },
              ],
            },
            {
              subtitle: "Vitamin Water Ad",
              media: [
                { type: "image", url: vitamin_water_img1_url, title: "Lil Nas X - Vitamin Water Ad" },
                { type: "image", url: vitamin_water_img2_url, title: "Lil Nas X - Vitamin Water Ad" },
                { type: "image", url: vitamin_water_img3_url, title: "Lil Nas X - Vitamin Water Ad" },
              ],
            },
            {
              subtitle: "Kerwin Frost Show",
              media: [
                { type: "video", url: kerwin_frost_video_url, title: "Lil Nas X - Kerwin Frost Show" },
                { type: "image", url: kerwin_forst_img1_url, title: "Lil Nas X - Kerwin Frost Show" },
              ],
            },
          ],
        },
        {
          id: "teezo",
          title: "Teezo",
          projects: [
            {
              subtitle: "Doja Cat - Masc",
              media: [
                { type: "video", url: doja_cat_masc_video_url, title: "Teezo & Doja Cat - Masc" },
              ],
            },
            {
              subtitle: "Coachella - Masc",
              media: [
                { type: "video", url: coachela_masc_video_url, title: "Teezo & Doja Cat - Masc (Coachella Performance)" },
                { type: "image", url: coachela_masc_img1_url, title: "Teezo & Doja Cat - Masc (Coachella Performance)" },
                { type: "image", url: coachela_masc_img2_url, title: "Teezo & Doja Cat - Masc (Coachella Performance)" },
              ],
            },
            {
              subtitle: "Apple Music",
              media: [
                { type: "image", url: apple_music_img1_url, title: "Teezo Touchdown - Apple Music" },
                { type: "image", url: apple_music_img2_url, title: "Teezo Touchdown - Apple Music" },
                { type: "image", url: apple_music_img3_url, title: "Teezo Touchdown - Apple Music" },
              ],
            },
            {
              subtitle: "Exit Magazine",
              media: [
                { type: "image", url: exit_mgzine_img1_url, title: "Teezo Touchdown - Exit Magazine", },
              ],
            },
          ],
        },
        {
          id: "dorian",
          title: "Dorian Electra",
          projects: [
            {
              subtitle: "My Agenda Tour",
              media: [
                { type: "image", url: my_agenda_img1_url, title: "Dorian Electra - My Agenda Tour" },
                { type: "image", url: my_agenda_img2_url, title: "Dorian Electra - My Agenda Tour" },
                { type: "image", url: my_agenda_img3_url, title: "Dorian Electra - My Agenda Tour" },
              ],
            },
            {
              subtitle: "My Agenda Videoclip",
              media: [
                { type: "video", url: my_agenda_video_url, title: "Dorian Electra - My Agenda Videoclip" },
              ],
            },
            {
              subtitle: "Paper Magazine",
              media: [
                { type: "image", url: paper_mag_img_url, title: "Dorian Electra - Paper Magazine" },
              ],
            },
          ],
        },
        {
          id: "mattox",
          title: "Matt Ox",
          projects: [
            {
              subtitle: "Montreality",
              media: [
                { type: "video", url: montreality_video_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img1_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img2_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img3_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img4_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img5_url, title: "Mattox - Montreality" },
                { type: "image", url: montreality_img6_url, title: "Mattox - Montreality" },
              ],
            },
          ],
        },
        {
          id: "papermag",
          title: "Paper Mag",
          projects: [
            {
              subtitle: "Interview",
              media: [
                { type: "image", url: paper_mag_img1_url, title: "Paper Magazine - Princess Gollum", name: "Princess Gollum" },
                { type: "image", url: paper_mag_img2_url, title: "Paper Magazine - Lil Texas", name: "Lil Texas" },
                { type: "image", url: paper_mag_img3_url, title: "Paper Magazine - Dorian Electra", name: "Dorian Electra" },
                { type: "image", url: paper_mag_img4_url, title: "Paper Magazine - Dizzy Fae", name: "Dizzy Fae", },
                { type: "image", url: paper_mag_img5_url, title: "Paper Magazine - Paolo Perfeccion", name: "Paolo Perfeccion" },
              ],
            },
          ],
        },
        {
          id: "apex",
          title: "Apex",
          projects: [
            {
              subtitle: "Custom Skates",
              media: [
                { type: "image", url: custom_skates_img1_url, title: "Apex Custom Skates" },
                { type: "image", url: custom_skates_img2_url, title: "Apex Custom Skates" },
                { type: "image", url: custom_skates_img3_url, title: "Apex Custom Skates" },
                { type: "image", url: custom_skates_img4_url, title: "Apex Custom Skates" },
                { type: "image", url: custom_skates_img5_url, title: "Apex Custom Skates" },
              ],
            },
          ],
        },
        {
          id: "others",
          title: "Costume Design",
          projects: [
            {
              subtitle: "Baby  Monster",
              media: [
                { type: "video", url: costume_designI_video_url, title: "Costume Design - Baby Monster", name: "Costume Design 2024" },
              ],
            },
            {
              subtitle: "Bad  Villain",
              media: [
                { type: "image", url: costume_designI_img1_url, title: "Costume Design - Bad Villain" },
                { type: "image", url: costume_designI_img2_url, title: "Costume Design - Bad Villain"},
              ],
            },
            {
              subtitle: "Jinco",
              media: [
                { type: "image", url: costume_designI_img3_url, title: "Costume Design - Jinco" },
                { type: "image", url: costume_designI_img4_url, title: "Costume Design - Jinco" },
                { type: "image", url: costume_designI_img5_url, title: "Costume Design - Jinco" },
              ],
            },
            {
              subtitle: "Moonchild",
              media: [
                { type: "image", url: costume_designI_img6_url, title: "Costume Design - Moonchild"},
                { type: "image", url: costume_designI_img7_url, title: "Costume Design - Moonchild" },
                { type: "image", url: costume_designI_img8_url, title: "Costume Design - Moonchild"},
              ],
            },
            {
              subtitle: "XG",
              media: [
                { type: "image", url: costume_designI_img9_url, title: "Costume Design - XG"},
                { type: "image", url: costume_designI_img10_url, title: "Costume Design - XG"},
              ],
            },
          ],
        },
      ],
    },
    swiper: {
      className: "swiper w-full h-[480px] md:h-[720px] overflow-hidden",
    },
    swiperSlide: {
      className: "flex items-center justify-center w-full h-full",
      media: {
        className: "object-cover w-full h-full",
      },
    },
  },
  about: {
    className:
      "scroll-section items-center md:my-20 my-12 py-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    title: {
      className:
        "font-inter font-semibold lowercase pl-10 text-left text-2xl max-w-2xl w-full",
    },
    gridLayout: {
      className: "pb-10",
      colspan10: {
        className: "col-span-10 space-y-5",
      },
    },
    parallaxData: [
      {
        bgImage: parallax_leafs,
        fgImage: xavier_cloud,
        fgSize: "w-56 md:w-64 lg:w-72",
        width: "w-72 md:w-96",
        text: "Émile Racine is a Montreal-based designer working at the intersection of industrial design, couture and art.",
        textPosition: "right",
        fgPosition: "center",
      },
      {
        bgImage: parallax_arm_blue,
        fgImage: arm,
        p: "py-72",
        fgSize: "w-96 md:w-96 lg:w-96",
        width: "w-72 md:w-xl",
        text: "After graduated, Racine was selected as a mentee for Lignes de Fuite, where he immersed himself in fashion, honed his technical skills, and began developing his brand. International recognition followed in 2020, when he started creating one-of-a-kind for world-renowned artists. His platform boots quickly became an iconic creation, remaining a defining staple of the brand to this day.",
        text2:
          "In recent years, Racine's growing interest in spirituality has added a new dimension to his craft. He embraces a balanced approach where the trascendent and the earthbound meet, channeling archetypal forces through his art while aligning his creative process with a responsible approach putting visionary craftsmanship at the forefront.",
        textPosition: "left",
        fgPosition: "right",
      },
      {
        bgImage: parallax_park,
        fgImage: black_person,
        p: "py-60",
        fgSize: "w-48 md:w-60",
        width: "w-72 md:w-md",
        text: "Racine's passion for music first sparked his creative journey, drawing inspiration from the icy, metallic deconstructed club sound of the early 2010s.",
        text2:
          "His debut footwear project, realized in Barcelona in 2017, was refined through eco-design strategies like modularity, wich he further developed in his final year of industrial design studies in Montreal",
        textPosition: "right",
        fgPosition: "center",
      },
    ],
  },
} as const; // Prevents modifications & enforces literal types (Best for static configs & pre-defined data)
