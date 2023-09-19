import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Popover, Row, Tooltip } from 'antd'
import { LogoName, ToggleBtn, HeaderIconHolder, BtnSideHolder } from '../../style'
import React from 'react'
import { THEME } from '../../../theme'
import { MdMessage, MdNotificationsActive } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import Flex from '../../../Components/Flex'
import { LogOutSuccess } from '../../../Modules/Auth/actions'
import Button from '../../../Components/Form/Button'
import { useState } from 'react'
import { useMemo } from 'react'
import { FaUserCircle, FaUserTie } from 'react-icons/fa'
import { useNavigate } from "react-router-dom/dist";
import {AiOutlineUserDelete} from "react-icons/ai"
const NavHeader = ({ collapse, setCollapse }) => {
  const collapsed = collapse
  const setCollapsed = setCollapse
  const navigate = useNavigate();
  const [arrow, setArrow] = useState('Show');

  const dispatch = useDispatch()

  const handleLogout = () => {
    // dispatch(LogOutSuccess())
    navigate("/login");
  
  };
  const handleProfile = () => {
    // dispatch(LogOutSuccess())
    navigate("/profile");
  
  };

  const text = <span><Flex spcPading centerVertically>
     <Button onClick={handleProfile}>
    <FaUserCircle />&nbsp;View Profile</Button></Flex>
    <Flex spcPading center>
      <Button onClick={handleLogout}>
      <AiOutlineUserDelete/>&nbsp; Logout</Button>
    </Flex>
  </span>;

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);


  return (

    <Row style={{ alignItems: 'center',justifyContent: 'space-between' , background: `#3EFF2D`, height: '100%', padding: '0 10px' }}>

      <div>
        <Row style={{ alignItems: 'center' }}>
          {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })} */}

          <ToggleBtn onClick={() => setCollapsed(!collapsed)}>
            {
              collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          </ToggleBtn>

        </Row>
      </div>
      <LogoName>Cape Clouds</LogoName>

      <HeaderIconHolder>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <FaUserTie className='header__icon' />
        </Tooltip>

      </HeaderIconHolder>

    </Row>


  )
}

export default NavHeader
