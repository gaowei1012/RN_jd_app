import { action, makeAutoObservable, observable } from "mobx";
import PmsAppThemeRequest from '../api/class/pmsType'
import AsyncStorage from "@react-native-async-storage/async-storage";

export class PmsAppThemeStore {
  theme_data: any
  constructor() {
    makeAutoObservable(this, {
      get_theme_data: action,
      theme_data: observable,
    })

    // 二次打开时候， 持久化数据
    // console.log('this.theme_data', this.theme_data)
    // if (this.theme_data == undefined) {
    //   //this.getThemeData()
    //   AsyncStorage.getItem('initTheme')
    //     .then((themeData: any) => {
    //       this.theme_data = JSON.parse(themeData)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  }

  // 持久化数据
  async getThemeData() {
    const themeData: any = await AsyncStorage.getItem('initTheme')
    console.log('themeData', themeData)
    this.theme_data = JSON.parse(themeData)
  }

  // 获取主题配色
  get_theme_data(id: string) {
    return new Promise((resolve, reject) => {
      PmsAppThemeRequest.get_pms_theme(id)
        .then((result: { data: any }) => {
          resolve({ state: true, opt: result.data.result })
          this.theme_data = result.data.result
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  // 设置
  set_theme_data(data: any) {
    this.theme_data = data
  }
}

export default new PmsAppThemeStore()
