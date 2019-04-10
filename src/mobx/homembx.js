import { observable, action } from "mobx";
import MyOrder from "../component/me/MyOrder";
class HomeStore{
    @observable text;
    @observable order;
    constructor(){
    this.text='wowoww777'
    this.order=[
        {
       'status':1,   //1 已完成 ，0预约中
      'lx':'直接维修',
      'dz':'北京市昌平区',
      'time':'2019-4-3',
      'bxinfo':'水管漏水',
      'xm':'郭先生',
      'phone':'18845676765',
      'money':'100',
      'ddh':'287676543234567'
        }
    ]
    }
   @action
   updateorder=(e)=>{
    this.order.push(e)
   } 
}
const homeStore=new HomeStore()
export {homeStore}