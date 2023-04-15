import { useContext } from "react";
import { Busqueda } from "../context/Busqueda";

import { BusquedaNoticias } from "../API/NoticiasAPI";

const Filtro = ({ actualizaBusqueda, datosNoticias }) => {

    const { busqueda, setBusqueda, setBuscado } = useContext(Busqueda);

    const realizaBusqueda = async (e) => {
        const buscando = e.target.innerText;
        setBusqueda(true);
        setBuscado(buscando);

        const noticiasBusqueda = await BusquedaNoticias(buscando);
        actualizaBusqueda(noticiasBusqueda);
    }

    const Inicio = () => {
        datosNoticias();
        setBusqueda(false);
    }

    return (
        <div className="filtro col-12 col-lg-3">
            <div className="cuerpo">
                <div className="title">
                    <p>
                        Filtro 
                        <i className="bi bi-funnel"></i>
                    </p>
                </div>
                <hr/>
                <div className="btn-filtro">

                    { busqueda &&
                        <button onClick={Inicio}>
                            <i className="bi bi-house"></i>
                            Inicio
                        </button>
                    }

                    <button onClick={realizaBusqueda}>
                        <i className="bi bi-caret-right"></i>
                        Mundo de la economía digital
                    </button>
                    <button onClick={realizaBusqueda}>
                        <i className="bi bi-caret-right"></i>
                        Entretenimiento
                    </button>
                    <button onClick={realizaBusqueda}>
                        <i className="bi bi-caret-right"></i>
                        Negocios
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Filtro;