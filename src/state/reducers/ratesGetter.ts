
interface State{
    baseRateList:any[],
    rateList:any[];
    loading:boolean;
}

interface IGetRateAction{
    type:"GET_RATES",
    payload: []
}
interface IGetBaseRateAction{
    type:"GET_BASE_RATES",
    payload: []
}
interface ISetLoadingAction{
    type:"SET_LOADING",
    payload: boolean
}

type Action =IGetRateAction | IGetBaseRateAction | ISetLoadingAction
const reducer =(state:State= {baseRateList:[], rateList:[], loading:false} , action:Action) => {
    switch (action.type) {
        case 'GET_RATES':
            return {...state,
                 rateList:action.payload}
        case 'GET_BASE_RATES':
            return {...state,
                    baseRateList:action.payload}
        case 'SET_LOADING':
            return {
                ...state,
                loading:action.payload

            }
        default:
            return state;
    }
}

export default reducer;