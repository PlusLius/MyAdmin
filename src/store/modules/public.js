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
    },
    getters: {
        getConHeadFont(state){
            return state.ConHeadFont
        },
        getConHeadOptions(state){
            return state.ConHeadOptions
        }
    }
}

export default pub