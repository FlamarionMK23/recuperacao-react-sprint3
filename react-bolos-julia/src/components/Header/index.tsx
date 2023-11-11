//Estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom" //Utilizado para redirecinar ao inves de recarregar todas as vezes que alguem clicar no link

//images //2 pontos servem para procurar pastas, até chegar ao seu destino final
import imgLogo from "../../assets/img/logo 1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">
{/* <></> tag unitária */}
{/* altere a TAG A por Link to */}

                    <img src={imgLogo} alt="logo bolos julia" />
                    <nav>
                        <Link to={("/")}>Home</Link>
                        <Link to={("/CadastroBolo")}>Cadastrar</Link>
                        <Link to={("/ListaBolo")}>Bolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>
    );
}
export default Header; // Indica que o componente pode ser chamado em outra pasta//