import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

const NavEntry = (props) => {
    return (
        <Link to={`/${ props.title }.${ props.extension }`} onClick={props.scrollOnTop}>
            <li className={(props.currentPage===props.title ? 'selected' : '')}>
                <Icon hex={props.icon} color={props.iconColor} /> <span>{ props.title }</span>
                <span className="extension">.{ props.extension }</span>
            </li>
        </Link>
    )
}

export default NavEntry