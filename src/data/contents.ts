//? Hero section main pictures import
import tracers_logo from "../assets/images/hero/Tracers Logo.png";
import racine_mask from "../assets/images/hero/racine_mask.webp";

//? Gallery section portrait images import
import dorian_portrait from "/media/gallery/dorian.png";
import teezo_portrait from "/media/gallery/teezo.png";
import mattox_portrait from "/media/gallery/mattox.png";
import lilnas_portrait from "/media/gallery/lil_nas.png";
import others_portrait from "/media/gallery/others.png";
import paper_mag from "/media/gallery/paper_mag.png";

//? Carousel section Swiper styles import
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

//? About section required parallax images import
import parallax_leafs from "/media/about/parallax_leafs_cloud.png";
import parallax_arm_blue from "/media/about/parallax_arm_blue.png";
import parallax_park from "/media/about/parallax_park_cloud.png";
import xavier_cloud from "/media/about/xavier_cloud.png";
import arm from "/media/about/arm.png";
import black_person_cut from "/media/about/black_person_cut.png";

export const content = {
  hero: {
    className:
      "scroll-section items-center md:my-15 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 flex flex-col overflow-y-auto",
    title: {
      className:
        "font-allumi font-bold  uppercase mb-8 text-left text-2xl max-w-2xl w-full",
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
        className: "md:w-2xl md:pb-20",
      },
      content:
        "Its nomenclature and vision is representative of the work of leading artist Émile Lemay Racine, whose multidisciplinary background ranging from forward-thinking music production to an expertise in the field of industrial design along with a bold,instinctual, and yet result-oriented methodology, has laid the foundation  for the brand's continuous innovation in creating unique, playful and eco-conscious product.",
      className: "text-justify text-xs font-bold",
    },
  },
  gallery: {
    className:
      "scroll-section items-center md:my-20 my-10 p-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    title: {
      className:
        "font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full",
      content: "Gallery",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 md:pb-20",
      colspan10: {
        className: "col-span-10",
        container: {
          className: "grid grid-cols-2 md:grid-cols-3 gap-5 overflow-visible",
        },
      },
    },
    portraits: {
      className: "relative overflow-visible cursor-pointer",
      content: {
        className:
          "w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 hover:z-10",
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
        "font-allumi font-bold  uppercase mb-2 text-left text-2xl max-w-2xl w-full",
    },
    subtitle: {
      className: "text-left text-lg font-bold mb-4",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 gap-x-10 md:pb-20",
      colspan5: {
        className: "col-span-5 md:col-span-3",
      },
    },
    button: {
      className:
        "rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2  py-2 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer",
    },
    projects: {
      className: "grid grid-cols-3 md:grid-cols-2 gap-2 ",
      dataset: [
        {
          id: "dorian",
          title: "Dorian Electra",
          subtitle: "My Agenda",
          media: [
            {
              type: "video",
              url: "/media/dorian_electra/dorian_electra_my_agenda_2021.mp4",
            },
            {
              type: "image",
              url: "/media/dorian_electra/1.jpeg",
              title: "Dorian Electra",
            },
            {
              type: "image",
              url: "/media/dorian_electra/2.jpg",
              title: "Dorian Electra",
            },
            {
              type: "image",
              url: "/media/dorian_electra/3.jpg",
              title: "Dorian Electra",
            },
          ],
        },
        {
          id: "teezo",
          title: "Teezo",
          subtitle: "Custom Outfit",
          media: [
            {
              type: "video",
              url: "/media/teezo/teezo_coachela3.webm",
            },
            {
              type: "image",
              url: "/media/teezo/1.jpg",
              title: "Teezo",
            },
            {
              type: "image",
              url: "/media/teezo/2.jpg",
              title: "Teezo",
            },
            {
              type: "image",
              url: "/media/teezo/3.jpg",
              title: "Teezo",
            },
            {
              type: "image",
              url: "/media/teezo/4.jpg",
              title: "Teezo",
            },
          ],
        },
        {
          id: "mattox",
          title: "Mattox",
          subtitle: "Legal Night Out",
          media: [
            {
              type: "video",
              url: "/media/mattox/mattox_legalnight.webm",
            },
            {
              type: "image",
              url: "/media/mattox/1.jpg",
              title: "Mattox",
            },
            {
              type: "image",
              url: "/media/mattox/2.jpg",
              title: "Mattox",
            },
            {
              type: "image",
              url: "/media/mattox/3.jpg",
              title: "Mattox",
            },
            {
              type: "image",
              url: "/media/mattox/4.jpg",
              title: "Mattox",
            },
            {
              type: "image",
              url: "/media/mattox/5.jpg",
              title: "Mattox",
            },
            {
              type: "image",
              url: "/media/mattox/6.jpg",
              title: "Mattox",
            },
          ],
        },
        {
          id: "lilnas",
          title: "Lil NasX",
          subtitle: "Custom Design",
          media: [
            {
              type: "video",
              url: "/media/lil_nasx/lil_nasx_vitaminwater_2022.mp4",
            },
            { type: "image", url: "/media/lil_nasx/4.jpg", title: "Lil NasX" },
            { type: "image", url: "/media/lil_nasx/5.jpg", title: "Lil NasX" },
            { type: "image", url: "/media/lil_nasx/6.jpg", title: "Lil NasX" },
            { type: "image", url: "/media/lil_nasx/7.jpg", title: "Lil NasX" },
            { type: "image", url: "/media/lil_nasx/8.jpg", title: "Lil NasX" },
          ],
        },
        {
          id: "others",
          title: "Others",
          subtitle: "Custom Works",
          media: [
            {
              type: "video",
              url: "/media/others/babymonster.mp4",
            },
            {
              type: "image",
              url: "/media/others/badvilain_1.jpg",
              title: "Bad Villain",
            },
            {
              type: "image",
              url: "/media/others/badvilain_2.png",
              title: "Bad Villain",
            },
            {
              type: "image",
              url: "/media/others/jinco_1.jpg",
              title: "Jinco",
            },
            {
              type: "image",
              url: "/media/others/jinco_2.jpg",
              title: "Jinco",
            },
            {
              type: "image",
              url: "/media/others/jinco_3.jpg",
              title: "Jinco",
            },
            {
              type: "image",
              url: "/media/others/moonchild_1.jpg",
              title: "Moonchild",
            },
            {
              type: "image",
              url: "/media/others/moonchild_2.jpg",
              title: "Moonchild",
            },
            {
              type: "image",
              url: "/media/others/moonchild_3.jpg",
              title: "Moonchild",
            },
            {
              type: "image",
              url: "/media/others/xg_1.jpg",
              title: "XG",
            },
          ],
        },
        {
          id: "papermag",
          title: "Paper Mag",
          subtitle: "Interview",
          media: [
            {
              type: "image",
              url: "/media/paper_mag/1.jpg",
              title: "Dorian Electra",
            },
            {
              type: "image",
              url: "/media/paper_mag/2.jpg",
              title: "Gollum Prince",
            },
            {
              type: "image",
              url: "/media/paper_mag/3.jpg",
              title: "Lil Texas",
            },
            {
              type: "image",
              url: "/media/paper_mag/4.jpg",
              title: "Paolo Perfeccion",
            },
            {
              type: "image",
              url: "/media/paper_mag/5.jpg",
              title: "Dizzy Fae",
            },
          ],
        },
      ],
    },
    swiper: {
      className: "w-full h-[500px] md:h-[760px] overflow-hidden",
    },
    swiperSlide: {
      className: "flex items-center justify-center h-full",
      media: {
        className: "object-cover w-full h-full",
      },
    },
  },
  about: {
    className:
      "scroll-section items-center md:my-20 my-10 py-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    title: {
      className:
        "font-allumi font-bold  uppercase pl-10 text-left text-2xl max-w-2xl w-full",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 md:pb-10",
      colspan10: {
        className: "col-span-10 -space-y-5",
      },
    },
    parallaxData: [
      {
        bgImage: parallax_leafs,
        fgImage: xavier_cloud,
        fgSize: "w-48 md:w-64 lg:w-72",
        width: "w-72 md:w-96",
        text: "Émile Racine is a Montreal-based designer working at the intersection of industrial design, couture and art.",
        textPosition: "right",
        fgPosition: "center",
      },
      {
        bgImage: parallax_arm_blue,
        fgImage: arm,
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
        fgImage: black_person_cut,
        fgSize: "w-56 md:w-56 lg:w-56",
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
