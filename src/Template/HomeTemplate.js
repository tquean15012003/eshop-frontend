import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeHeader from './HomeHeader'

export default function HomeTemplate(props) {
    const { Component } = props

    return (
        <Box
            width="100%"
            min-height="100vh"
        >
            <Box>
                <HomeHeader />
                <Component />
            </Box>
        </Box>
    )
}
