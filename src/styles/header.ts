import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

export const styles = StyleSheet.create({
  comHeaderConatainer: {
    marginTop: px2dp(10),
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  comHeaderRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: px2dp(16)
  },
  iconWrapper: {
    width: px2dp(30),
    height: px2dp(30),
    // backgroundColor: '#333',
    borderRadius: px2dp(30/2),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: px2dp(3)
  },
  icon: {
    width: px2dp(17),
    height: px2dp(17)
  },
  defaultLanguageFont: {
    fontSize: 26,
  },
  defaultLanguage: {
    width: px2dp(100),
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ddd',
    borderTopWidth: px2dp(1),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(1),
    paddingVertical: px2dp(3),
    alignItems: 'center'
  },
  line: {
    width: px2dp(.6),
    height: px2dp(10),
    backgroundColor: '#000'
  }
})