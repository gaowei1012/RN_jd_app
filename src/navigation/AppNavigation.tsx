import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

// components
import App from '../views/app'
import Enrollment from '../views/enrollment/enrollment'
import ScanCode from '../views/enrollment/scanCode'
import CustomerService from '../views/customerService'
import OrderTracking from '../views/orders/orderTracking'
import SerchNameOrder from '../views/orders/serchNameOrder'
import SeleOrders from '../views/orders/seleOrders'
import GuestInformation from '../views/orders/guestInformation'
import ExpressCheckOut from '../views/orders/expressCheckOut'
import RoomPassword from '../views/orders/roomPassword'
import Pay from '../views/orders/pay'
import ScanQRCode from '../components/ScanCode'
import PaymentScreens from '../views/screens/index'

const Stack = createNativeStackNavigator()

const BaseNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="home">
        <Stack.Screen name='home' component={App} />
        <Stack.Screen name='enrollment' component={Enrollment} />
        <Stack.Screen name='scancode' component={ScanCode}/>
        <Stack.Screen name='customer' component={CustomerService} />
        <Stack.Screen name='orderTracking' component={OrderTracking} />
        <Stack.Screen name='serchNameOrder' component={SerchNameOrder} />
        <Stack.Screen name='seleOrders' component={SeleOrders} />
        <Stack.Screen name='pay' component={Pay}/>
        <Stack.Screen name='guestInformation' component={GuestInformation} /> 
        <Stack.Screen name='expressCheckOut' component={ExpressCheckOut} />
        <Stack.Screen name='roomPassword' component={RoomPassword}/>
        <Stack.Screen name='scanQRCode' component={ScanQRCode}/>
        <Stack.Screen name='paymentScreens' component={PaymentScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BaseNavigationContainer
