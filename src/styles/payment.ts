import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

export const styles = StyleSheet.create({
  paymentContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  paymentTopContainer: {
    marginTop: px2dp(30),
    paddingHorizontal: px2dp(10)
  },
  orderPrice: {
    fontSize: px2dp(18),
    color: '#333'
  },
  orderPriceNum: {
    fontSize: px2dp(18),
    color: '#333',
    marginVertical: px2dp(8)
  },
  paymentBtn: {
    height: px2dp(30),
    paddingHorizontal: px2dp(3),
    borderRadius: px2dp(3),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: px2dp(10),
    marginRight: px2dp(20),
    flexDirection: 'row'
  },
  paymentBtnText: {
    color: '#fff',
    fontSize: px2dp(12)
  },
  seleIcon: {
    width: px2dp(16),
    height: px2dp(28)
  }
})
