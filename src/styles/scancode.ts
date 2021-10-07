import { StyleSheet } from 'react-native'
import { px2dp, width } from '../utils/px2dp'

export const styles = StyleSheet.create({
  scanCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: px2dp(30)
  },
  scanCodeTitle: {
    color: '#000',
    fontSize: px2dp(18),
    // backgroundColor: 'rgb(243,212,213)'
  },
  scanCodeImg: {
    width: width,
    height: px2dp(200)
  },
  scanCodeDesc: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: px2dp(15),
    marginHorizontal: px2dp(15)
  },
  scanCodeDescText: {
    color: '#000',
    fontSize: px2dp(13),
    // backgroundColor: 'rgb(243,212,213)'
  },
  scanCodeBottom: {
    alignSelf: 'center',
    height: px2dp(26),
    backgroundColor: '#333',
    borderRadius: px2dp(6),
    paddingHorizontal: px2dp(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  scanCodeBottomText: {
    color: '#fff',
    fontSize: px2dp(10),
    // backgroundColor: 'rgb(243,212,213)'
  },
  scanIcon: {
    width: px2dp(16),
    height: px2dp(28)
  }
})
