const initState = {id: 0}

const lobbyIdReducer = (state=initState, action) =>{
    switch(action.type){
        case action.type == 'create':
            return action.payload;
        default:
            return state;
    }
}

export default lobbyIdReducer;