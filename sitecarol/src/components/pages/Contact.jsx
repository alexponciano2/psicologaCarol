import styles from './Contact.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Contact() {
  return (
    <section className={styles.contact}>
      <h1>Contato</h1>
      <br></br>
      <h2>Tel.: (27) 99800-6179</h2>
      <h2>Tel.: (21) 3763-2987 </h2>
      <ul className={styles.social}>
        <li>
        <a href="https://wa.me/5527998006179" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} color="#25D366" />
      </a>
        </li>
        <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={50} color="#1877F2" />
      </a>
        </li>
        <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} color="#E1306C" />
      </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;