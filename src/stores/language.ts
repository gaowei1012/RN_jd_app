import { makeAutoObservable, observable } from "mobx";
import * as RNLocalize from "react-native-localize"

let systemLanguage:any;
const locales = RNLocalize.getLocales();
systemLanguage = locales[0]?.languageCode;

export class LanguageStore {
  language_status: any

  constructor() {
    makeAutoObservable(this, {
      language_status: observable,
    })
    this.language_status = systemLanguage
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
