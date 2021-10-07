import React from 'react'
import { StoreProvider } from './hooks/useStore'
import BaseNavigationContainer from './navigation/AppNavigation'
import { StripeProvider } from '@stripe/stripe-react-native'

const BaseStores = () => {
  return (
    <StoreProvider>
      <StripeProvider publishableKey="pk_test_AtN3VLAFhzbLNqf3Y9z50iNQ"
        merchantIdentifier="merchant.identifier">
        <BaseNavigationContainer />
      </StripeProvider>
    </StoreProvider>
  )
}

export default BaseStores
