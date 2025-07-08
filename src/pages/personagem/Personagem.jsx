import Header from "../../src/components/header/Header";
import vestido from "./assets/vestido.jpeg";
import './Personagem.css'
const Personagem = () => {
    return (
        <>
            <Header/>
            <div id="personalizacao">
            <div id="roupas">
                <h1>Roupas</h1>
                <button>opções 1</button>
                <button>opções 2</button>
                <button>opções 3</button>
                <button>opções 4</button>
                <button>opções 5</button>
                <button>opções 6</button>
                <button>opções 7</button>
                <button>opções 8</button>
                <button>opções 9</button>
            </div>
            
            
            </div>
            <img src={vestido} alt="vestido"></img>
            <div id="opcoes">
                <button id="76">opções 76</button>
                <button id="77">opções 77</button>
                <button id="78">opções 78</button>
                <button id="79">opções 79</button>
                <button id="80">opções 80</button>
                <button id="81">opções 81</button>
                <button id="82">opções 82</button>
                <button id="83">opções 83</button>
                <button id="84">opções 84</button>
                <button id="85">opções 85</button>
                <button id="86">opções 86</button>
                <button id="87">opções 87</button>
                <button id="88">opções 88</button>
            </div>
        </>
    )
}; export default Personagem;