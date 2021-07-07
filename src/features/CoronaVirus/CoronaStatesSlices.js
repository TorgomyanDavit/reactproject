
 
export const initialStateCoronaVirus = [
    {
        name:"No Results",
        code:"No Results",
        population:"No Results",
        updated_at:"No Results",
        today:{
            deaths:"No Results",
            confirmed:"No Results"
        },
        latest_data:{
            confirmed:"No Results",
            critical:"No Results",
            deaths:"No Results",
            recovered:"No Results"
        }
    }
]

export function stateCorona(state) {
    return state.CoronaVirus[0]
}



export default function CoronaStatesReducers(state=[],action) {
    if(action.type === "searchApi") {
        return action.payload.Data.filter(country => {
            return country.name.toLowerCase() === action.payload.value.toLowerCase()
        })
    }
    return state
}