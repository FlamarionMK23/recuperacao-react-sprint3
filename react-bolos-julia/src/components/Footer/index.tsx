import "./style.css";

import { Link } from "react-router-dom";

import imgWhats from "../../assets/img/whats 1.png";
import imgFace from "../../assets/img/face 1.png";
import imgInstagran from "../../assets/img/instag 1.png";


function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                {/* o sinal de {"#"} é porque a página não existe, por exemplo se houve se um Insta ou Face, colocaria o link para redirecionar */}
                <div>
                    <Link to={"#"}></Link> 
                    <img src={imgWhats} />
                    <Link to={"#"}></Link>
                    <img src={imgFace} />
                    <Link to={"#"}></Link>
                    <img src={imgInstagran} />
                </div>
            </div>
        </footer>
    );
}
export default Footer;