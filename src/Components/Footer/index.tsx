import styles from './index.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.section_Content}>
                <p className={styles.paragraph}>Make with ❤️ for the PokéSpartans team Platzi Master</p>
                <p className={styles.paragraph_two}>Ours Team</p>
            </section>
        </footer>
    )
}