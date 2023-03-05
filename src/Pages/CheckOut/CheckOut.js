import { Container, Text, Table, Thead, Tbody, Tfoot, Tr, Th, TableContainer, Box, Button, Flex, } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderProductsAction } from '../../ApiCaller/ApiCaller'
import { emptyCartAction } from '../../Redux/Actions'
import CheckOutItem from './CheckOutItem'

export default function CheckOut() {

  const { cart } = useSelector(state => state.ProductReducer)

  const total = cart.reduce((total, item) => {
    return total + item.quantity * item.price
  }, 0)

  const renderCheckOutItems = () => {
    return cart.map((item) => {
      return (<CheckOutItem item={item} key={item.id} />)
    })
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <Container maxW="7xl">
      <Text fontSize="4xl" fontWeight="bold" color="red" marginTop="5">Your cart</Text>
      {cart.length ?
        <TableContainer marginTop="5">
          <Table size='lg'>
            <Thead>
              <Tr>
                <Th fontWeight="bold" color="black" textAlign="center">Product image</Th>
                <Th fontWeight="bold" color="black" textAlign="center">Product name</Th>
                <Th fontWeight="bold" color="black" textAlign="center">Price</Th>
                <Th fontWeight="bold" color="black" textAlign="center">Quantity</Th>
                <Th fontWeight="bold" color="black" textAlign="center">Remove</Th>
              </Tr>
            </Thead>
            <Tbody >
              {renderCheckOutItems()}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th color="black" textAlign="center">Total:</Th>
                <Th color="black" textAlign="center" fontSize="20px" fontWeight="bold">S${total}</Th>
              </Tr>
            </Tfoot>
          </Table>
          <Flex alignItems="center" justifyContent="end" marginTop="5">
            <div>
              <Button onClick={async() => {
                await orderProductsAction(cart)
                dispatch(emptyCartAction())
                navigate('/', {replace: false})
              }} bgColor="yellow.300">Make payment</Button>
            </div>
          </Flex>
        </TableContainer>
        :
        <Box>
          <Text textAlign="center" fontSize="4xl" fontWeight="bold" color="gray">Your Cart is empty</Text>
          <Button onClick={() => {
            navigate('/', {replace: false})
          }} bgColor="yellow.300" color="red" textAlign="center" size="lg">Shopping now</Button>
        </Box>
      }

    </Container>
  )
}
