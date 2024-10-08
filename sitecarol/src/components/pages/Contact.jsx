import styles from './Contact.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Contato</h1>
      <br></br>
      <h2>Tel.: (11) 95680-0830</h2>
      <h2>Tel.: (11) 3065-9494 </h2>
      <ul className={styles.social}>
        <li>
        <a href="https://wa.me/5511956800830" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} color="#25D366" />
      </a>
        </li>
        <li>
        <a href="https://www.facebook.com/carolinareisf" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={50} color="#1877F2" />
      </a>
        </li>
        <li>
        <a href="https://www.instagram.com/boannscathach/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} color="#E1306C" />
      </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;