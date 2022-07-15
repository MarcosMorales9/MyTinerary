import axios from "axios";
// una accion son funciones en forma de objeto
//despachamos lo que necesitamos hacer como el filter

const citiesActions = {

    getCities: ()=>{
        return async(dispatch,getState) =>{
            const res = await axios.get("https://mitinerary-morales.herokuapp.com/api/cities")
            dispatch({type:"GET_CITIES",payload:res.data.response.cities})
        }
    },
    getOneCity:(id) =>{
        return async (dispatch, getState)=>{
            const res = await axios.get(`https://mitinerary-morales.herokuapp.com/api/cities/${id}`)
            dispatch({type:"GET_ONE_CITY",payload:res.data.response})
        }
    },
    filterCities:(input) => {
        return (dispatch, getState) =>{
            dispatch ({type: "FILTER_CITIES", payload: input})
        }
    }
}
export default citiesActions