import { StyleSheet } from 'react-native'
import { px2dp } from '../utils/px2dp'

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor:'#fff',
  },
  topLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: px2dp(30)
  },
  logo: {
    width: px2dp(80),
    height: px2dp(80)
  },
  topTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: px2dp(10),
    fontSize: px2dp(16),
  },
  topTitleSty: {
    color: '#000',
    fontSize: px2dp(16),
    // backgroundColor: 'rgb(243,212,213)'
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: px2dp(40)
  },
  contentFlexColums: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  checkInContainer: {
    height: px2dp(38),
    width: px2dp(200),
    borderRadius: px2dp(6),
    borderColor: 'rgb(197,90,55)',
    borderWidth: px2dp(.4),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: px2dp(30),
    flexDirection: 'row'
  },
  checkDefaultFontSty: {
    fontSize: px2dp(26),
    color: '#fff',
  },
  bottomLanguage: {
    marginTop: px2dp(30),
    width: px2dp(130),
    alignSelf: 'center'
  },
  defaultLanguageFont: {
    fontSize: 26,
  },
  defaultLanguage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopColor: '#ddd',
    borderTopWidth: px2dp(1),
    borderBottomColor: '#ddd',
    borderBottomWidth: px2dp(1),
    paddingVertical: px2dp(3),
    alignItems: 'center'
  },
  defaultFlexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: px2dp(10)
  },
  defaultFontSmail: {
    fontSize: 16,
    color: '#000',
    // backgroundColor: 'rgb(243,212,213)'
  },
  rightWrapper: {
    height: px2dp(38),
    width: px2dp(160),
    borderRadius: px2dp(6),
    // backgroundColor: 'rgb(197,90,55)',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightDarkWrapper: {
    height: px2dp(38),
    width: px2dp(160),
    borderRadius: px2dp(6),
    backgroundColor: 'rgb(36,48,51)',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center'
  },
  kfIcon: {
    marginLeft: px2dp(10),
    width: px2dp(20),
    height: px2dp(20)
  },
  kfIcon0: {
    marginLeft: px2dp(10),
    width: px2dp(24),
    height: px2dp(24),
    borderColor: '#d85533',
    borderWidth: px2dp(.4),
    borderRadius: px2dp(1),
  },
  line: {
    width: px2dp(.6),
    height: px2dp(13),
    backgroundColor: '#000'
  },
  activeText: {
    color: 'rgb(36,48,51)',
  }
})