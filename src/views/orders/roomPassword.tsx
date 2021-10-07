
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import NavigatorUtils from '../../navigation/navigation'
import ComHeader from '../../components/ComHeader'
import { styles } from '../../styles/roomPassword'
import I18n from '../../languages'

const RoomPassword = (props: any) => {
  const [locale, setLocale] = useState<any>('')
  return (
    <SafeAreaView>
      <ComHeader {...props} setLocale={setLocale} />
      <View>
        <View style={styles.orderTitle}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>5</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('room_password')}</Text>
        </View>
      </View>
      <View style={styles.roomPasswordContent}>
        <Text style={styles.romNum}>{I18n.t('room_no')}: 210</Text>
      </View>
      <View style={styles.roomDesc}>
        <Text style={styles.roomPwd}>{I18n.t('door_code')} : 233521</Text>
        <Text style={styles.roomText}>{I18n.t('pwd_t_text')}</Text>
        <Text style={styles.roomText}>{I18n.t('pwd_b_text')}:</Text>
        <Text style={styles.roomText}>dfdf@gmail.com</Text>
      </View>
      <View>
        <TouchableOpacity activeOpacity={1} style={styles.expressBottomContainer}>
          <Text style={styles.bottomText}>{I18n.t('save_close')}</Text>
          <Image style={styles.bottomIcon} source={require('../../assets/arrow.png')}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.expressBottomContainer}>
          <Text style={styles.bottomText}>{I18n.t('continue_to_login')}</Text>
          <Image style={styles.bottomIcon} source={require('../../assets/arrow.png')}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RoomPassword
