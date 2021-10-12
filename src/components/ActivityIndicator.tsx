import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'
import { height, width } from '../utils/px2dp'

const ActivityIndicatorOpt = (props: any) => {
  const { visible } = props
  return (
    <Modal animationType='fade' transparent={true} visible={visible}>
      <View style={{
        width: width,
        height: height,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(178,178,178,0.4)'
      }}>
        <ActivityIndicator animating size='large'/>
      </View>
    </Modal>
  )
}

export default ActivityIndicatorOpt
