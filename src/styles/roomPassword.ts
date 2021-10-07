import { StyleSheet } from 'react-native'
import { height, px2dp, width } from '../utils/px2dp'

export const styles = StyleSheet.create({
  orderTitle: {
    width: width,
    backgroundColor: '#D85533',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: px2dp(8),
    paddingVertical: px2dp(6),
    marginTop: px2dp(20),
    borderTopLeftRadius: px2dp(4),
    borderTopRightRadius: px2dp(4)
  },
  orderLeftNum: {
    width: px2dp(20),
    height: px2dp(20),
    alignItems: 'center',
    borderRadius: px2dp(20/2),
    borderWidth: px2dp(.6),
    borderColor: '#fff',
  },
  orderLeftNumText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: px2dp(16),
    height: px2dp(20),
    lineHeight: px2dp(20)
  },
  orderLeftText: {
    color: '#fff',
    marginLeft: px2dp(6),
    fontSize: px2dp(14)
  },
  roomPasswordContent: {
    width: px2dp(320),
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: px2dp(10),
    paddingBottom: px2dp(6),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.6)
  },
  romNum: {
    fontSize: px2dp(14),
    color: '#fff',
    backgroundColor: 'rgb(12,43,42)'
  },
  roomDesc: {
    alignItems: 'center'
  },
  roomPwd: {
    color: '#000',
    fontSize: px2dp(14),
    marginBottom: px2dp(8),
    // backgroundColor: 'rgb(243,212,213)'
  },
  roomText: {
    color: '#000',
    fontSize: px2dp(10),
    marginBottom: px2dp(5),
    // backgroundColor: 'rgb(243,212,213)'
  },
  expressBottomContainer: {
    height: px2dp(30),
    paddingHorizontal: px2dp(3),
    borderRadius: px2dp(3),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: px2dp(14),
    marginRight: px2dp(20),
    flexDirection:'row'
  },
  bottomText: {
    color: '#fff',
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  bottomIcon: {
    width: px2dp(16),
    height: px2dp(28)
  }
})