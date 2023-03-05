import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../Redux/Actions'

export default function ShoesCard(props) {
    const { product } = props

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0)

    return (
        <Card maxW='sm' key={product.id}>
            <CardBody>
                <Image
                    _hover={{
                        transform: 'scale(1.1)',
                        transitionDuration: '0.5s',
                    }}
                    src={require(`../../Assets/Images/${product.name}.jpg`)}
                    alt={`${product.name}`}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text>
                        {product.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        S${product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <NumberInput onChange={(e) => {
                        setQuantity(e)
                    }} value={quantity} defaultValue={0} max={product.stock} min={0} clampValueOnBlur={false}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button onClick={() => {
                        if (parseInt(quantity) > 0) {
                            dispatch(addToCartAction(product, quantity))
                            setQuantity(0)
                        }
                    }} variant='solid' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
