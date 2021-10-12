import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import ActivityIndicatorOpt from '../../components/ActivityIndicator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import DatePicker from 'react-native-datepicker'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/order'
import I18n from '../../languages'
import { px2dp } from '../../utils/px2dp'

const SerchNameOrder = (props: any) => {
  // yik lam wong
  const [order_name, setOrderName] = useState<string>('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')
  const [locale, setLocale] = useState<any>('')
  const [visible, setVisible] = useState<boolean>(false)
  const { pmsUserRegistrationStore } = useStore()

  // 根据用户名搜索
  const handleSearchByName = async () => {
    setVisible(true)
    const result: any = await pmsUserRegistrationStore.getOrderInfoByName(start_date, order_name, end_date)
    console.log('resulrt 、===>>>', result)
    if (result.state) {
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
      <ActivityIndicatorOpt visible={visible} />
      <View style={styles.orderContainer}>
        <View style={styles.orderTitle}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>1</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('order_tracking')}</Text>
        </View>
        <TextInput onChangeText={(val: any) => {
          setOrderName(val)
        }} style={styles.serchOrderTextinput} placeholder={I18n.t('appointment_number')} placeholderTextColor='#333' />
        <DatePicker
          placeholder={start_date == "" ? I18n.t('check_in_date_pla') : start_date}
          androidMode="spinner"
          customStyles={{
            dateIcon: {
              display: "none"
            },
            dateInput: {
              borderWidth: 0,
              alignItems: "center",
              paddingLeft: 6,
            },
            placeholderText: {
              fontSize: px2dp(12),
              color: "#333"
            }
          }}
          style={styles.serchOrderTextinput}
          mode='date'
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date: any) => setStartDate(date)} />
        <DatePicker
          placeholder={end_date == "" ? I18n.t('check_out_date_pla') : end_date}
          androidMode="spinner"
          customStyles={{
            dateIcon: {
              display: "none"
            },
            dateInput: {
              borderWidth: 0,
              alignItems: "center",
              paddingLeft: 6,
            },
            placeholderText: {
              fontSize: px2dp(12),
              color: "#333"
            }
          }}
          style={styles.serchOrderTextinput}
          mode='date'
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date: any) => setEndDate(date)} />
      </View>
      <TouchableOpacity onPress={handleSearchByName} activeOpacity={1} style={styles.orderBottomWrapper}>
        <Text style={styles.orderBottomText}>{I18n.t('search_order_btn_text')}</Text>
        <Image style={styles.searchIcon} source={require('../../assets/arrow.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SerchNameOrder
