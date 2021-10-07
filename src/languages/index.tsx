
import I18n from "i18n-js"
import * as RNLocalize from "react-native-localize"
import zh_cn from "./zh_cn"
import en from "./en"
import ja_JP from './ja_JP'

const locales = RNLocalize.getLocales();
const systemLanguage = locales[0]?.languageCode;

if (systemLanguage) {
  I18n.locale = systemLanguage;
} else {
  I18n.locale = 'en';  // 默认语言为英文  
}


I18n.fallbacks = true;
I18n.translations = {
  zh: zh_cn,
  en,
  ja: ja_JP,
  // ru: rus
}

export default I18n
