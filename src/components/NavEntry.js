import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

function scrollOnTop() {
    var main = document.getElementById('main')
    var mainContent = document.getElementsByClassName('main-content')[0]
    var height = mainContent.scrollHeight

    mainContent.style.height = height + 'px'
    
    main.scroll({top: 0, left: 0, behavior: 'smooth'})
}

const NavEntry = (props) => {
    return (
        <Link to={`/${ props.title }.${ props.extension }`} onClick={scrollOnTop}>
            <li className={(props.currentPage===props.title ? 'selected' : '')}>
                <Icon hex={props.icon} color={props.iconColor} /> <span>{ props.title }</span>
                <span className="extension">.{ props.extension }</span>
            </li>
        </Link>
    )
}

export default NavEntry