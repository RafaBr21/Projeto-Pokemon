import Logo from '../../assets/Logo.svg'
import styles from './index.module.css'

export const Header = () => {
    return (
        <header className={styles.Section_Header}>
            <nav className={styles.Nav}>
                <img className={styles.img} src={Logo} alt="Imagem da logo Principal" />
                <article className={styles.content_Nav}>
                    <a className={styles.Nav_item} href="#">Home</a>
                    <a href="#">Pokédex</a>
                    <a href="#">Legendaries</a>
                    <a href="#">Documentation</a>
                </article>
            </nav>
        </header>
    )
}