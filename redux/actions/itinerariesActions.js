import axios from "axios";
// actions reciben los eventos del front
const itinerariesActions = {

    getItinerariesFromCity :(id) =>{
        return async (dispatch, getState)=>{ 
            const res = await axios.get(`https://mitinerary-morales.herokuapp.com/api/itinerarybycity/${id}`)
        dispatch ({type:"GET_ITINERARIES_FROM_CITY", payload:res.data.response.itineraries})
        }
    },
    likeDislike: (activityId) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`http://localhost:4000/api/like/${activityId}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    },
}

export default itinerariesActions