import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

export const styles = StyleSheet.create({
  customerServiceWrapper: {
    height: px2dp(180),
    width: px2dp(345),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: px2dp(20),
    borderRadius: px2dp(4)
  },
  emergencyContactWrapper: {
    height: px2dp(110),
    width: px2dp(345),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginVertical: px2dp(20),
    borderRadius: px2dp(4)
  },
  customerLine: {
    height: px2dp(164),
    width: px2dp(328),
    alignSelf: 'center',
    borderRadius: px2dp(4),
    borderColor: 'rgb(220, 75, 38)',
    borderWidth: px2dp(1),
    alignItems: 'center'
  },
  emergencyLine: {
    height: px2dp(94),
    width: px2dp(328),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: px2dp(4),
    borderColor: 'rgb(220, 75, 38)',
    borderWidth: px2dp(1),
  },
  customerTopTitle: {
    marginVertical: px2dp(10),
    color: 'rgb(220, 75, 38)',
    fontSize: px2dp(18),
    fontWeight: '700'
  },
  customerContentWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  customerContentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: px2dp(6)
  },
  customerImage: {
    width: px2dp(30),
    height: px2dp(30)
  },
  customerText: {
    color: '#000',
    fontSize: px2dp(16),
    marginLeft: px2dp(8)
  }
})