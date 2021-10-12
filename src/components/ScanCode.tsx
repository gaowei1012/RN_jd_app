import { RNCamera } from 'react-native-camera';
import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  PermissionsAndroid,
  default as Easing,
  ImageBackground,
  View,
  Text,
} from 'react-native';
import { px2dp, width } from '../utils/px2dp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigatorUtils from '../navigation/navigation';
import { useStore } from '../hooks/useStore'
import I18n from '../languages'

let camera;

const ScanQRCode = (props: any) => {
  const moveAnim = useRef(new Animated.Value(-6)).current;
  const { pmsUserRegistrationStore } = useStore()
  useEffect(() => {
    requestCameraPermission();
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //请求权限的方法
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '申请摄像头权限',
          message: '扫描二维码需要开启相机权限',
          buttonNeutral: '等会再问我',
          buttonNegative: '不行',
          buttonPositive: '好吧',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('现在你获得摄像头权限了');
      } else {
        console.log('用户没有允许相机权限');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  /** 扫描框动画*/
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        toValue: 2000,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        toValue: -1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => startAnimation());
  };
  const onBarCodeRead = async (result: any) => {
    const { data } = result; 
    //只要拿到data就可以了
    // 扫码成功， 获取当前扫码房间信息
    const _params = data.split('/')[4].split('?')[1].split('=')[1]
    const response: any = await pmsUserRegistrationStore.getOrderInfoByResId_pmsUserRegistration(_params)
    if (response.state) {
      await AsyncStorage.setItem('orderData', JSON.stringify(response.opt))
      NavigatorUtils.navigation(props.navigation, 'seleOrders')
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          camera = ref;
        }}
        autoFocus={RNCamera.Constants.AutoFocus.on} /*自动对焦*/
        style={[styles.preview]}
        type={RNCamera.Constants.Type.back} /*切换前后摄像头 front前back后*/
        flashMode={RNCamera.Constants.FlashMode.off} /*相机闪光模式*/
        onBarCodeRead={onBarCodeRead}>
        <View
          style={{
            width: width,
            height: px2dp(180),
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />

        <View style={[{ flexDirection: 'row' }]}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: px2dp(200),
              width: px2dp(200),
            }}
          />
          <ImageBackground
            source={require('../assets/qrcode_bg.png')}
            style={{ width: px2dp(200), height: px2dp(200) }}>
            <Animated.View
              style={[styles.border, { transform: [{ translateY: moveAnim }] }]}
            />
          </ImageBackground>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: px2dp(200),
              width: px2dp(200),
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: width,
            alignItems: 'center',
          }}>
          <Text style={styles.rectangleText}>
            {I18n.t('scan_code_text')}
          </Text>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rectangle: {
    height: px2dp(200),
    width: px2dp(200),
    borderWidth: 1,
    borderColor: '#fcb602',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10,
  },
  border: {
    flex: 0,
    width: px2dp(196),
    height: 2,
    backgroundColor: '#fcb602',
    borderRadius: 50,
  },
});

export default ScanQRCode;