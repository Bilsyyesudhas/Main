import { FaBed, FaRegUser } from "react-icons/fa";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { SideNavList, SubSideNavList } from "../../style";
import { useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { AiOutlineUser,AiOutlineSetting,AiOutlinePlusSquare } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiUsers} from 'react-icons/fi'
import {GiGears} from 'react-icons/gi'
import {TbSquareArrowUp} from 'react-icons/tb'
import {BsFillPersonLinesFill } from 'react-icons/bs'
import {BsFillPersonBadgeFill  } from 'react-icons/bs'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<SideNavList>Admin</SideNavList>, "", <AiOutlineUser style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Catagory</SideNavList>, "catagory",<GiHamburgerMenu style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Service</SideNavList>, "service",<AiOutlineSetting style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Service Center</SideNavList>, "service_center",<GiGears style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Roles</SideNavList>, "roles",<FiUsers style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Service Requested</SideNavList>, "service_requested",<AiOutlinePlusSquare style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>AgroSmartRequested</SideNavList>, "agro",<TbSquareArrowUp style={{fontSize:'18px'}}/>),
  getItem(<SideNavList>Manage Users</SideNavList>, "users",<BsFillPersonLinesFill style={{fontSize:'20px'}}/>),
  getItem(<SideNavList>Manage Frontends</SideNavList>, "frontend",<BsFillPersonBadgeFill style={{fontSize:'20px'}}/>),
  // getItem(<SideNavList>Rooms</SideNavList>, 'sub1', <IoBedOutline />, [
  //   getItem(<SubSideNavList>Add Rooms</SubSideNavList>, 'add_rooms'),
  //   getItem(<SubSideNavList>Edit Rooms</SubSideNavList>, 'view_rooms'),
  // ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

const SideMenu = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    console.log(keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const navigate = useNavigate();
  const onClick = ({ key }) => {
    if (key === "") {
      setOpenKeys([]);
      navigate(`${key}/`);
    } else {
      navigate(`${key}/`);
    }
  };

  const expandIcon = ({ isOpen }) => {
    if (isOpen) {
      return <MdOutlineArrowDropUp style={{ fontSize: "24px" }} />;
    } else {
      return <MdOutlineArrowDropDown style={{ fontSize: "24px" }} />;
    }
  };

  return (
    <>
      <Menu
        onClick={onClick}
        expandIcon={expandIcon}
        defaultSelectedKeys={[""]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideMenu;
