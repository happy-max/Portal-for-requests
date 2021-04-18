import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Menu} from 'antd'

const Header = ({isLoggedIn}) => {

    return (
        <div className='menu'>
                <Link to="/main">Main</Link>
                <Link to="/my-requests">My requests</Link>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
            {
                isLoggedIn
                    ? <Link to="/login">Exit</Link>
                    : <Link disabled>Exit</Link>
                }

        </div>
    )

}
export default Header