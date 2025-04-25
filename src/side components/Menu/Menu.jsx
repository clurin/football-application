import { Link } from 'react-router-dom'
import styles from './MenuStyle.module.css'

const Menu = () => {
    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.mainMenu}>
                <li><Link to="/">MATCHES</Link></li>
                <li><Link to="/teams/39">TEAMS</Link></li>
                {/* <li><Link to="/leagues/england">LEAGUES</Link></li> */}
                {/* <li><Link to="/countries">COUNTRIES</Link></li> */}
            </ul>
        </nav>
    )
}

export default Menu
