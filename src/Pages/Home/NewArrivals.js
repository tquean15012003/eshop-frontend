import { Box, Container, Divider, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getAllProductsAction } from '../../ApiCaller/ApiCaller'
import ShoesCard from './ShoesCard'

export default function NewArrivals() {
    const [products, setProducts] = useState([])

    const renderProduct = () => {
        return products.map((product, index) => {
            return (
                <ShoesCard product={product} key={product.id} />
            )
        })
    }

    useEffect(() => {
        getAllProductsAction(setProducts)
    }, [])


    return (
        <Box padding="15px 0">
            <Container maxW="7xl">
                <Text fontWeight="bold" fontSize="5xl" color="red.600" >New Arrivals</Text>
                <Divider />
                <Grid marginTop="5" templateColumns='repeat(4, 1fr)' gap={6}>
                    {renderProduct()}
                </Grid>

            </Container>
        </Box>
    )
}
