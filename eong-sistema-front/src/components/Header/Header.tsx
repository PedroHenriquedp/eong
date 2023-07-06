import { useState } from 'react';
// import { Link } from "react-router-dom";
import './Header.scss';
import logo from "/src/assets/images/jalemcancer.svg";

export default function Header() {

    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sideBar)


    return (
        <nav className="header">
            <picture>
                <img className="header-logo" src={logo} alt="Logo da entidade" />
            </picture>
            <i className="bi bi-list header-mobile-nav" onClick={showSideBar}></i>
            <ul className={sideBar ? "header-nav active" : "header-nav"}>
                <i className="bi bi-x-lg header-mobile-nav" onClick={showSideBar}></i>
                <li className='header-nav-button'>Home</li>
                <li className='header-nav-button'>Sobre</li>
                <li className='header-nav-button'>Doar</li>
                <li className='header-nav-button'>Contato</li>
                <i className="bi bi-person-circle"></i>
            </ul>
        </nav>
    );
}

