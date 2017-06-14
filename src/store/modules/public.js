const pub = {
    state: {
        ConHeadFont:"",
        ConHeadOptions:[]
    },
    mutations: {
        changeConHeadFont(state,value){
            state.ConHeadFont = value;
        },
        changeConHeadOptions(state,value){
            state.ConHeadOptions = value;
        }
    }
}

export default pub