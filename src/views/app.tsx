import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigatorUtils from '../navigation/navigation'
import { useStore } from '../hooks/useStore'
import { observer } from 'mobx-react-lite'
import { styles } from '../styles/app'
import I18n from  '../languages/index'
import InitModal from './initModal'

const App = observer((props: any) => {
  const { pmsAppThemeStore } = useStore()
  const [locale, setLocale] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    // 初始化modal，第一次打开时
    async function getInit() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _data: any = JSON.parse(_initData)
      console.log('_initData', _data)
      if (_initData == '{}'){
        setVisible(true)
      }
    }
    getInit()
  }, [])

 

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
    <SafeAreaView style={styles.appContainer}>
      <InitModal visible={visible} setVisible={setVisible} />
      <View style={styles.topLogo}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.topTitle}>
        <Text style={styles.topTitleSty}>QFOX BLACK DIAMOND HOTEL</Text>
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
    </SafeAreaView>
  )
})

export default App
