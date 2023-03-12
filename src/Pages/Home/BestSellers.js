import { Box, Container, Divider, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getAllProductsAction } from '../../ApiCaller/ApiCaller'
import PriceFilter from './PriceFilter'
import ShoesCard from './ShoesCard'

export default function BestSellers() {
    const [products, setProducts] = useState([])

    const [minPrice, setMinPrice] = useState(0)

    const [maxPrice, setMaxPrice] = useState(0)

    const [minPriceFilter, setMinPriceFilter] = useState(0)

    const [maxPriceFilter, setMaxPriceFilter] = useState(0)

    let productList
    if (maxPriceFilter <= 0 || minPriceFilter < 0 || minPriceFilter > maxPriceFilter) {
        productList = products
    } else {
        productList = products.filter(item => item.price <= maxPriceFilter && item.price >= minPriceFilter)
    }

    const renderProduct = () => {
        return productList.map((product) => {
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
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Text fontWeight="bold" fontSize="5xl" color="red.600" >Best Sellers</Text>
                    <PriceFilter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setMinPriceFilter={setMinPriceFilter}
                        setMaxPriceFilter={setMaxPriceFilter} minPrice={minPrice} maxPrice={maxPrice}
                    />
                </div>
                <Divider />
                <Grid marginTop="5" templateColumns='repeat(4, 1fr)' gap={6}>
                    {renderProduct()}
                </Grid>
            </Container>
        </Box>
    )
}
