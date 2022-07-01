interface State{
    result:ResultType;
}

type ResultType= number| null;
type Action={
    type:string;
    payload:number;
}
const reducer =(state:State={result:null} , action:Action) => {
    switch (action.type) {
        case 'CONVERT':
            return {...state,
                result:action.payload
            };
        default:
            return state;
    }
}

export default reducer;