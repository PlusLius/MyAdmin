const getters = {
    getConHeadFont(state){
        return state.pub.ConHeadFont
    },
    getConHeadOptions(state){
        return state.pub.ConHeadOptions
    },
    getPubList(state){
        return state.pubSignal.pubList
    }
}

export default getters