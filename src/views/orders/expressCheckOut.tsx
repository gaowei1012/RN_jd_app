import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import NavigatorUtils from '../../navigation/navigation'
import { useStore } from '../../hooks/useStore'
import ComHeader from '../../components/ComHeader'
import { styles } from '../../styles/express'
import RootToast from '../../utils/toast'
import I18n from '../../languages'


const ExpressCheckOut = (props: any) => {
  const [room_num, setRoomNum] = useState<any>(null)
  const [room_pwd, setRoomPwd] = useState<any>(null)
  const [locale, setLocale] = useState<any>('')

  const { pmsUserRegistrationStore } = useStore()

  // 退房
  const rooMcheckOut = async () => {
    // RootToast.showToast('退房成功')
    const data = {
      houseResourcesId: room_num,
      roomLockPwd: room_pwd,
      roomNo: ''
    }
    const result = await pmsUserRegistrationStore.checkOut_pmsUserRegistration(data)
    console.log('==>>', result)
    // 退房成功
    // 跳转到首页
    if (result) {
      NavigatorUtils.navigation(props.navigation,'home')
    }
  }

  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={styles.orderTitle}>
        <View style={styles.orderLeftNum}>
          <Text style={styles.orderLeftNumText}>6</Text>
        </View>
        <Text style={styles.orderLeftText}>{I18n.t('check_out')}</Text>
      </View>
      <View style={styles.expressCheckoutContainer}>
        <TextInput placeholderTextColor='#333' onChangeText={(val: any) => {
          setRoomNum(val)
        }} style={styles.expressTextinput} placeholder={I18n.t('room_number_pla')} />
        <TextInput placeholderTextColor='#333' secureTextEntry={true} onChangeText={(val: any) => {
          setRoomPwd(val)
        }} style={styles.expressTextinput} placeholder={I18n.t('room_pwd_pla')} />
        <TouchableOpacity onPress={rooMcheckOut} activeOpacity={1} style={styles.expressBottomContainer}>
          <Text style={styles.bottomText}>{I18n.t('confirm_check_out')}</Text>
          <Image style={styles.seleIcon} source={require('../../assets/arrow.png')} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default ExpressCheckOut
