import styles from './index.module.css'
import banner from '../../assets/banner.png'

export const Home = () => {
    return (
        <section className={styles.Section_Home}>
            <article className={styles.article_Content}>
                <h1 className={styles.title}><strong>Find</strong> all your 
                    favorite <strong>Pokemon</strong></h1>
                <h2 className={styles.title_two}>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
                <button className={styles.button}>See pokemons</button>
            </article>
            <img className={styles.img} src={banner} alt="imagem completa do pikachu" />
        </section>
    )
}