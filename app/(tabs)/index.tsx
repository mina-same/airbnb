import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        Login
      </Link>
      <Link href={"/(modals)/login"}>
        Booking
      </Link>
      <Link href={'/Listing/1224'}>
        listing details page
      </Link>
    </View>
  )
}

export default Page