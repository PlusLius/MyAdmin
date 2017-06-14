import Mock from "mockjs"

const List = [];
const count = 20;


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    // "array|1-10": [
    //   {
        // "name|+1": [
        //   {
            appId: '@id',
            appSecret: '@ctitle(5)',
            wexiId:'@guid',
            token: '@id',
            url: '@url',
            redirect: '@url',
            flieName:'@cfirst',
            deviceId: '@guid',
            name:'@name',
            modeId:'@id',
            sendId:'@id',
            warnId:'@id',
            key:'@id'
        //   }
        // ]
    //   }
    // ]
  }));
}

export default {
  List
}