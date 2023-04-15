import { useContext } from "react";
import { Busqueda } from "../context/Busqueda";


const Noticas = ({ noticias }) => {
    
    const {busqueda, buscado} = useContext(Busqueda);

    return ( 
        <div className="noticias col-12 col-lg-7">

            <p className="feed-titulo">
                Feed de Noticias {busqueda && `: ${buscado}`}
            </p>

            { noticias.map((noticia, index)=>(
                <div className="cuerpo" key={index}>
                    <div className="title">
                        <h2>
                            {noticia.name}
                        </h2>
                    </div>
                    <div className="fecha">
                        <p>
                            {noticia.datePublished.substring(0,10)}
                        </p>
                    </div>
                    <hr/>
                    <div>
                        { noticia.image?.thumbnail?.contentUrl &&
                            <>
                                <img src={noticia.image.thumbnail.contentUrl} className="img-fluid" />
                                <hr/>
                            </>
                        }
                    </div>
                    <div className="informacion">
                        <p>
                            {noticia.description}
                        </p>
                    </div>
                </div>
            ))
            }

        </div>
    );
}

export default Noticas;