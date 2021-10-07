
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

class NavigatorUtils {
  // 路由跳转
  static navigation(navigation: { navigate: any }, path: string) {
    console.log('navigation ==>>', navigation)
    return navigation.navigate(path)
  }
  // 返回上级菜单
  static goBack(navigation: {goBack: any}) {
    return navigation.goBack()
  }
}

export default NavigatorUtils
