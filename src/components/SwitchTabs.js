import React from 'react'
import { NavLink } from 'react-router-dom'

const SwitchTabs = () => {
    return (<>
        <div className='m-5'>
            <nav>
                <NavLink
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                    to="/"
                >
                    Resources
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                    to="/requests"
                >
                    Requests
                </NavLink>
                <NavLink
                    to="/users"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Users
                </NavLink>
            </nav>
        </div>
    </>)
}

export default SwitchTabs