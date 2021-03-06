import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/order'
import I18n from '../../languages'
import _ from 'lodash'
import { observer } from 'mobx-react-lite'

const Pay = observer((props: any) => {
  const [orderOrgData, setOrderOrgData] = useState<any>({})
  const [themeOrgData, setThemeOrgData] = useState<any>(null)
  const [locale, setLocale] = useState<any>('')

  const { payStore } = useStore()

  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      console.log('JSON.parse(result)', JSON.parse(result))
      setOrderOrgData(JSON.parse(result))
    }
    getOrderData();
  }, [])

  useEffect(() => {
    async function getThemeData() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _data: any = JSON.parse(_initData)
      setThemeOrgData(_data)
    }
    getThemeData()
  }, [])

  const handleSubmit = async () => {
    const potRes: any = await payStore.getPayKey(orderOrgData.id)
    const payMent: any = await payStore.createPayMent({orderId: orderOrgData.id})
    console.log('payMent',payMent)
    if (potRes.state) {
      await AsyncStorage.setItem('pay_pk', potRes.opt)
      await AsyncStorage.setItem('clientSecret', payMent.opt)
      // paymentScreens
      NavigatorUtils.navigation(props.navigation, 'guestInformation')
    } else {
    }
  }

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={styles.orderContainer}>
        <View style={[styles.orderTitle, { backgroundColor: themeOrgData ? `${themeOrgData.themeColorMain}` : '' }]}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>3</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('select_order_title')}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.seleOrderContainer}>
          <View style={styles.orderListWrapper}>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('pay_room_type')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomTypeName}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('pay_price')}</Text>
              {orderOrgData.roomRate ? <Text style={styles.orderText}>???{orderOrgData.roomRate.newPublishedRackRate}</Text> : null}
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('quantity')}</Text>
              <Text style={styles.orderText}>{orderOrgData.days}{I18n.t('quantity_text')}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('rebate')}</Text>
              <Text style={styles.orderText}>{I18n.t('rebate_text')}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('subtotal')}</Text>
              {/* <Text style={styles.orderText}>???{orderOrgData.roomTaxes ? orderOrgData.roomTaxes[0].value : ''}</Text> */}
              {orderOrgData.roomRate ? <Text style={styles.orderText}>???{orderOrgData.days * orderOrgData.roomRate.newPublishedRackRate}</Text> : null}
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('taxes')}</Text>
              <Text style={styles.orderText}>???{orderOrgData.roomTaxes ? orderOrgData.roomTaxes[0].value : ''}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('lving_population')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomMaxPerson}{" "}{I18n.t('lving_population_text')}</Text>
            </View>
            {/* <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('room_information')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomTypeName}</Text>
            </View> */}
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('total')}</Text>
              <Text style={styles.orderText}>RMB???{orderOrgData.roomTotal}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleSubmit} activeOpacity={1} style={styles.orderSureContainer}>
            <Text style={styles.orderSureText}>{I18n.t('pay_order')}</Text>
            <Image style={styles.seleIcon} source={require('../../assets/arrow.png')} />
          </TouchableOpacity>
          <View style={styles.commentContainer}>
            <Text style={styles.commentContainerText}>{I18n.t('pay_order_desc')}</Text>
            <Text style={styles.commentContainerText}>{I18n.t('pay_order_k_desc')}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

export default Pay
