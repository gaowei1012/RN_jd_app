import { action, makeAutoObservable, observable } from "mobx";
import PmsAppThemeRequest from '../api/class/pmsType'

export class PmsAppThemeStore {
  theme_data: any
  constructor() {
    makeAutoObservable(this, {
      get_theme_data: action,
      theme_data: observable,
    })
  }

  // 获取主题配色
  get_theme_data(id: string) {
    return new Promise((resolve, reject) => {
      PmsAppThemeRequest.get_pms_theme(id)
        .then((result: any) => {
          resolve({ state: true, opt: result })
          this.theme_data = result.data.result
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default new PmsAppThemeStore()
