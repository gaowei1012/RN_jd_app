import React, { useState, useEffect } from 'react'
import { Svg, G, Path } from 'react-native-svg'
import { Animated } from 'react-native'
import { width } from '../utils/px2dp'


let AnimatedPath = Animated.createAnimatedComponent(Path)

const ProgressBar = (props: any) => {

  const [lineFillAnimation, setLineFillAnimation] = useState<any>(new Animated.Value(0))
  const [lineAnimation, setLineAnimation] = useState<any>(null)

  useEffect(() => {
    let _lineAnimation = lineFillAnimation.interpolate({
      inputRange: [
        0,
        100
      ],
      outputRange: [
        `M5 8 l0 0`,
        `M5 8 l215 0`,
      ]
    })
    setLineAnimation(_lineAnimation)
  }, [])

  const getSVGRootProps = () => ({
    width: "100%",
    height: "15",
    viewBox: `0 0 ${width} 15`,
    preserveAspectRatio: "xMinYMin meet",
  });

  const start_animation = () => {
    setLineFillAnimation(lineFillAnimation.setValue(0))
    const _options: any = {
      toValue: 20,
      friction: 5,
      tension: 35
    }
    Animated.spring(lineFillAnimation, _options).start()
  }

  return (
    <Svg {...getSVGRootProps()}>
      <G fill='none' stroke='#3d5875'>
        <Path strokeLinecap="round" strokeWidth="8" d="M5 8 l215 0" />
      </G>
      <G fill="none" stroke="#d85533">
        <AnimatedPath strokeLinecap="round" strokeWidth="8" d={lineAnimation} />
      </G>
    </Svg>
  )
}

export default ProgressBar