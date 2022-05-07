import Link from "next/link";
import React, { useState } from "react";
import ContactCard from "./ContactCard";
import PhotoSvg from "./SvgComponents/PhotoSvg";
import SocialMedia from "./SocialMedia";
import SVGComponent from "./SvgComponents/SvgComponent";
import VideoSvg from "./SvgComponents/VideoSvg";
import ModelSvg from "./SvgComponents/ModelSvg";
import StagSvg from "./SvgComponents/StagSvg";
import SalesSvg from "./SvgComponents/SalesDeckSvg";
import PlanSvg from "./SvgComponents/PlanSvg";
import EventSvg from "./SvgComponents/EventSvg";
import InstagramSvg from "./SvgComponents/InstagramSvg";
import LocationSvg from "./SvgComponents/LocationSvg";
import WebsiteSvg from "./SvgComponents/WebsiteSvg";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 mb-3 mt-3 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-zinc-800 rounded-xl transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="px-6 mt-3 py-1">
            <Link href="/">
              <a href="#" title="home">
                <img
                  src="http://app.one-viewer.com/media/place_img/wi_logo_L.png"
                  className="w-32"
                  alt="tailus logo"
                />
              </a>
            </Link>
          </div>

          <ul className="space-y-2 tracking-wide mt-1">
            <li>
              <Link href="/">
                <a
                  aria-label="Virtual tour"
                  className="relative flex items-center rounded-xl  p-1 text-white hover:bg-gray-600 "
                >
                  <SVGComponent className="-ml-1 h-6 w-6 mr-2" />
                  <span className="-mr-1 font-medium group-hover:text-orange-400">
                    VIRTUAL TOUR
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded"
              >
                <PhotoSvg className="-ml-1 h-6 w-6 mr-2" />
                <span className="group-hover:text-gray-700">PHOTO GALLERY</span>
              </a>
            </li>
            <li>
              <Link href="/video-gallery">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 ">
                  <VideoSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-orange-400">VIDEO GALLERY</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/modeling">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded">
                  <ModelSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">3D MODELLING</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/stagging-options">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded">
                  <StagSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">STAGING OPTIONS</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/floor-plans">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded">
                  <PlanSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">FLOOR PLANS</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sales-deck">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded">
                  <SalesSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">SALES DECK</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/event-enquiry">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded">
                  <EventSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">EVENT ENQUIRY</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/instagram">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 ">
                  <InstagramSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">INSTAGRAM</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/map-directions">
                <a className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600">
                  <LocationSvg className="-ml-1 h-6 w-6 mr-2" />
                  <span className="group-hover:text-gray-700">MAP/DIRECTIONS</span>
                </a>
              </Link>
            </li>
            <li>
              <a
                onClick={() =>
                  window.open(
                    "https://www.marriott.com/en-us/hotels/msywi-the-westin-new-orleans/overview/ "
                  )
                }
                className=" flex items-center rounded-xl p-1 text-white hover:bg-gray-600 rounded cursor-pointer"
              >
                <WebsiteSvg className="-ml-1 h-6 w-6 mr-2" />
                <span className="group-hover:text-gray-700">WEBSITE</span>
              </a>
            </li>
            <li>
              <ContactCard />
            </li>
            <li>
              <SocialMedia />
            </li>
            <li>
              <a
              onClick={() =>
                window.open(
                  "https://one-viewer.com/ "
                )
              }
              className=" flex items-center p-1 mt-3 cursor-pointer">
                <img src="http://app.one-viewer.com/media/one-viewer-logo-BLUE-WHITE-v1.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        {/* {<div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>} */}
      </aside>
    </div>
  );
};

export default SideBar;
