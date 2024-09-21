import React from 'react';
import Container from '../layout/Container';
import styles from '../pages/AboutMe.module.css';

function AboutMe() {
  return (
    <Container customClass="start">      
      <div className={styles['background-image']}></div> {/* Aplicando a classe via CSS Modules */}
    </Container>
  );
}

export default AboutMe;
