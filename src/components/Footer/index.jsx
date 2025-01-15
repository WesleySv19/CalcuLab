import styles from './Footer.module.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.developCopy}>
                <p>&copy; 2025 - Desenvolvido por Wesley da Silva</p>
            </div>

            <div className={styles.social}>
                <ul>
                    <li>
                        <a href=""><FaLinkedin title='LinkedIn' className={styles.icon} /></a>
                    </li>

                    <li>
                        <a href=""><FaGithub title='Github' className={styles.icon} /></a>
                    </li>

                    <li>
                        <a href=""><GrDocumentUser title='Portfólio' className={styles.icon} /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;
