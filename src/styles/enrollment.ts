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
    fontSize: px2dp(16)
  },
  topTitleSty: {
    color: '#000',
    fontSize: px2dp(16),
    // backgroundColor: 'rgb(243,212,213)'
  },
  enrollmentContainer: {
    width: px2dp(220),
    height: px2dp(160),
    marginTop: px2dp(30),
    alignItems: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: px2dp(6),
    borderColor: '#d9d9d9',
    borderWidth: px2dp(1)
  },

  bottomLanguage: {
    marginTop: px2dp(50),
    width: px2dp(150),
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
    paddingVertical: px2dp(3)
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
  rzWrapper: {
    marginTop: px2dp(10),
    flexDirection: 'row',
    alignItems: 'center',
    // width: px2dp(86),
    justifyContent:"space-between",
  },
  rzText: {
    color: '#333',
    fontSize: 32,
    // backgroundColor: 'rgb(243,212,213)'
  },
  downIcon: {
    width: px2dp(16),
    height: px2dp(12)
  },
  rudjWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    alignContent: 'center',
    paddingLeft: px2dp(38),
    marginVertical: px2dp(10),
  },
  rudjIcon: {
    width: px2dp(18),
    height: px2dp(18),
  },
  rudjText: {
    color: '#333',
    fontSize: 32,
    marginLeft: px2dp(10),
    // backgroundColor: 'rgb(243,212,213)'
  }
})
