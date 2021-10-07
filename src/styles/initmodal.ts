import { StyleSheet } from 'react-native'
import { px2dp, height, width } from '../utils/px2dp'

export const styles = StyleSheet.create({
  modal_container: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .45)',
    overflow: 'hidden',
  },
  content_container: {
    width: px2dp(225),
    height: px2dp(164),
    backgroundColor: '#fff',
    borderRadius: px2dp(6)
  },
  initTextinput: {
    marginTop: px2dp(30),
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: px2dp(20),
    color: '#333'
  },
  initBottom: {
    width: '100%',
    height: px2dp(36),
    backgroundColor: '#D2D2D2',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: px2dp(6),
    borderBottomEndRadius: px2dp(6)
  },
  initBtnText: {
    fontSize: px2dp(18)
  }
})