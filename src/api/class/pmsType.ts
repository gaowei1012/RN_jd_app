import { request } from "../request";
import config from '../config'

const { getAppTheme, baseUrl } = config

export default class PmsGetTheme {
  // 获取主题配置颜色
  static get_pms_theme(id: string) {
    return request(baseUrl + getAppTheme + `?id=${id}`, 'GET')
  }
}
