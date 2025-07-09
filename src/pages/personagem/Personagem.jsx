import Header from "../../src/components/header/Header";
import vestido from "./assets/vestido.jpeg";
import Option from "../../components/option/Option";
import styles from './Personagem.module.css';

const Personagem = () => {
  return (
    <>
      <Header />
      <div className={styles.personalizacao}>
        <div className={styles.roupas}>
          <h1>Roupas</h1>
          <Option num={1} />
          <Option num={2} />
          <Option num={3} />
          <Option num={4} />
          <Option num={5} />
          <Option num={6} />
          <Option num={7} />
          <Option num={8} />
          <Option num={9} />
        </div>
      </div>

      <img src={vestido} alt="vestido" />

      <div className={styles.opcoes}>
        <Option num={76} id="76" />
        <Option num={77} id="77" />
        <Option num={78} id="78" />
        <Option num={79} id="79" />
        <Option num={80} id="80" />
        <Option num={81} id="81" />
        <Option num={82} id="82" />
        <Option num={83} id="83" />
        <Option num={84} id="84" />        <Option num={85} id="85" />
        <Option num={86} id="86" />
        <Option num={87} id="87" />
        <Option num={88} id="88" />
      </div>
    </>
  );
};

export default Personagem;
