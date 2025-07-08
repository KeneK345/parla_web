import Header from "../../src/components/header/Header"
import './Atividades.css'
const Atividades = () => {
    return (
        <>
        <Header></Header>
        <div>
        <div id="gravacao">
            <img src=".../assets/a"></img>
            <img src=".../assets/gravacao"></img>
            <button>Gravar</button>
            <div>
                <button id="start">Iniciar Gravação</button>
                <button id="stop">Parar Gravação</button>
                <audio id="audio" controls></audio>
            </div>
        </div>
        <img src=".../assets/parlinha.jpeg"></img>
        <button>Click</button>
        </div>
        </>
    )
}; export default Atividades;