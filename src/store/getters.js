const getters = {
    getConHeadFont(state){
        return state.pub.ConHeadFont
    },
    getConHeadOptions(state){
        return state.pub.ConHeadOptions
    },
    getPubList(state){
        return state.pubSignal.pubList
    },
    getDevList(state){
        console.log( state.device.devList)
        return state.device.devList
    },
    getConHeadShow(state){
        return state.pub.isShow
    }
}

export default getters