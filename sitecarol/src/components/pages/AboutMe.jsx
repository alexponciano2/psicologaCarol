import homecarol from '../../img/Carolina2.png'
import styles from '../pages/AboutMe.module.css'

function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.imageside}>
                <img src={homecarol} alt="carol" className={styles.imagem}></img>
                <div class={styles.overlaygradient}></div>
            </div>
            <div className={styles.gradientside}></div>
        </div>
    )
}

export default AboutMe