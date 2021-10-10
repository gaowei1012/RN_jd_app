import { makeAutoObservable, observable } from "mobx";
import * as RNLocalize from "react-native-localize"

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;
console.log(systemLanguage)
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
