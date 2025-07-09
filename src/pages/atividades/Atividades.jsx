import Header from "../../src/components/header/Header";
import styles from './Atividades.module.css';

const Atividades = () => {
    return (
        <>
            <Header />
            <div>
                <div className={styles.gravacao}>
                    <img src="../assets/a" alt="imagem a" />
                    <img src="../assets/gravacao" alt="imagem gravacao" />
                    <button>Gravar</button>
                    <div>
                        <button className={styles.start}>Iniciar Gravação</button>
                        <button className={styles.stop}>Parar Gravação</button>
                        <audio id="audio" controls></audio>
                    </div>
                </div>
                <img src="../assets/parlinha.jpeg" alt="parlinha" />
                <button>Click</button>
            </div>
        </>
    );
};

export default Atividades;