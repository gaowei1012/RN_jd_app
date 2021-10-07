import I18n from "i18n-js"
import { makeAutoObservable, observable } from "mobx";
import * as RNLocalize from "react-native-localize"
import zh_cn from "../languages/zh_cn"
import en from "../languages/en"

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;

if (systemLanguage) {
  I18n.locale = systemLanguage;
} else {
  I18n.locale = 'en';  // 默认语言为英文  
}

export class LanguageStore {
  language_status: string = 'cn'

  constructor() {
    makeAutoObservable(this, {
      language_status: observable,
    })
  }

  // 设置中文
  // status:
  // 0 ==> zh_cn
  // 1 ==> en
  set_language(status: string) {
    this.language_status = status
  }
}

export default new LanguageStore()
