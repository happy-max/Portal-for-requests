import React from 'react'
import {Link} from 'react-router-dom'


const Header = ({isLoggedIn, setIsLoggedIn}) => {

    return (
        <div className='menu'>
                <Link to="/">Main</Link>
                <Link to="/my-requests">My requests</Link>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
            {
                isLoggedIn
                    ? <Link onClick={()=>setIsLoggedIn(null)} to="/login">Exit</Link>
                    : <Link  to="/login" disabled>Exit</Link>
                }

        </div>
    )

}
export default Header