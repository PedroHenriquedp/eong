import './Header.scss'

export default function Header() {
    return (
        <nav className="header">
            <picture>
                <img className="header-logo" src="/src/assets/images/jalemcancer.svg" alt="Logo da entidade" />
            </picture>
            <ul className='header-nav'>
                <li>Home</li>
                <li>Sobre</li>
                <li>Doar</li>
                <li>Contato</li>
                <i className="bi bi-person-circle"></i>
            </ul>
        </nav>
    )
}