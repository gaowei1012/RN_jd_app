import { request } from "../request";
import config from '../config'

const { baseUrl, addUser, checkOut, checkRegUserStatus, checkRoomPwdStatus, getOrderInfoByResId, getOrderInfoByName } = config

export default class PmsUserRegistration {
  // 用户入住登记
  static pms_add(data: any) {
    return request(baseUrl + addUser, 'POST', data)
  }
  // 用户退房
  static pms_checkOut(data: any) {
    return request(baseUrl + checkOut, 'POST', data)
  }
  static pms_checkStatus(orderId: string) {
    return request(baseUrl + checkRegUserStatus, 'GET')
  }
  static pms_checkRoomStatus() {
    return request(baseUrl + checkRoomPwdStatus, 'GET')
  }
  // 根据订单ID查询订单
  static pms_getOrderByResId(orderId: string) {
    // console.log('==>>', baseUrl + getOrderInfoByResId + `/orderId=${orderId}`)
    return request(baseUrl + getOrderInfoByResId + `?orderId=${orderId}`, 'GET')
  }
  // 根据预定单ID查询订单
  static pms_getReservationById(reservationId: string) {
    // console.log('==>>', baseUrl + getOrderInfoByResId + `/orderId=${orderId}`)
    return request(baseUrl + getOrderInfoByResId + `?reservationId=${reservationId}`, 'GET')
  }
  // 根据姓名，入住日期查询
  static pms_getOrderInfoByName(fromDate: string, name: string, toDate: string) {
    // console.log('formDate', fromDate, 'name', name, 'toDate', toDate)
    // &hotelId=""
    // + `?fromDate=${fromDate}&name=${name}&toDate=${toDate}`
    // console.log('url', baseUrl + getOrderInfoByName + `?fromDate="${fromDate}"&name="${name}"&toDate="${toDate}"`)
    // const data = {
    //   formDate: fromDate,
    //   name: name,
    //   toDate: toDate
    // }
    return request(baseUrl + getOrderInfoByName + `?fromDate="${fromDate}"&name="${name}"&toDate="${toDate}"`, 'GET')
  }
}
