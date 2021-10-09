import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useStore } from '../hooks/useStore'
import { styles } from '../styles/initmodal'
import I18n from '../languages/index'

const InitModal = (props: any) => {
  // 酒店ID
  // 1399252918863622146
  // 暂时默认酒店ID
  const [jdId, setJdId] = useState<string>('')
  const { visible, setVisible } = props
  const { pmsAppThemeStore } = useStore()

  // 提交
  const handleSubmit = async () => {
    // 当未填写时不能进入
    if (jdId !== '') {
      const result: any = await pmsAppThemeStore.get_theme_data(jdId)
      console.log(result)
      if (result.state) {
        console.log('__result', result)
        await AsyncStorage.setItem('initTheme', JSON.stringify(result))
        setVisible(false)
      }
    }
  }

  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.modal_container}>
        <View style={styles.content_container}>
          <TextInput autoCompleteType='cc-number' style={styles.initTextinput} placeholder={I18n.t('hotel_id')} placeholderTextColor='#333' onChangeText={(val: any) => {
            setJdId(val)
          }} />
          <TouchableOpacity style={styles.initBottom} activeOpacity={1} onPress={handleSubmit}>
            <Text style={styles.initBtnText}>{I18n.t('comfirm')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default InitModal
