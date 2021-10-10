import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, BackHandler } from 'react-native'
import NavigatorUtils from '../../navigation/navigation'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/enrollment'
import { observer } from 'mobx-react-lite'
import I18n from '../../languages'
import { base } from '../../config/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Enrollment = observer((props: any) => {
  const [locale, setLocale] = useState<any>('')
  const { languageStore } = useStore()
  const [themeOrgData, setThemeOrgData] = useState<any>(null)

  useEffect(() => {
    async function getThemeData() {
      const opt: any = await AsyncStorage.getItem('initTheme')
      setThemeOrgData(JSON.parse(opt))
    }
    getThemeData()
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hardwareBackPress)
  }, [])

  // 监听原生返回事件
  const hardwareBackPress = (): any => {
    setLocale(I18n.locale)
  }

  // 切换中文
  const switchCN = async () => {
    I18n.locale = 'zh'
    setLocale(I18n.locale)
    languageStore.set_language('zh')
  }
  // 切换日语
  const switchJP = () => {
    I18n.locale = 'ja'
    setLocale(I18n.locale)
    languageStore.set_language('ja')
  }

  // 切换英文
  const switchEN = async () => {
    I18n.locale = 'en'
    setLocale(I18n.locale)
    languageStore.set_language('en')
  }


  return (
    <SafeAreaView>
      <View style={styles.topLogo}>
        {themeOrgData !== null ? <Image style={styles.logo} source={{uri: `${base.BaseImghUrl + themeOrgData.logoImgUrl}`}} /> : null}
      </View>
      <View style={styles.topTitle}>
        {themeOrgData !==null ? <Text style={styles.topTitleSty}>{themeOrgData.name}</Text> : null}
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
