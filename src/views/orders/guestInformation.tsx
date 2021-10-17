
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import NavigatorUtils from '../../navigation/navigation'
import ComHeader from '../../components/ComHeader'
import { styles } from '../../styles/guestinformation'
import Accordion from 'react-native-collapsible/Accordion'
import { Picker } from '@react-native-picker/picker'
import { useStore } from '../../hooks/useStore'
import country from '../../utils/country'
import profession from '../../utils/profession'
import * as ImagePicker from 'react-native-image-picker'
import * as Progress from 'react-native-progress'
// import Progress from 'react-native-progress'
// import * as Adminatble from 'react-native-animatable'
import { height, px2dp } from '../../utils/px2dp'
import ProgressBar from '../../components/Progress'
import I18n from '../../languages'
import _ from 'lodash'

const options: any = {
  title: '选择图片',
  customButtons: [{ name: 'fb', title: '关闭' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  includeBase64: true
};
const GuestInformation = (props: any) => {
  const [activeSections, setActiveSections] = useState<any>([])
  const [selectedLanguage, setSelectedLanguage] = useState<any>()
  const [professionVal, setProfession] = useState<any>()
  const [orderOrgData, setOrderOrgData] = useState<any>({})
  const [sections, setSections] = useState<any>([])
  const [address, setAddress] = useState<string>('')
  const [username, setUserName] = useState<string>('')
  // 身份证
  const [idCard, setIDCard] = useState<string>('')
  const [idPhoto, setIDPhoto] = useState<string>('')
  const [locale, setLocale] = useState<any>('')
  const [themeOrgData, setThemeOrgData] = useState<any>(null)
  const [progress, setProgress] = useState<number>(0.01)

  const { pmsUserRegistrationStore } = useStore()

  useEffect(() => {
    async function getThemeData() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      const _data: any = JSON.parse(_initData)
      setThemeOrgData(_data)
    }
    getThemeData()
  }, [])

  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      const _data = JSON.parse(result)
      const _arr: any = []
      _arr.push(_data.customerName)
      setOrderOrgData(JSON.parse(result))
      setSections(_arr)
    }
    getOrderData();
  }, [])

  // 渲染标题
  const _renderHeader = (section: any) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.listLeftTitle}>{section}</Text>
        <Text style={styles.listRightTitle}>{I18n.t('put_away')}</Text>
      </View>
    );
  };

  // 上传证件照片
  const handleUpdateOne = () => {
    ImagePicker.launchImageLibrary(options, function (value: any) {
      if (!value.didCancel || value !== undefined) {
        setIDCard(value.assets[0].base64)
      }
    })
  }

  // 上传人像照片
  const handleUpdateTwo = () => {
    ImagePicker.launchImageLibrary(options, function (value: any) {
      if (!value.didCancel || value !== undefined) {
        setIDPhoto(value.assets[0].base64)
      }
    })
  }

  const handle_synchronize = () => { }

  // 渲染内容
  const _renderContent = (section: any) => {
    return (
      <View style={styles.listContentContainer}>
        <View style={{ width: '100%' }}>
          <Text style={styles.zlTextWrapper}>
            <Text style={styles.zlText}>{I18n.t('progress')}</Text>
          </Text>
          {/* 进度条 */}
          <View style={styles.progressBar}>
            {/* <ProgressBar /> */}
            <Progress.Bar color={'#d85533'} borderColor={'#3d5875'} unfilledColor={'#3d5875'} animationType="decay" progress={progress} width={720} />
          </View>
          <Text style={styles.listNameWrapper}>
            <Text style={styles.listName}>{I18n.t('user_name')}</Text>
          </Text>
          <TextInput onChangeText={(text: any) => {
            setProgress(0.3)
            setUserName(text)
          }} style={styles.listTextinoutName} placeholder={I18n.t('user_name_pla')} placeholderTextColor='#333' />

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <Text style={styles.citizenshipWrapper}>
              <Text style={styles.citizenship}>{I18n.t('citizenship')}</Text>
            </Text>
            <Picker selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              } style={styles.pickerContianer}>
              {country.map((item: any) => (
                <Picker.Item style={{ fontSize: 28 }} key={item} label={item.cn} value={item.cn} />
              ))}
            </Picker>
          </View>
          <View>
            <View style={styles.professionWrapper}>
              <Text style={styles.profession}></Text>
            </View>
            <Picker selectedValue={professionVal}
              onValueChange={(itemValue, itemIndex) => setProfession(itemValue)
              } style={styles.pickerContianer}>
              {profession.map((item: any) => (
                <Picker.Item style={{
                  fontSize: 28
                }} key={item} label={item.lable} value={item.value} />
              ))}
            </Picker>
          </View>
          <View style={styles.addressWrapper}>
            <View style={styles.addressContainer}>
              <Text style={styles.leftAddress}>{I18n.t('address')}</Text>
              <TouchableOpacity activeOpacity={1} onPress={handle_synchronize} >
                <Text style={styles.rightAddress}>{I18n.t('intended')}</Text>
              </TouchableOpacity>
            </View>
            <TextInput value={address} onChangeText={(text: any) => setAddress(text)} style={styles.addressTextinput} placeholder={I18n.t('address_of_residence')} placeholderTextColor='#333' />
          </View>
          <View>
            <Text style={styles.adCartWrapper}>
              <Text style={styles.adText}>{I18n.t('id_card')}</Text>
            </Text>
            <View style={styles.selectadCartWrapper}>
              <Text style={styles.cartType}>{I18n.t('certificate_type')}</Text>
              {/* <Picker>
                <Picker.Item>身份证</Picker.Item>
                <Picker.Item>护照</Picker.Item>
              </Picker> */}
            </View>
            <View style={styles.cadWrapper}>
              {idCard == "" ? <ImageBackground style={styles.cadOne} resizeMode='contain' source={require('../../assets/id_card1.png')}>
                <TouchableOpacity activeOpacity={1} onPress={handleUpdateOne} style={styles.cadOne} />
              </ImageBackground> : <TouchableOpacity activeOpacity={1} onPress={handleUpdateOne} >
                <Image resizeMode='cover' style={styles.cadOne} source={{ uri: `data:image/png;base64,${idCard}` }} />
              </TouchableOpacity>}
              {idPhoto == "" ? <ImageBackground style={styles.cadTwo} resizeMode='contain' source={require('../../assets/id_card.png')}>
                <TouchableOpacity activeOpacity={1} onPress={handleUpdateTwo} style={styles.cadTwo} />
              </ImageBackground> : <TouchableOpacity activeOpacity={1} onPress={handleUpdateTwo}>
                <Image resizeMode='cover' style={styles.cadTwo} source={{ uri: `data:image/png;base64,${idPhoto}` }} />
              </TouchableOpacity>}
              <Text style={styles.cardInfoDesc}>*{I18n.t('cardInfoDesc')}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // 选择的对应列
  const _updateSections = (activeSections: any) => {
    setActiveSections(activeSections)
  };

  // 提交
  const handleSubmit = async () => {
    const data = {
      name: username,
      roomId: orderOrgData.roomId,
      orderId: orderOrgData.id,
      contactAddress: address,
      userCardPhoto1: idCard,
      userCardPhoto2: idPhoto,
      userOccupation: professionVal,
    }
    // console.log('data ==>>', data)
    // console.log(orderOrgData)
    const result: any = await pmsUserRegistrationStore.add_pmsUserRegistration(data)
    console.log('result ==>>', result)

    if (result.state) {
      NavigatorUtils.navigation(props.navigation, 'roomPassword')
    }
  }

  return (
    <SafeAreaView style={{ height: height, backgroundColor: '#fff', paddingBottom: px2dp(10) }}>
      <ComHeader {...props} setLocale={setLocale} />
      <View>
        <View style={[styles.orderTitle, { backgroundColor: themeOrgData ? `${themeOrgData.themeColorMain}` : '' }]}>
          <View style={styles.orderLeftNum}>
            <Text style={styles.orderLeftNumText}>4</Text>
          </View>
          <Text style={styles.orderLeftText}>{I18n.t('guest_information')}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.guestinformationContianer}>
          {console.log('sections==sections', '1442346865395003394', sections)}
          {/* <Accordion
            sections={sections}
            activeSections={activeSections}
            // touchableComponent={TouchableOpacity}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            underlayColor={'#fff'}
            renderAsFlatList={false}
          /> */}
          <Accordion
            activeSections={activeSections}
            sections={sections}
            touchableComponent={TouchableOpacity}
            // expandMultiple={multipleSelect}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            duration={100}
            onChange={_updateSections}
            renderAsFlatList={false}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} activeOpacity={1} style={styles.expressBottomContainer}>
          <Text style={styles.bottomText}>{I18n.t('submit_review')}</Text>
          <Image style={styles.bottomIcon} source={require('../../assets/arrow.png')} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default GuestInformation
