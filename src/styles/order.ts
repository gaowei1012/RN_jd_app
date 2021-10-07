import { StyleSheet } from 'react-native'
import { height, px2dp, width } from '../utils/px2dp'

export const styles = StyleSheet.create({
  orderContainer: {
    
  },
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
  orderTextinput: {
    backgroundColor: '#fff',
    borderRadius: px2dp(8),
    marginVertical: px2dp(16),
    justifyContent: 'center',
    alignSelf: 'center',
    width: px2dp(350),
    fontSize: px2dp(13),
    textAlign: 'center',
    color: '#333'
  },
  serchOrderTextinput: {
    backgroundColor: '#fff',
    borderRadius: px2dp(8),
    marginVertical: px2dp(8),
    justifyContent: 'center',
    alignSelf: 'center',
    width: px2dp(350),
    fontSize: px2dp(12),
    textAlign: 'center',
    height: px2dp(30),
    alignItems: 'center',
    borderWidth: 0,
  },
  searchOrderText: {
    fontSize: px2dp(13)
  },
  orderBottomWrapper: {
    height: px2dp(30),
    paddingHorizontal: px2dp(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: px2dp(4),
    marginTop: px2dp(10),
    flexDirection: 'row',
  },
  orderBottomText: {
    color: '#fff',
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  orderIcon: {
    width: px2dp(16),
    height: px2dp(28)
  },
  // 选择订单
  seleOrderContainer: {
    backgroundColor: '#fff',
    marginTop: px2dp(-1),
    height: height,
    borderTopRightRadius: px2dp(3),
    borderTopLeftRadius: px2dp(3),
    flexDirection: 'column',
  },
  seleOrderTopContainer: {
    flexDirection: 'row'
  },
  seleOrderTopTitle: {
    marginTop: px2dp(8),
    marginLeft: px2dp(20),
    width: px2dp(40),
    height: px2dp(20),
    borderTopLeftRadius: px2dp(3),
    borderTopRightRadius: px2dp(3),
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',
    borderTopColor: '#ddd',
    borderTopWidth: px2dp(.6),
    borderRightWidth: px2dp(.6),
    borderLeftWidth: px2dp(.6),
    borderBottomColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  seleOrderLine: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.6),
    height: px2dp(28),
    width: px2dp(290)
  },
  seleOrderTitleText: {
    fontSize: px2dp(10)
  },
  orderListWrapper: {
    width: px2dp(330),
    marginTop: px2dp(20),
    alignSelf: 'center'
  },
  orderItem: {
    width: px2dp(330),
    height: px2dp(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.6),
    marginBottom: px2dp(10),
    paddingBottom: px2dp(6)
  },
  orderText: {
    color: '#000',
    fontSize: px2dp(12),
    // backgroundColor: 'rgb(243,212,213)'
  },
  orderSureContainer: {
    // width: px2dp(80),
    height: px2dp(30),
    paddingHorizontal: px2dp(3),
    borderRadius: px2dp(3),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: px2dp(10),
    marginRight: px2dp(20),
    flexDirection: 'row',
  },
  orderSureText: {
    color: '#fff',
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  seleIcon: {
    width: px2dp(16),
    height: px2dp(28)
  },
  orderBottomWContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  orderBottomCheckBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: px2dp(10),
    marginRight: px2dp(20)
  },
  orderBottomCheckBox: {
    marginTop: px2dp(2),
  },
  orderBottomCheckText: {
    color: '#333',
    fontSize: px2dp(10)
  },
  // 付款 
  commentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: px2dp(6)
  },
  commentContainerText: {
    fontSize: 16
  },
  searchIcon: {
    width: px2dp(16),
    height: px2dp(28)
  }
})
