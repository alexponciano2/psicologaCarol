import homecarol from '../../img/Carolina2.png'
import styles from '../pages/AboutMe.module.css'

function AboutMe() {
    return (
        <div className="container">
            <div className="image-side">
                <img src={homecarol} alt="carol" className={styles.imagem}></img>
            </div>
            <div className="gradient-side"></div>
        </div>
    )
}

export default AboutMe