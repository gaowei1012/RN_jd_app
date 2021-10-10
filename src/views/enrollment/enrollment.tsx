import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import NavigatorUtils from '../../navigation/navigation'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/enrollment'
import { observer } from 'mobx-react-lite'
import I18n from '../../languages'
import { toJS } from 'mobx'

const Enrollment = observer((props: any) => {
  const [locale, setLocale] = useState<any>('')
  const { pmsAppThemeStore } = useStore()

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress)
  }, [])

  // 监听原生返回事件
  const hardwareBackPress = (): any => {
    setLocale(I18n.locale)
    console.log('eee===>>>', )
  }

  // 切换中文
  const switchCN = async () => {
    I18n.locale = 'zh'
    setLocale(I18n.locale)
  }
  // 切换日语
  const switchJP = () => {
    I18n.locale = 'ja'
    setLocale(I18n.locale)
  }

  // 切换英文
  const switchEN = async () => {
    I18n.locale = 'en'
    setLocale(I18n.locale)
  }


  return (
    <SafeAreaView>
      <View style={styles.topLogo}>
        {toJS(pmsAppThemeStore.theme_data)}
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.topTitle}>
        <Text style={styles.topTitleSty}>QFOX BLACK DIAMOND HOTEL</Text>
      </View>
      <View style={styles.enrollmentContainer}>
        <View style={styles.rzWrapper}>
          <Text style={styles.rzText}>{I18n.t('check_in')}</Text>
          <Image style={styles.downIcon} source={require("../../assets/down.png")} />
        </View>
        <TouchableOpacity onPress={() => {
          NavigatorUtils.navigation(props.navigation, 'scancode')
        }} activeOpacity={1} style={styles.rudjWrapper}>
          <Image style={styles.rudjIcon} source={require("../../assets/scan.png")} />
          <Text style={styles.rudjText} numberOfLines={1}>{I18n.t('scan_code')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          NavigatorUtils.navigation(props.navigation, 'orderTracking')
        }} activeOpacity={1} style={styles.rudjWrapper}>
          <Image style={styles.rudjIcon} source={require("../../assets/edit.png")} />
          <Text style={styles.rudjText} numberOfLines={1}>{I18n.t('enter_order_number')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          NavigatorUtils.navigation(props.navigation, 'serchNameOrder')
        }} activeOpacity={1} style={styles.rudjWrapper}>
          <Image style={styles.rudjIcon} source={require("../../assets/person.png")} />
          <Text style={styles.rudjText} numberOfLines={1}>{I18n.t('name_search')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLanguage}>
        <View style={[styles.defaultLanguage]}>
          <TouchableOpacity activeOpacity={1} onPress={switchEN}>
            <Text style={[styles.defaultLanguageFont]}>ENG</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={switchJP}>
            <Text style={[styles.defaultLanguageFont]}>日本語</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={switchCN}>
            <Text style={[styles.defaultLanguageFont]}>中文</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.defaultFlexRow]}>
          <Text style={[styles.defaultFontSmail]}>POWERED BY ONE STEP PMS</Text>
        </View>
      </View>
    </SafeAreaView>
  )
})

export default Enrollment
