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
    borderRadius: px2dp(20 / 2),
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
  guestinformationContianer: {
    // height: '100%',
    marginTop: px2dp(-1),
    borderTopLeftRadius: px2dp(3),
    borderTopRightRadius: px2dp(3),
  },
  listContainer: {
    flexDirection: 'row',
    height: px2dp(30),
    width: px2dp(340),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: px2dp(8),
    alignItems: 'center',
    paddingHorizontal: px2dp(8),
    borderBottomWidth: px2dp(.4),
    borderBottomColor: '#ddd'
  },
  listLeftTitle: {
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  listRightTitle: {
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  listContentContainer: {
    flexDirection: 'row',
    width: px2dp(340),
    alignSelf: 'center',
  },
  zlTextWrapper: {
    marginTop: px2dp(6),
    paddingBottom: px2dp(4),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
  },
  zlText: {
    color: '#000',
    fontSize: px2dp(12),
    width: px2dp(100),
    // backgroundColor: 'rgb(243,212,213)',
  },
  progressBar: {
    marginVertical: px2dp(6),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
  },
  listNameWrapper: {
    marginTop: px2dp(6),
    paddingBottom: px2dp(4),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    width: '100%',
  },
  listName: {
    color: '#000',
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)',
    width: '100%'
  },
  listTextinoutName: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    textAlign: 'center',
    width: px2dp(350),
    fontSize: px2dp(14),
    color: '#333'
  },
  citizenshipWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    paddingBottom: px2dp(3),
    paddingLeft: px2dp(3),
    paddingRight: px2dp(3),
    marginTop: px2dp(6)
  },
  citizenship: {
    color: '#000',
    fontSize: px2dp(14),
    // width: px2dp(30),
    // backgroundColor: 'rgb(243,212,213)'
  },
  professionWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    paddingBottom: px2dp(3),
    paddingLeft: px2dp(3),
    paddingRight: px2dp(3)
  },
  profession: {
    color: '#000',
    fontSize: px2dp(14)
  },
  addressWrapper: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4)
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: px2dp(4),
    marginVertical: px2dp(4),
    paddingBottom: px2dp(4),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
  },
  addressTextinput: {
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    textAlign: 'center',
    width: px2dp(350),
    fontSize: px2dp(14),
    color: '#333',
  },
  pickerContianer: {
    fontSize: px2dp(14),
    borderWidth: px2dp(.6),
    borderColor: '#ddd'
  },
  leftAddress: {
    color: '#000',
    fontSize: px2dp(13),
    // backgroundColor: 'rgb(243,212,213)'
  },
  rightAddress: {
    color: '#000',
    fontSize: px2dp(13),
    // backgroundColor: 'rgb(243,212,213)'
  },
  adCartWrapper: {
    marginTop: px2dp(4),
    paddingLeft: px2dp(4),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(.4),
    paddingBottom: px2dp(4),
  },
  adText: {
    color: '#000',
    fontSize: px2dp(14),
    // backgroundColor: 'rgb(243,212,213)'
  },
  selectadCartWrapper: {
    marginTop: px2dp(6),
    alignSelf: 'center',
    width: px2dp(350),
    alignItems: 'center',
    borderBottomColor: '#ddd',
    paddingBottom: px2dp(6),
    borderBottomWidth: px2dp(.4),
  },
  cartType: {
    color: '#000',
    fontSize: px2dp(12),
    // backgroundColor: 'rgb(243,212,213)'
  },
  cadWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingVertical: px2dp(10)
  },
  cadOne: {
    width: px2dp(200),
    height: px2dp(100),
    borderRadius: px2dp(4),
    marginVertical: px2dp(20)
  },
  cadTwo: {
    width: px2dp(200),
    height: px2dp(100),
    borderRadius: px2dp(4)
  },
  cardInfoDesc: {
    color: '#333',
    fontSize: px2dp(10),
    marginTop: px2dp(8),
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
    marginTop: px2dp(10),
    flexDirection: 'row',
    marginBottom: px2dp(30)
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
