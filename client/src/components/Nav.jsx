

const Nav = ({closeMenu}) => {
    return (
        <nav>
            <ul className="section-nav">
                <li><a onClick={closeMenu} href="#news">News</a></li>
                <li><a onClick={closeMenu} href="#ratings">Ratings</a></li>
                <li><a onClick={closeMenu} href="#twitch">Twitch</a></li>
                <li><a onClick={closeMenu} href="#youtube">Youtube</a></li>
            </ul>
        </nav>
    )
}

export default Nav
