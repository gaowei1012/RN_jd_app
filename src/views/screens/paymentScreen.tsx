import AsyncStorage from '@react-native-async-storage/async-storage'
import { initStripe } from '@stripe/stripe-react-native'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import I18n from '../../languages/index'
import { styles } from '../../styles/payment'

const PayMentScreens = (props: any) => {
  const [payKey, setPayKey] = useState<any>('')
  const [orderOrgData, setOrderOrgData] = useState<any>({})

  const {children} = props
  useEffect(() => {
    async function getOrderData() {
      const payPk: any = await AsyncStorage.getItem('pay_pk')
      const result: any = await AsyncStorage.getItem('orderData')
      setPayKey(payPk)
      setOrderOrgData(JSON.parse(result))

    }
    getOrderData();
  }, [])

  useEffect(() => {
    async function initialize() {
      if (payKey) {
        await initStripe({
          publishableKey: payKey,
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'wechat_pay',
          setUrlSchemeOnAndroid: true,
        })
      }
    }
    initialize();
  }, [payKey])
  return (
    <SafeAreaView style={styles.paymentContainer}>
      <View style={styles.paymentTopContainer}>
        <Text style={styles.orderPrice}>{I18n.t('total_order_price')}</Text>
        <Text style={styles.orderPriceNum}>RMB￥{orderOrgData.roomTotal}</Text>
      </View>
      {children}
    </SafeAreaView>
  )
}


export default PayMentScreens
