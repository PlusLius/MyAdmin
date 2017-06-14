import Mock from "mockjs"

const List = [];
const count = 20;


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    // "array|1-10": [
    //   {
    //     "name|+1": [
    //       {
            devCode: '@id',
            gateway: '@ctitle(2)',
            devClass:'@guid',
            mac: '@url',
            versiton: '@id',
            pubId: '@guid',
            devId:'@guid',
            ticket: '@guid',
            more:'@id'
          // }
    //     ]
    //   }
    // ]
  }));
}

export default {
       List
}