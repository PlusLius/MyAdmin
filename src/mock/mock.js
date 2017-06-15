import Mock from "mockjs"
import devList from "./devList"
import pubList from "./pubList"
         
Mock.mock("/getDevList","get",devList)
Mock.mock("/getPubList","get",pubList)

export default Mock
