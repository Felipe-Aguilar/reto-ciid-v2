import Filtro from "./Filtro";
import Noticas from "./Noticias";

const VistaNoticias = () => {
    return ( 
            <div className="news">
                <div className="row justify-content-center">
                    <Filtro />
                    <Noticas />
                </div>
            </div>
    );
}

export default VistaNoticias;