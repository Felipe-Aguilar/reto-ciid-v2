import React, { useState } from "react";

const Busqueda = React.createContext();

const Provider = ({ children }) => {

    const [busqueda, setBusqueda] = useState();
    const [buscado, setBuscado] = useState();

    return ( 
        <Busqueda.Provider value={{busqueda, setBusqueda, buscado, setBuscado}}>
            {children}
        </Busqueda.Provider>
    );
}

export {Busqueda, Provider}