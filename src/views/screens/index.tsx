import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  CardField,
  CardFieldInput,
  useStripe,
} from '@stripe/stripe-react-native'

const PaymentScreens = (props: any) => {
  const [card, setCard] = useState(null);
  const { confirmPayment, handleCardAction } = useStripe()
  return (
    <CardField
      postalCodeEnabled={true}
      placeholder={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
        placeholderColor: '#000000'
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails: any) => {
        setCard(cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
  )
}

export default PaymentScreens
