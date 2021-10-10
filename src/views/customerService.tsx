import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image } from 'react-native'
import { useStore } from '../hooks/useStore'
import ComHeader from '../components/ComHeader'
import { observer } from 'mobx-react-lite'
import { styles } from '../styles/customer'
import I18n from '../languages'
import { toJS, autorun } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CustomerService = observer((props: any) => {
  const [locale, setLocale] = useState<any>('')
  const [themeOrgData, setThemeOrgData] = useState<any>(null)

  const [customerServiceLine, setCustomerServiceLine] = useState<string>('')
  const [customerServicePhone, setCustomerServicePhone] = useState<string>('')
  const [customerServiceWechat, setCustomerServiceWechat] = useState<string>('')
  const [customerServiceWhatsapp, setCustomerServiceWhatsapp] = useState<string>('')

  const { languageStore } = useStore()

  useEffect(() => {
    async function getThemeData() {
      const opt: any = await AsyncStorage.getItem('initTheme')
      setThemeOrgData(JSON.parse(opt))
    }
    getThemeData()
  }, [])

  useEffect(() => {
    if (themeOrgData !== null) {
      autorun(() => {
        if (languageStore.language_status == 'zh') {
          setCustomerServiceLine(themeOrgData.customerServiceLineZh)
          setCustomerServicePhone(themeOrgData.customerServicePhoneZh)
          setCustomerServiceWechat(themeOrgData.customerServiceWechatZh)
          setCustomerServiceWhatsapp(themeOrgData.customerServiceWhatsappZh)
        } else if (languageStore.language_status == 'en') {
          setCustomerServiceLine(themeOrgData.customerServiceLineEn)
          setCustomerServicePhone(themeOrgData.customerServicePhoneEn)
          setCustomerServiceWechat(themeOrgData.customerServiceWechatEn)
          setCustomerServiceWhatsapp(themeOrgData.customerServiceWhatsappEn)
        } else if (languageStore.language_status == 'ja') {
          setCustomerServiceLine(themeOrgData.customerServiceLineJp)
          setCustomerServicePhone(themeOrgData.customerServicePhoneJp)
          setCustomerServiceWechat(themeOrgData.customerServiceWechatJp)
          setCustomerServiceWhatsapp(themeOrgData.customerServiceWhatsappJp)
        }
      })
    }
  }, [themeOrgData])

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={styles.customerServiceWrapper}>
        <View style={styles.customerLine}>
          <Text style={styles.customerTopTitle}>{I18n.t('customer_service')}</Text>
          <View style={styles.customerContentWrapper}>
            <View style={styles.customerContentItem}>
              <Image style={styles.customerImage} source={{ uri: 'https://pad.descartes.digital/onl/whatsapp.png' }} />
              <Text style={styles.customerText}>{customerServiceWhatsapp}</Text>
            </View>
            <View style={styles.customerContentItem}>
              <Image style={styles.customerImage} source={{ uri: 'data:image/png;base64,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' }} />
              <Text style={styles.customerText}>{customerServiceWechat}</Text>
            </View>
            <View style={styles.customerContentItem}>
              <Image style={styles.customerImage} source={{ uri: 'data:image/png;base64,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' }} />
              <Text style={styles.customerText}>{customerServiceLine}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.emergencyContactWrapper}>
        <View style={styles.emergencyLine}>
          <Text style={styles.customerTopTitle}>{I18n.t('emergency_contact')}</Text>
          <View style={styles.customerContentItem}>
            <Image style={styles.customerImage} source={{ uri: 'data:image/png;base64,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' }} />
            <Text style={styles.customerText}>{customerServicePhone}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
})

export default CustomerService
