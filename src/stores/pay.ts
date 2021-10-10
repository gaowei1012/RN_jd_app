import { makeAutoObservable, observable, action } from "mobx";
import PmsPay from '../api/class/pay'

export class PayStore {
  constructor() {
    makeAutoObservable(this, {
      getPayKey: action,
      createPayMent: action
    })
  }


  // 获取秘钥
  getPayKey(orderId: string) {
    return new Promise((resolve, reject) => {
      PmsPay.get_pay_key(orderId)
        .then((result: any) => {
          console.log('order result', result.data.result)
          resolve({state: true, opt: result.data.result})
        })
        .catch((err: any) => {
          console.log('err ==>>', err)
          reject(false)
        })
    })
  }

  // 创建支付意向
  createPayMent(data: any) {
    return new Promise((resolve, reject) => {
      PmsPay.create_pay_ment(data)
        .then((result: any) => {
          resolve({state: true, opt: result})
        })
        .catch((err: any) => {
          reject(false)
        })
    })
  }
}

export default new PayStore()