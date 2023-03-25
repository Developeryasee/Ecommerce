const initstate={
    currency:"र"
}
export const currencyReducer=(state=initstate,action)=>{

    if (action.type==="changeCurrecy") {
        return{
            ...state,
            currency:action.payload
        }
    }
    

    return state;
}