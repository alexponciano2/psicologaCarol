import homecarol from '../../img/Carolina6.png';
import React from 'react';
import Container from '../layout/Container';
import styles from '../layout/Container.module.css';

function AboutMe() {
  return (
    <Container customClass="start">
      <div className={styles.textinho}>
        Atendimento 100% on-line (ou presencial na Tijuca/RJ)
        Uma escuta acolhedora, atenta, interessada e cuidadosa
        Um espaço seguro e livre de julgamentos
        Abordagem fenomenológico-existencial
        Adolescentes, adultos e idosos
      </div>
      <img src={homecarol} alt="Imagem" className={styles['full-width-image']} />
    </Container>
  );
}

export default AboutMe;
