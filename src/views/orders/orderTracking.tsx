import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ActivityIndicatorOpt from '../../components/ActivityIndicator'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/order'
import I18n from '../../languages'

const OrderTracking = (props: any) => {
  const [order_str, setOrderStr] = useState<string>('')
  const { pmsUserRegistrationStore } = useStore()
  const [visible, setVisible] = useState<boolean>(false)
  const [locale, setLocale] = useState<any>('')

  // 获取输入的值
  const handleChangeText = (val: any) => {
    console.log(val)
    setOrderStr(val)
  }


  // 搜索订单
  const handleOrderTracking = async () => {
    setVisible(true)
    const result: any = await pmsUserRegistrationStore.getOrderInfoByResId_pmsUserRegistration(order_str)
    if (result.state) {
      console.log('订单搜索成功', result.opt)
      setVisible(false)
      await AsyncStorage.setItem('orderData', JSON.stringify(result.opt))
      NavigatorUtils.navigation(props.navigation, 'seleOrders')
    } else {
      setVisible(false)
    }
  }

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <ActivityIndicatorOpt visible={visible}/>
      <View style={styles.orderContainer}>
        <View style={styles.orderTitle}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>1</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('order_tracking')}</Text>
        </View>
        <TextInput onChangeText={handleChangeText} style={styles.orderTextinput} placeholder={I18n.t('search_order_placeholderText')} placeholderTextColor='#333' />
      </View>
      <TouchableOpacity onPress={handleOrderTracking} activeOpacity={1} style={styles.orderBottomWrapper}>
        <Text style={styles.orderBottomText}>{I18n.t('search_order_btn_text')}</Text>
        <Image style={styles.orderIcon} source={require('../../assets/arrow.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OrderTracking
