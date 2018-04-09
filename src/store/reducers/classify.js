import * as types from '../constants/classify'
const itialState={
    name: "classify",
    tableJson:null
}
const classify = (state = itialState,action)=>{
    switch(action.type){
        case types.GET_TABLE_JSON:
            return { ...state, tableJson: action.tableJson}
        default:
            return state
    }
}
export default classify