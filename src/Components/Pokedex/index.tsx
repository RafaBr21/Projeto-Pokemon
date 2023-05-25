import styles from './index.module.css'

export const Pokedex = () => {
    return (
        <section className={styles.section}>
            <article>
                <h1 className={styles.title}>800 Pokemon for you favorite</h1>
            </article>
            <input className={styles.input} type="text" placeholder="Encuentra tu pokémon..."/>
        </section>
    )
}