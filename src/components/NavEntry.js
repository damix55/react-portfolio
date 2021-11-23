import React from 'react'
import { Link } from 'react-router-dom'

const NavEntry = (props) => {

    function updateCurrentPage() {
        props.handle(`${ props.title }.${ props.extension }`)
    }

    return (
        <Link onClick={updateCurrentPage} to={`/${ props.title }.${ props.extension }`}>
            <li className={(props.currentPage===props.title ? 'selected' : '')}>
                <span className={`icon ${ props.iconColor }`}>{ props.icon }</span> <span>{ props.title }</span>
                <span className="extension">.{ props.extension }</span>
            </li>
        </Link>
    )
}

export default NavEntry