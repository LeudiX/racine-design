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
        className: "md:w-2xl md:pb-20",
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
      className: "grid grid-cols-1 md:grid-cols-12 md:pb-20",
      colspan10: {
        className: "col-span-12",
        container: {
          className:
            "grid sm:grid-cols-1 justify-center mx-auto gap-3 md:grid-cols-3",
        },
      },
    },
    portraits: {
      className: "relative overflow-visible cursor-pointer",
      content: {
        className:
          "w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-120 hover:z-10",
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
        "font-inter font-bold scale-y-90 tracking-wide lowercase text-left -mb-4 md:text-xl max-w-2xl w-full ",
    },
    subtitle: {
      className: "text-left font-inter md:text-sm lowercase mb-4",
    },
    gridLayout: {
      className: "grid grid-cols-1 md:grid-cols-12 gap-x-10 pb-20",
      colspan6: {
        className: "col-span-6 md:col-span-3",
      },
    },
    button: {
      className:
        "rounded-full font-[kanit] md:text-sm scale-y-90 tracking-tight leading-none bg-transparent border border-gray-600 hover:border-transparent md:px-2.5 py-0.5  lowercase transition-colors cursor-pointer",
    },
    projects: {
      className: "grid grid-cols-3 md:grid-cols-2 md:gap-1 mb-2",
      dataset: [
        {
          id: "lilnas",
          title: "Lil Nas X",
          subtitle: "Eric Andre Show",
          media: [
            {
              type: "video",
              url: "media/lil_nasx/lilnasx_ericandre.mp4",
            },
            {
              type: "image",
              url: "/media/lil_nasx/lil_nas_updated/1.jpg",
              title: "Lil Nas X",
            },
            {
              type: "image",
              url: "/media/lil_nasx/lil_nas_updated/2.jpg",
              title: "Lil Nas X",
            },
            {
              type: "image",
              url: "/media/lil_nasx/lil_nas_updated/3.jpg",
              title: "Lil Nas X",
            },
          ],
        },
        {
          id: "lilnas2",
          title: "Lil Nas X",
          subtitle: "Vitamin Water Ad",
          media: [
            { type: "image", url: "/media/lil_nasx/1.jpg", title: "Lil Nas X" },
            { type: "image", url: "/media/lil_nasx/2.jpg", title: "Lil Nas X" },
            { type: "image", url: "/media/lil_nasx/3.jpg", title: "Lil Nas X" },
          ],
        },
        {
          id: "teezo",
          title: "Teezo",
          subtitle: "Apple Music Ad",
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
          id: "dorian",
          title: "Dorian Electra",
          subtitle: "My Agenda Tour",
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
          id: "mattox",
          title: "Mattox",
          subtitle: "Montreality",
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
          id: "papermag",
          title: "Paper Mag",
          subtitle: "Interview",
          media: [
            {
              type: "image",
              url: "/media/paper_mag/2.jpg",
              title: "Princess Gollum",
            },
            {
              type: "image",
              url: "/media/paper_mag/3.jpg",
              title: "Lil Texas",
            },
            {
              type: "image",
              url: "/media/paper_mag/1.jpg",
              title: "Dorian Electra",
            },
            {
              type: "image",
              url: "/media/paper_mag/5.jpg",
              title: "Dizzy Fae",
            },
            {
              type: "image",
              url: "/media/paper_mag/4.jpg",
              title: "Paolo Perfeccion",
            },
          ],
        },
        {
          id: "others",
          title: "Others +",
          subtitle: "Full Costume Design 2024",
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
            {
              type: "image",
              url: "/media/others/xg_2.jpg",
              title: "XG",
            },
          ],
        },
      ],
    },
    swiper: {
      className: "w-full h-[480px] md:h-[720px] overflow-hidden",
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
      "scroll-section items-center md:my-20 my-10 py-10 snap-always w-screen h-screen flex-shrink-0 overflow-y-auto",
    title: {
      className:
        "font-inter font-semibold lowercase pl-10 text-left text-2xl max-w-2xl w-full",
    },
    gridLayout: {
      className: "md:pb-10",
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
        fgImage: black_person_cut,
        p: "py-60",
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
