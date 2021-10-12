import { action, observable, makeObservable } from 'mobx'
import PmsUserRegistration from '../api/class/pmsUserRegistration'
import { ToastAndroid } from 'react-native'

export class PmsUserRegistrationStore {
  constructor() {
    makeObservable(this, {
      add_pmsUserRegistration: action,
    })
  }

  // 用户登记表-新增用户登记信息
  add_pmsUserRegistration(data: any) {
    return new Promise((resolve, reject) => {
      PmsUserRegistration.pms_add(data)
        .then(result => {
          resolve({ state: true, opt: result })
          console.log(result);
        })
        .catch(err => {
          console.log('err', err)
          reject(err)
        })
    })
  }

  // 用户退房
  checkOut_pmsUserRegistration(data: any) {
    console.log('data', data)
    return new Promise((resolve, reject) => {
      PmsUserRegistration.pms_checkOut(data)
        .then(result => {
          console.log('退房成功', result)
          ToastAndroid.show('退房成功', 2000)
          resolve(true)
        })
        .catch(err => {
          reject(false)
          ToastAndroid.show('退房失败', 2000)
          console.log('err', err)
        })
    })
  }

  // 用户登记表-前端轮询查询当前登记信息是否审核成功
  checkStatus_pmsUserRegistration(orderId: string) {
    return PmsUserRegistration.pms_checkStatus(orderId)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 用户登记表-前端轮询查询当前房间密码是否正确
  checkRoomStatus_pmsUserRegistration() {
    return PmsUserRegistration.pms_checkRoomStatus()
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 通过订单ID查询出当前订单
  getOrderInfoByResId_pmsUserRegistration(orderId: string) {
    return new Promise((resolve, reject) => {
      PmsUserRegistration.pms_getOrderByResId(orderId)
        .then((result: { data: { result: any } }) => {
          console.log('list ==>', result.data.result)
          resolve({ state: true, opt: result.data.result[0] })
        })
        .catch(err => {
          reject({ state: false, opt: '' })
        })
    })
  }

  // 通过预定ID查询出当前订单
  getReservationId(reservationId: string) {
    return new Promise((resolve, reject) => {
      PmsUserRegistration.pms_getReservationById(reservationId)
        .then(result => {
          resolve(true)
          console.log('get reservation ==>>', result)
        })
        .catch(err => {
          reject(false)
          console.log(err)
        })
    })
  }

  // 通过预订人姓名查询当前你订单
  getOrderInfoByName(fromDate: string, name: string, toDate: string) {
    return new Promise((resolve, reject) => {
      PmsUserRegistration.pms_getOrderInfoByName(fromDate, name, toDate)
        .then((result: { data: { result: any } }) => {
          resolve({ state: true, opt: result.data.result })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default new PmsUserRegistrationStore()