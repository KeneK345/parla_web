import logo from '../../assets/logo.jpeg';
import headerf from '../../assets/header_fundo.jpeg';
import styles from './Header.module.css';

const Header = () => {
 return (
  <header className={styles.header}>
   <div className={styles.headerContent}>
    <img src={logo} alt="Logo Parlinha" className={styles.logo} />

  <nav className={styles.menu}>
     <a href="/">Início</a>
     <a href="/atividades">Atividades</a>
     <a href="/evolucao">Evolução</a>
     <a href="/contato">Entre Em Contato</a>
     <a href="/" className={styles.personagemBtn}>PERSONAGEM</a>
    </nav>
   </div>

      <img src={headerf} alt="fundo decorativo" className={styles.headerBg} />
    </header>
  );
};

export default Header;
