import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cart from '../Assets/cart.svg'

export default function HomepageHeader() {

    const navigate = useNavigate()

    const { cart } = useSelector(state => state.ProductReducer)

    const numOfShoes = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return (
        <div>
            <div style={{ position: "fixed", padding: "15px 0", borderBottom: "1px solid #D3D3D3", width: "100%", zIndex: "100", backgroundColor: "white" }}>
                <Container maxW="7xl">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <Text onClick={() => {
                                navigate("/", { replace: false })
                            }} cursor="pointer" fontSize="5xl" fontWeight="bold" color="black"
                            >Tuan Anh <span style={{ color: "red" }}>E-shop</span>
                            </Text>
                        </Box>
                        <Box>
                            <div style={{
                                backgroundImage: `url(${Cart})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "40px",
                                height: "40px",
                                cursor: `${numOfShoes ? "pointer" : "not-allowed"}`,
                            }}
                                onClick={() => {
                                    if (numOfShoes > 0) {
                                        navigate("/checkout", { replace: false })
                                    }
                                }}
                            >
                                <span style={{ marginBottom: "5px", marginLeft: "3px", fontWeight: "bold", color: "red" }}>{numOfShoes}</span>
                            </div>
                        </Box>
                    </div>

                </Container>

            </div>
            <div style={{ padding: "15px 0", borderBottom: "1px solid #D3D3D3", width: "100%", zIndex: "100", backgroundColor: "white" }}>
                <Container maxW="7xl">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                            <Text onClick={() => {
                                navigate("/", { replace: false })
                            }} cursor="pointer" fontSize="5xl" fontWeight="bold" color="black"
                            >Tuan Anh <span style={{ color: "red" }}>E-shop</span>
                            </Text>
                        </Box>
                        <Box>
                            <div style={{
                                backgroundImage: `url(${Cart})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "40px",
                                height: "40px",
                                cursor: "pointer"
                            }}
                                onClick={() => {
                                    if (numOfShoes > 0) {
                                        navigate("/checkout", { replace: false })
                                    }
                                }}
                            >
                                <span style={{ marginBottom: "5px", marginLeft: "3px", fontWeight: "bold", color: "red" }}>{numOfShoes}</span>
                            </div>


                        </Box>
                    </div>

                </Container>

            </div>
        </div>

    )
}
