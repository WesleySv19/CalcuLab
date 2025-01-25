import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import QuoteRotator from '../Quotes'

const Navbar = () => {
    
    return (
        <header>

            <div className="header_content">
                <h1>Seja bem vindo ao CalcuLab</h1>
               <QuoteRotator />
            </div>

            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/games'>
                            Games
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </header>
    )
};

export default Navbar;
