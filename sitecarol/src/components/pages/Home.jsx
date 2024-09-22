import React from 'react';
import Container from '../layout/Container';
import styles from '../pages/Home.module.css';

function Home() {
  return (
    <Container customClass="start">      
      <div className={styles['background-image']}></div> {/* Aplicando a classe via CSS Modules */}
    </Container>
  );
}

export default Home;
