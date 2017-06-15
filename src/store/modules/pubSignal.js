import api from "../../util/api"

const pubSignal = {
    state: {
        pubList:[]
    },
    // getters: {
    //     getPubList1(state){
    //         return state.pubList;
    //     }
    // },
    mutations:{
        setPubList(state,res){
            state.pubList = res;
        }
    },
    actions:{
        getPubList({state,commit}){
            return new Promise((resolve,reject)=>{
                api.get("/getPubList").then(res=>{
                    commit("setPubList",res.data.List)
                    resolve(res)
                }).catch(err=>{
                    reject(error);
                })
            })
        }
    }
}

export default pubSignal