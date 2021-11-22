import React from 'react'
import { Link } from 'react-router-dom'
import { IconName } from "react-icons/md";

const NavEntry = (props) => {
    return (
        <Link to={`/${ props.title }.${ props.extension }`}>
            <li className={(props.currentPage===props.title ? 'selected' : '')}>
                <span className={`icon ${ props.iconColor }`}>{ props.icon }</span> <span>{ props.title }</span>
                <span className="extension">.{ props.extension }</span>
            </li>
        </Link>
    )
}

export default NavEntry