const initialState ={
    cities: [],
    oneCity: {},
    filterCity:[]
}
// los metodos son funciones en forma de objeto type y payload tiene como 2 parametros
// el reductor es que mas controle el estado, llamamos a la accion y a travez de lo que le decimos va a modifar el reductor
// y una accion devuelve un estado nuevo segun la accion que recibe algo y lo devuelve
// desde el reducer enviamos al store actualizado y el useSelector lo pedis , lo que lo va a cambiar es el reducer
//el reducer manda el stado initial al estado cargado al store 
// con un condicional en que caso la opcion type va a cambiar el estado
const citiesReducer = (state = initialState, action) =>{
// la accion es cuando lo activamosm con el useSelect 
// reducer toma los datos del store si yo hice el getOnecity y le pedi por accion la respuesta de la api
// carga el estado de la city
// dispatch activamos la accion
// citiesReducer 
    switch(action.type){ //establece la condicion para cada clase 
        case "GET_CITIES":
            return{
                ...state,
                cities: action.payload,
                filterCity: action.payload
          
            }
            case "GET_ONE_CITY":
                return{
                    ...state,
                    oneCity: action.payload,
                }
            
            case "FILTER_CITIES":
                let filterInput = state.cities.filter(city => city.cities.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
                return{
                    ...state,
                    filterCity: filterInput
                }
            default:
                return state
}

}
export default citiesReducer