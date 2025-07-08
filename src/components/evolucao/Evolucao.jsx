import Header from "../header/Header";
import grafico from "../../assets/grafico.jpeg";
import pessoa from "../../assets/pessoa.jpeg";
import './Evolucao.css';

const Evolucao = () => {
    return (
        <>
            <Header />
            <div className="analise">
                <h1>MINHA ANÁLISE</h1>
                <div className="conteudo-analise">
                    <div className="grafico-box">
                        <div className="indicadores">
                            <p>Tempo no site: <span className="bolinha"></span></p>
                            <p>Total de erros: <span className="bolinha"></span></p>
                            <p>Nº Atividades: <span className="bolinha"></span></p>
                        </div>
                        <img src={grafico} alt="Gráfico de evolução" />
                    </div>

                    <div className="perfil-box">
                        <img src={pessoa} alt="Pessoa" className="foto" />
                        <button>imprimir boletim</button>
                        <button>verificar atividades</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Evolucao;