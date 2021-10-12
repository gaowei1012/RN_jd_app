import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import ActivityIndicatorOpt from '../../components/ActivityIndicator'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import { styles } from '../../styles/scancode'
import I18n from '../../languages'

const ScanCode = (props: any) => {
  const [locale, setLocale] = useState<any>('')

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
      }} activeOpacity={1} style={styles.scanCodeBottom}>
        <Text style={styles.scanCodeBottomText}>{I18n.t('scan_code_btn_text')}</Text>
        <Image style={styles.scanIcon} source={require('../../assets/arrow.png')}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ScanCode
