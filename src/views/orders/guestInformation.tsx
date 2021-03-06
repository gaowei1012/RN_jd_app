
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView, Image, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImagePicker from 'react-native-image-picker'
import NavigatorUtils from '../../navigation/navigation'
import ComHeader from '../../components/ComHeader'
import { styles } from '../../styles/guestinformation'
import Accordion from 'react-native-collapsible/Accordion'
import { Picker } from '@react-native-picker/picker'
import { useStore } from '../../hooks/useStore'
import profession from '../../utils/profession'
import country from '../../utils/country'
import * as Progress from 'react-native-progress'
import { height, px2dp } from '../../utils/px2dp'
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
  const [progress, setProgress] = useState<number>(0.0)

  console.log('progress ==>>', progress)

  const { pmsUserRegistrationStore } = useStore()

  useEffect(() => {
    async function getThemeData() {
      const _initData: any = await AsyncStorage.getItem('initTheme')
      console.log('JSON.parse(_initData)', JSON.parse(_initData))
      setThemeOrgData(JSON.parse(_initData))
    }
    getThemeData()
  }, [])

  useEffect(() => {
    async function getOrderData() {
      const result: any = await AsyncStorage.getItem('orderData')
      const _data = JSON.parse(result)
      const _arr: any = []
      // _.pull(JSON.parse(result), 'customerName')
      _arr.push(_data.customerName)
      setOrderOrgData(JSON.parse(result))
      setSections(_arr)
      console.log('orderData', _data)
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
        setProgress(0.9)
      }
    })
  }

  // 上传人像照片
  const handleUpdateTwo = () => {
    ImagePicker.launchImageLibrary(options, function (value: any) {
      if (!value.didCancel || value !== undefined) {
        setIDPhoto(value.assets[0].base64)
        setProgress(1.0)
      }
    })
  }

  const handle_synchronize = () => {
    // setProgress(0.64)
  }

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
            <Progress.Bar color={'#d85533'} borderColor={'#3d5875'} unfilledColor={'#3d5875'} animationType="spring" progress={progress} width={720} />
          </View>
          <Text style={styles.listNameWrapper}>
            <Text style={styles.listName}>{I18n.t('user_name')}</Text>
          </Text>
          <TextInput onChangeText={(text: any) => {
            setUserName(text)
            setProgress(0.167)
          }} style={styles.listTextinoutName} placeholder={I18n.t('user_name_pla')} placeholderTextColor='#333' />

          <View style={{ width: '100%', flexDirection: 'column' }}>
            <Text style={styles.citizenshipWrapper}>
              <Text style={styles.citizenship}>{I18n.t('citizenship')}</Text>
            </Text>
            <Picker selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedLanguage(itemValue)
                setProgress(0.32)
              }
              } style={styles.pickerContianer}>
              {country.map((item: any) => (
                <Picker.Item style={{ fontSize: 28 }} key={item} label={item.cn} value={item.cn} />
              ))}
            </Picker>
          </View>
          <View>
            <View style={styles.professionWrapper}>
              <Text style={styles.profession}>{I18n.t('profession')}</Text>
            </View>
            <Picker selectedValue={professionVal}
              onValueChange={(itemValue, itemIndex) => {
                setProfession(itemValue)
                setProgress(0.48)
              }
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
            <TextInput value={address} onChangeText={(text: any) => {
              setAddress(text)
              setProgress(0.64)
            }} style={styles.addressTextinput} placeholder={I18n.t('address_of_residence')} placeholderTextColor='#333' />
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
      roomId: orderOrgData.roomId, // 房间ID
      orderId: orderOrgData.id, // 订单ID
      contactAddress: address, // 联系地址
      userCardPhoto1: idCard,
      userCardPhoto2: idPhoto,
      userOccupation: professionVal, // 用户职业
      agentName: '', // 供应商名称
      birthday: '', // 用户生日
      confirmationId: '', // 登录代码
      country: selectedLanguage, // 用户国家
      createBy: themeOrgData.createBy, // 创建人
      createTime: themeOrgData.fromDate, // 创建时间
      firstName: '', // 用户姓
      fromCity: '', // 上一个到访的城市
      fromurl: '', // 登录网址
      houseResourcesId: themeOrgData.houseResourceId, // 房源ID
      houseRoomTypeId: '', // 房型ID
      identityType: '', // 身份类型
      isCheckLocation: '', // 是否定位成功
      lastName: '', // 用户名
      phone: '', // 手机号
      reason: '', // 用户存在问题
      registrationTime: '', // 登记时间
      roomNo: '', // 房间号
      sex: '', // 性别
      sysOrgCode: '', // 所属部门
      toCity: '', // 下一个到访城市
      updateBy: '', // 更新人
      updateTime: '', // 更新日期
      userCardid: '', // 身份证号码
      zip: '', // 邮编
    }
    console.log('data ==>>', data)
    // console.log(orderOrgData)
    const result: any = await pmsUserRegistrationStore.add_pmsUserRegistration([data])
    console.log('result ==>>', result)

    if (result.state) {
      NavigatorUtils.navigation(props.navigation, 'roomPassword')
    }
  }

  return (
    <SafeAreaView style={{ height: height, backgroundColor: '#fff', paddingBottom: px2dp(10) }}>
      <ComHeader {...props} setLocale={setLocale} />
      <View style={[styles.orderTitle, { backgroundColor: themeOrgData ? `${themeOrgData.themeColorMain}` : '' }]}>
        <View style={styles.orderLeftNum}>
          <Text style={styles.orderLeftNumText}>4</Text>
        </View>
        <Text style={styles.orderLeftText}>{I18n.t('guest_information')}</Text>
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
