import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd'

const Header = () => {
    const [current, setCurrent] = useState( 'registration')

   const handleClick = e => {
       setCurrent( e.key )
    }

        return (
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal"
            style={{
                borderRadius: '6px', textAlign: 'center', width: '500px', margin: '0 auto'
            }}
            >
                <Menu.Item key="main" >
                    <Link to="/main">Main</Link>
                </Menu.Item>
                <Menu.Item key="my-requests" >
                    <Link to="/my-requests">My requests</Link>
                </Menu.Item>
                <Menu.Item key="login" >
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="registration"  >
                    <Link to="/registration">Registration</Link>
                </Menu.Item>
            </Menu>
        )

}
export default Header