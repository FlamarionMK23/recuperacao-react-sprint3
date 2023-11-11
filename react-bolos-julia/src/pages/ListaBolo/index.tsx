//estilização
import "./style.css";

import CardBolo from "../../components/CardBolo";
import api from "../../utils/api";
import { useEffect, useState } from "react";

function ListaBolo() {
    // bolos = ver o valor que está armazenado
    // setBolos = atribui um novo valor
    // useState<any[]> = O tipo do valor que pode receber (bolos)
    // ([]) = é o valor inicial

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {
        api.get("bolos")
            .then((response) => {
                
                /* then é quando a api retorna um valor bem sucedido */

                setBolos(response.data);
                /* atualiza o valor da variável bolos pelo retorno da api */
                console.log(response.data)
            })
            .catch((error) => {
                /* catch é quando a api retorna um valor mau sucedido */
            })
    }

    useEffect(() => {
        // a lista de bolos será acionada quando o componente for acionado
        listarBolos();
    }, [
        /* monitorar */
    ])

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;