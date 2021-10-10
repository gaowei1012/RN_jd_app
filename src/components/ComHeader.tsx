import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import NavigatorUtils from '../navigation/navigation'
import { styles } from '../styles/header'
import { useStore } from '../hooks/useStore'
import I18n from '../languages/index'

const ComHeader = (props: any) => {
  const { setLocale } = props
  const { languageStore } = useStore()

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
    <View style={styles.comHeaderConatainer}>
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
          <Text style={[styles.defaultLanguageFont]}>中文</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.comHeaderRightContainer}>
        <TouchableOpacity onPress={() => {
          NavigatorUtils.navigation(props.navigation, 'home')
        }} activeOpacity={1} style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../assets/home.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          NavigatorUtils.navigation(props.navigation, 'customer')
        }} activeOpacity={1} style={styles.iconWrapper}>
          <Image style={styles.icon} source={require('../assets/resource.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ComHeader
