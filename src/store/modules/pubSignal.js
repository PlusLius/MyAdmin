import api from "../../util/api"

const pubSignal = {
    state: {
        pubList:[]
    },
    actions:{
        getPubList({state}){
            return new Promise((resolve,reject)=>{
                api.get("/getPubLis").then(res=>{
                    state.pubList = res;
                    console.log(state.pubList)
                    resolve(res)
                }).catch(err=>{
                    reject(error);
                })
            })
        }
    }
}

export default pubSignal