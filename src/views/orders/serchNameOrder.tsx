import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ComHeader from '../../components/ComHeader'
import NavigatorUtils from '../../navigation/navigation'
import DatePicker from 'react-native-datepicker'
import { useStore } from '../../hooks/useStore'
import { styles } from '../../styles/order'
import { ToastAndroid } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import I18n from '../../languages'

const SerchNameOrder = (props: any) => {
  // yik lam wong
  const [order_name, setOrderName] = useState<string>('')
  const [start_date, setStartDate] = useState('')
  const [end_date, setEndDate] = useState('')
  const [locale, setLocale] = useState<any>('')
  const [themeOrgData, setThemeOrgData] = useState<any>(null)
  const [hotelId, setHotelId] = useState<string>('')
  const { pmsUserRegistrationStore } = useStore()

  useEffect(() => {
    async function getThemeData() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _hotelId: any = await AsyncStorage.getItem('hotelId')
      const _data: any = JSON.parse(_initData)
      setHotelId(_hotelId)
      setThemeOrgData(_data)
    }
    getThemeData()
  }, [])

  // 根据用户名搜索
  const handleSearchByName = async () => {
    const result: any = await pmsUserRegistrationStore.getOrderInfoByName(start_date, order_name, end_date, hotelId)
    if (result.state) {
      if (result.opt.length > 0) {
        await AsyncStorage.setItem('orderData', JSON.stringify(result.opt))
        NavigatorUtils.navigation(props.navigation, 'seleOrders')
      } else {
        ToastAndroid.show('暂无入住人信息！请检查输入。', 1000)
      }
    }
  }

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={styles.orderContainer}>
        <View style={[styles.orderTitle, { backgroundColor: themeOrgData ? `${themeOrgData.themeColorMain}` : '' }]}>
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
