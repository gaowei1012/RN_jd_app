import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ActivityIndicatorOpt from '../../components/ActivityIndicator'
import CheckBox from '@react-native-community/checkbox'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import { styles } from '../../styles/order'
import I18n from '../../languages'
import _ from 'lodash'

const tintColors: any = '#9E663C'

const SeleOrders = (props: any) => {
  const [orderOrgData, setOrderOrgData] = useState<any>({})
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [locale, setLocale] = useState<any>('')
  
  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      setOrderOrgData(JSON.parse(result))
    }
    getOrderData();
  }, [])

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <ActivityIndicatorOpt visible={visible}/>
      <View style={styles.orderContainer}>
        <View style={styles.orderTitle}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>2</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('select_order_title')}</Text>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 200 }}>
        <View style={styles.seleOrderContainer}>
          <View style={styles.seleOrderTopContainer}>
            <View style={styles.seleOrderTopTitle}>
              <Text style={styles.seleOrderTitleText}>{I18n.t('select_order_top_text')}1</Text>
            </View>
            <View style={styles.seleOrderLine} />
          </View>
          <View style={styles.orderListWrapper}>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('order_number')}</Text>
              <Text style={styles.orderText}>{orderOrgData.reservationId}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('last_name')}</Text>
              <Text style={styles.orderText}>{orderOrgData.customerName}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('booker_name')}</Text>
              <Text style={styles.orderText}>{orderOrgData.customerName}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('check_in_date')}</Text>
              <Text style={styles.orderText}>{orderOrgData.fromDate}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('check_out_date')}</Text>
              <Text style={styles.orderText}>{orderOrgData.toDate}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('number_of_days_of_stay')}</Text>
              <Text style={styles.orderText}>{orderOrgData.fromDate}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('living_population')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomMaxPerson}{" "}{I18n.t('lving_population_text')}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('room_type_information')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomTypeName}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('room_number')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomNum}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('room_status')}</Text>
              <Text style={styles.orderText}>{orderOrgData.roomStatus == '6' ? I18n.t('room_status_register') : I18n.t('')}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('precautions')}</Text>
              <Text style={styles.orderText}>{I18n.t('order_desc')}</Text>
            </View>
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>{I18n.t('payment_status')}</Text>
              <Text style={styles.orderText}>{orderOrgData.paymentState == "1" ? `${I18n.t('not_payment_status_text')}` : `${I18n.t('payment_status_text')}`}</Text>
            </View>
          </View>
          <View style={styles.orderBottomWContainer}>
            <View style={styles.orderBottomCheckBoxWrapper}>
              <CheckBox
                style={styles.orderBottomCheckBox}
                disabled={false}
                tintColors={tintColors}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style={styles.orderBottomCheckText}>{I18n.t('terms_text')}</Text>
            </View>
            <TouchableOpacity disabled={!toggleCheckBox} onPress={() => {
              setVisible(true)
              setTimeout(() => {
                setVisible(false)
                NavigatorUtils.navigation(props.navigation, 'pay')
              }, 1000)
            }} activeOpacity={1} style={styles.orderSureContainer}>
              <Text style={styles.orderSureText}>{I18n.t('payment_text')}</Text>
              <Image style={styles.seleIcon} source={require('../../assets/arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SeleOrders
