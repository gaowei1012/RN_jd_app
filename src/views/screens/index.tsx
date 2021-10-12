import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Image, ToastAndroid, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  CardField,
  CardFieldInput,
  useConfirmPayment,
  PaymentMethodCreateParams,
} from '@stripe/stripe-react-native'
import NavigatorUtils from '../../navigation/navigation'
import PayMentScreens from './paymentScreen'
import I18n from '../../languages/index'
import { styles } from '../../styles/payment'
import { px2dp, width } from '../../utils/px2dp'

const PaymentScreen = (props: any) => {
  const [card, setCard] = useState(null);
  const [orderOrgData, setOrderOrgData] = useState<any>({})
  const [saveCard, setSaveCard] = useState(false);
  const [clientSecret, setClientSecret] = useState('')

  const { confirmPayment, loading } = useConfirmPayment()

  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      const _clientSecret: any = await AsyncStorage.getItem('clientSecret')
      setClientSecret(_clientSecret)
      setOrderOrgData(JSON.parse(result))
    }
    getOrderData();
  }, [])

  const billingDetails: PaymentMethodCreateParams.BillingDetails = {
    email: orderOrgData.email,
  }

  const handlePayPress = async () => {
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
      setupFutureUsage: 'OffSession'
    })
    if (error) {
      console.log('支付失败 ErrorCode', error.code, error.message)
      ToastAndroid.show(`支付失败 ${error.message}`, 1000)
    } else if (paymentIntent) {
      console.log('支付成功', paymentIntent.currency, paymentIntent)
      ToastAndroid.show(`订单支付成功 ${paymentIntent.status}`, 1000)
      NavigatorUtils.navigation(props.navigation, 'guestInformation')
    }
  }

  return (
    <PayMentScreens>
      <CardField
        postalCodeEnabled={false}
        autofocus
        placeholder={{
          number: '4242 4242 4242 4242',
          postalCode: '12345',
          cvc: 'CVC',
          expiration: 'MM|YY',
        }}
        cardStyle={inputStyles}
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
      <TouchableOpacity onPress={handlePayPress} activeOpacity={1} style={styles.paymentBtn}>
        <Text style={styles.paymentBtnText}>{I18n.t('confirm_payment')}</Text>
        <Image style={styles.seleIcon} source={require('../../assets/arrow.png')} />
      </TouchableOpacity>
    </PayMentScreens>
  )
}

const inputStyles: CardFieldInput.Styles = {
  backgroundColor: '#FFFFFF',
  borderColor: '#000000',
  borderRadius: 8,
  fontSize: px2dp(16),
  placeholderColor: '#999999',
};

export default PaymentScreen
