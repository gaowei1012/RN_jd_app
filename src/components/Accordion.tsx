import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import { styles } from '../styles/accordion'

const AccordionOpt = (props: any) => {

  return (
    <View style={styles.accrdionContainer}>
      <View>
        <Text>①</Text>
        <Text>訂單查詢</Text>
      </View>
      <View>
        <Text>{'>'}</Text>
      </View>
    </View>
  )
}

export default AccordionOpt
