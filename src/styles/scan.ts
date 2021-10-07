import { StyleSheet } from 'react-native'
import { height, width } from '../utils/px2dp'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scan_top_box: {
    position: "absolute",
    left: 20,
    top: 20,
    width: 24,
    height: 24
  },
  scan_camera: {
    flex: 1,
    height: height
  },
  scan_cont_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  scan_cont_circle: {
    width: 260,
    height: 260,
    borderWidth: 1,
    borderColor: '#919191',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  scan_circle_init: {
    width: 250,
    height: 1,
    backgroundColor: '#00ff00'
  },
  scan_info_box: {
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    width: width
  },
  scan_info: {
    color: '#fff'
  },
  info: {
    width: width,
    height: 80,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingBottom: 5,
    justifyContent: 'space-around',
  }
})