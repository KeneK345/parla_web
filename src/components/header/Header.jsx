import logo from '../../assets/logo.jpeg';
import headerf from '../../assets/header_fundo.jpeg';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo Parlinha" className="logo" />

        <nav className="menu">
          <a href="/">Início</a>
          <a href="/atividades">Atividades</a>
          <a href="/evolucao">Evolução</a>
          <a href="/contato">Entre Em Contato</a>
          <a href="/" className="personagem-btn">PERSONAGEM</a>
        </nav>
      </div>

      <img src={headerf} alt="fundo decorativo" className="header-bg" />
    </header>
  );
};

export default Header;