import Mock from "mockjs"
import devList from "./devList"
import pubList from "./pubList"
         
Mock.mock("/devList","get",devList)
Mock.mock("/getPubLis","get",pubList)

export default Mock
