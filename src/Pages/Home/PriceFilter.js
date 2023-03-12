import { Box, Button, ButtonGroup, NumberInput, NumberInputField } from '@chakra-ui/react'
import React from 'react'

export default function PriceFilter(props) {
    const { setMinPrice, setMaxPrice, setMinPriceFilter, setMaxPriceFilter, minPrice, maxPrice } = props

    return (
        <ButtonGroup spacing='3' marginLeft="5">
            <NumberInput onChange={(e) => {
                setMinPrice(e)
            }} clampValueOnBlur={false} min={0}>
                <NumberInputField placeholder="Min price" />
            </NumberInput>
            <Box fontSize="2xl">-</Box>
            <NumberInput onChange={(e) => {
                setMaxPrice(e)
            }} clampValueOnBlur={false} min={minPrice}>
                <NumberInputField placeholder="Max price" />
            </NumberInput>
            <Button onClick={() => {
                setMinPriceFilter(minPrice)
                setMaxPriceFilter(maxPrice)
            }} variant='solid' colorScheme='blue'>
                Find
            </Button>
        </ButtonGroup>
    )
}
