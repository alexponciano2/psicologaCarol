import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Psicologia com <span>Carol Reis</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    </section>
  )
}

export default Home