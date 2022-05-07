import virtual_tour from "../../public/assets/360-view-virtual-reality-svgrepo-com.svg";
import photo_gallery from "../../public/assets/photo-camera-svgrepo-com.svg";
import { SidebarItem } from "./models/SidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    icon: { virtual_tour },
    title: "VIRTUAL TOUR",
    path: "/",
  },
  {
    icon: { photo_gallery },
    title: "PHOTO GALLERY",
    path: "/photo-gallery",

    subnav: [
      {
        title: "EVENT AREAS",
        path: "/photo-gallery/eventareas",
        icon: "",
      },
      {
        title: "GUEST ROOMS",
        path: "/photo-gallery/guestrooms",
        icon: "",
      },
      {
        title: "HOTEL VIEWS",
        path: "/photogallery/hotelrooms",
        icon: "",
      },
    ],
  },
  {
    icon: { virtual_tour },
    title: "VIDEO GALLERY",
    path: "/video-gallery",

    subnav: [
      {
        title: "OVERVIEW",
        path: "/video-gallery/overview",
        icon: "",
      },
      {
        title: "WEDDINGS",
        path: "/video-gallery/weddings",
        icon: "",
      },
      {
        title: "THINGS TO DO",
        path: "/video-gallery/thingstodo",
        icon: "",
      },
    ],
  },
  {
    icon: "",
    title: "3D MODELLING",
    path: "/modeling",
  },
  {
    icon: "",
    title: "STAGING OPTIONS",
    path: "/staging-options",
  },
  {
    icon: "",
    title: "FLOOR PLANS",
    path: "/floor-plans",
  },
  {
    icon: "",
    title: "SELLS DECK",
    path: "/sells-deck",
  },
  {
    icon: "",
    title: "EVENT ENQUIRY",
    path: "/event-enquiry",
  },
  {
    icon: "",
    title: "INSTAGRAM",
    path: "/instagram",
  },
  {
    icon: "",
    title: "MAP/DIRECTIONS",
    path: "/map-directions",
  },
  {
    icon: "",
    title: "WEBSITE",
    path: "the url",
  },
];
