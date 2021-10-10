import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigatorUtils from '../navigation/navigation'
import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react-lite'
import { styles } from '../styles/app'
import I18n from '../languages/index'
import { base } from '../config/index'
import InitModal from './initModal'
import { toJS } from 'mobx'
import { height, width } from '../utils/px2dp'

const App = observer((props: any) => {
  const { pmsAppThemeStore, languageStore } = useStore()
  const [locale, setLocale] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [themeOrgData, setThemeOrgData] = useState<any>(null)

  useEffect(() => {
    // 初始化modal，第一次打开时
    async function getInit() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _data: any = JSON.parse(_initData)
      setThemeOrgData(_data)
      if (_initData == '{}' || _initData == null) {
        setVisible(true)
      }
    }
    getInit()
  }, [])

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
    <SafeAreaView style={styles.appContainer}>
      <InitModal visible={visible} setVisible={setVisible} />
      {themeOrgData !==null ? <ImageBackground style={{ width: width, height: height }} source={{ uri: `${base.BaseImghUrl}` + themeOrgData.backgroundImgUrl }}>
        <View style={styles.topLogo}>
          <Image style={styles.logo} source={{ uri: `${base.BaseImghUrl + themeOrgData.logoImgUrl}` }} />
        </View>
        <View style={styles.topTitle}>
          <Text style={styles.topTitleSty}>{themeOrgData.name}</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentFlexColums}>
            <TouchableOpacity onPress={() => {
              NavigatorUtils.navigation(props.navigation, 'enrollment')
            }} activeOpacity={1} style={styles.checkInContainer}>
              <Image style={styles.kfIcon0} source={require('../assets/right-arrow.png')} />
              <View style={styles.rightWrapper}>
                <Text style={[styles.checkDefaultFontSty]}>{I18n.t('check_in')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              NavigatorUtils.navigation(props.navigation, 'expressCheckOut')
            }} activeOpacity={1} style={styles.checkInContainer}>
              <Image style={styles.kfIcon0} source={require('../assets/left-arrow.png')} />
              <View style={styles.rightWrapper}>
                <Text style={[styles.checkDefaultFontSty]}>{I18n.t('check_out')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              NavigatorUtils.navigation(props.navigation, 'customer')
            }} activeOpacity={1} style={styles.checkInContainer}>
              <Image style={styles.kfIcon} source={require('../assets/kf.png')} />
              <View style={styles.rightDarkWrapper}>
                <Text style={[styles.checkDefaultFontSty]}>{I18n.t('service')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomLanguage}>
          <View style={[styles.defaultLanguage]}>
            <TouchableOpacity activeOpacity={1} onPress={switchEN}>
              <Text style={[styles.defaultLanguageFont]}>ENG</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity activeOpacity={1} onPress={switchJP}>
              <Text style={[styles.defaultLanguageFont]}>日本語</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity activeOpacity={1} onPress={switchCN}>
              <Text style={[styles.defaultLanguageFont]} >中文</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.defaultFlexRow]}>
            <Text style={[styles.defaultFontSmail]}>POWERED BY ONE STEP PMS</Text>
          </View>
        </View>
      </ImageBackground> : null}
      
    </SafeAreaView>
  )
})

export default App
