import { Box } from '@chakra-ui/react'
import React from 'react'
import BestSellers from './BestSellers'
import HomeBanner from './HomeBanner'
import NewArrivals from './NewArrivals'

export default function Home() {
  return (
    <Box>
      <HomeBanner/>
      <NewArrivals/>
      <BestSellers/>
    </Box>
  )
}
