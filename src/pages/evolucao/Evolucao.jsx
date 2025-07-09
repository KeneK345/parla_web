import Header from "../../components/header/Header";
import grafico from "../../assets/grafico.jpeg";
import pessoa from "../../assets/pessoa.jpeg";
import styles from './Evolucao.module.css';

const Evolucao = () => {
    return (
        <>
            <Header />
            <div className={styles.analise}>
                <h1>MINHA ANÁLISE</h1>
                <div className={styles.conteudoAnalise}>
                    <div className={styles.graficoBox}>
                        <div className={styles.indicadores}>
                            <p>Tempo no site: <span className={styles.bolinha}></span></p>
                            <p>Total de erros: <span className={styles.bolinha}></span></p>
                            <p>Nº Atividades: <span className={styles.bolinha}></span></p>
                        </div>
                        <img src={grafico} alt="Gráfico de evolução" />
                    </div>

                    <div className={styles.perfilBox}>
                        <img src={pessoa} alt="Pessoa" className={styles.foto} />
                        <button>imprimir boletim</button>
                        <button>verificar atividades</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Evolucao;