import { Box, Flex, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Td, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeQuantityAction, deleteShoesAction } from '../../Redux/Actions'

export default function CheckOutItem(props) {

    const { item } = props

    const [quantity, setQuantity] = useState(item.quantity)

    const dispatch = useDispatch()

    return (
        <Tr textAlign="center">
            <Td textAlign="center">
                <Flex minWidth='max-content' alignItems='center' justifyContent="center">
                    <Box>
                        <Image width="60" src={require(`../../Assets/Images/${item.name}.jpg`)} alt={item.name} />
                    </Box>
                </Flex>
            </Td>
            <Td color="black" textAlign="center">{item.name}</Td>
            <Td color="black" textAlign="center">S${item.price}</Td>
            <Td color="black" textAlign="center">
                <NumberInput onChange={(e) => {
                    setQuantity(e)
                    dispatch(changeQuantityAction(item, e))
                }} value={quantity} defaultValue={item.quantity} max={item.stock} min={1} clampValueOnBlur={false}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Td>
            <Td onClick={() => {
                dispatch(deleteShoesAction(item))
            }} color="red" textAlign="center" cursor="pointer">X</Td>
        </Tr >
    )
}
