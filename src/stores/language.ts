import { makeAutoObservable, observable } from "mobx";

export class LanguageStore {
  language_status: string = ''

  constructor() {
    makeAutoObservable(this, {
      language_status: observable,
    })
  }

  // 设置中文
  // status:
  // 0 ==> zh_cn
  // 1 ==> en
  // 2 ==>  jp
  set_language(status: string) {
    this.language_status = status
  }
}

export default new LanguageStore()
