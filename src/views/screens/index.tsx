import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native'
import I18n from '../../languages/index'
import { styles } from '../../styles/payment'
import { px2dp, width } from '../../utils/px2dp'

const PaymentScreens = (props: any) => {
  const [card, setCard] = useState(null);
  const { confirmPayment, handleCardAction } = useStripe()
  const [orderOrgData, setOrderOrgData] = useState<any>({})

  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      setOrderOrgData(JSON.parse(result))
      console.log('payment', JSON.parse(result))
    }
    getOrderData();
  }, [])

  return (
    <SafeAreaView style={styles.paymentContainer}>
      <View style={styles.paymentTopContainer}>
        <Text style={styles.orderPrice}>{I18n.t('total_order_price')}</Text>
        <Text style={styles.orderPriceNum}>RMB￥{orderOrgData.roomTotal}</Text>
      </View>
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
          placeholderColor: '#000000',
          fontSize: px2dp(12)
        }}
        style={{
          width: width,
          height: px2dp(30),
          marginVertical: px2dp(15),
        }}
        onCardChange={(cardDetails: any) => {
          setCard(cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <TouchableOpacity activeOpacity={1} style={styles.paymentBtn}>
        <Text style={styles.paymentBtnText}>{I18n.t('confirm_payment')}</Text>
        <Image style={styles.seleIcon} source={require('../../assets/arrow.png')} />
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default PaymentScreens
