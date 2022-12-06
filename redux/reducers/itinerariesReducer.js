const initialState ={ //
    itineraries:[]
} // es un obj con propiedades
// actions solictitamos respues a la api
// reducers los traemos del store
//dentro def que tipo de accion definimos, 
//acation de filtrado escucha el input, almacena datos en el store segun lo que pasa en el evento de cuando escribimos
// el reducer es el filtro funcionando, creamos reducer para actualizar los estados del store
// accion es el pasamano entre la api y el reducer 
//a travez del store 
const itinerariesReducer =  (state = initialState, action) => { // action,payload type que accion vamos a hacer
    // state es el estado inicial
    switch (action.type){ // es un condicional 
        case "GET_ITINERARIES_FROM_CITY": // actualizado
        // es la carga
            return{ // es un objeto
                ...state, // es la ultima actualizacion estado, los ... es lo que contiene. 
                itineraries: action.payload // lo modifico con lo que tienee el action en itineraries
            }
            default:
                return state
    }// actualiza el estado el reducer 
}

export default itinerariesReducer