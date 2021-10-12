import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import { styles } from '../../styles/scancode'
import I18n from '../../languages'

const ScanCode = (props: any) => {
  const [locale, setLocale] = useState<any>('')
  const [themeOrgData, setThemeOrgData] = useState<any>(null)

  useEffect(() => {
    async function getThemeData() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _data: any = JSON.parse(_initData)
      setThemeOrgData(_data)
    }
    getThemeData()
  }, [])

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={styles.scanCodeContainer}>
        <Text style={styles.scanCodeTitle}>{I18n.t('scan_code_top_desc')}</Text>
      </View>
      <Image style={styles.scanCodeImg} source={require('../../assets/scancode.png')} />
      <View style={styles.scanCodeDesc}>
        <Text style={styles.scanCodeDescText}>{I18n.t('scan_code_botton_desc')}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        NavigatorUtils.navigation(props.navigation, 'scanQRCode')
      }} activeOpacity={1} style={[styles.scanCodeBottom, {backgroundColor: themeOrgData ? `${themeOrgData.themeColorSub}` : ''}]}>
        <Text style={styles.scanCodeBottomText}>{I18n.t('scan_code_btn_text')}</Text>
        <Image style={styles.scanIcon} source={require('../../assets/arrow.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ScanCode
