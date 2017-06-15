import api from "../../util/api"

const device = {
    state: {
        devList:[]
    },
    mutations:{
        setDevList(state,res){
            state.devList = res;
        }
    },
    actions:{
        getDevList({state,commit}){
            return new Promise((resolve,reject)=>{
                api.get("/getDevList").then(res=>{
                    commit("setDevList",res.data.List)
                    resolve(res)
                }).catch(err=>{
                    reject(error);
                })
            })
        }
    }
}

export default device