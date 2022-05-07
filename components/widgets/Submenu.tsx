import React, { FC, useState } from "react";
import Link from 'next/link';
import { SidebarItem } from "./models/SidebarItem";

type SidebarLinkProps = {
  item: SidebarItem;
};

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
        <li>
          <Link
            className="relative flex items-center rounded-xl py-1 text-white hover:bg-gray-600 rounded"
            href={item.path}
            onClick={showSubnav}
          >
            {item.icon}
            <span className="-mr-1 font-medium group-hover:text-orange-400">{item.title}</span>
          </Link>
        </li>
      {subnav &&
        item?.subnav?.map((subnavItem, index) => {
          return (
            <Link href={subnavItem.path} key={index}>
              {subnavItem.icon}
              <li>{subnavItem.title}</li>
            </Link>
          );
        })}
    </>
  );
};

export default Submenu;
