import styles from './AboutMe.module.css'

function AboutMe() {
  return (
    <section className={styles.home_container}>
      <ul><h1>Carolina Reis</h1>
        <h2>Psicóloga | CRP: 06/198904</h2>
        <p>Prazer! Meu nome é Carolina, sou psicóloga clínica, formada pela USP e atuo pela Terapia Cognitivo-Comportamental. Desde que me formei, atuo como psicóloga clínica e me apaixonei por essa área. Durante o último ano da faculdade, quando fiz estágio em clínica, tive a oportunidade de conhecer mais a fundo a Terapia Cognitivo-Comportamental (TCC) e foi aí que eu decidi ajudar todas as pessoas.</p>
        <p>Meu grande objetivo na Psicologia é auxiliar meus pacientes a terem uma maior qualidade de vida e se sentirem acolhidos e seguros durante o processo.</p>
        <li className={styles.listatoda}>Graduada em Psicologia - PUCPR</li>
        <li className={styles.listatoda}>Especialista em TCC - IPTC</li>
        <li className={styles.listatoda}>Formação em TCC - FNLC</li>
        <li className={styles.listatoda}>Capacitação em Intervenções Assistidas por Animais - PUCPR</li>
        <li className={styles.listatoda}>Formação em Obesidade e Emagrecimento - FNLC</li>
      </ul>
    </section>
  )
}

export default AboutMe