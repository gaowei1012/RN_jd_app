import { request } from "../request";
import config from '../config'

const { getPayKey, createPay, baseUrl } = config


export default class PmsPay {
  // 获取发布秘钥
  static get_pay_key(orderId: string) {
    return request(baseUrl + getPayKey + `?orderId=${orderId}`, 'GET')
  }
  // 创建支付意向
  static create_pay_ment(data: any) {
    return  request(baseUrl + createPay, 'POST', data)
  }
}
