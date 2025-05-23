import { Container, SimpleGrid, Text, VStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product.js';
import ProductCard from '../components/ProductCard.jsx';

const HomePage = () => {
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("products", products);
    return (
        <Container maxW={"container.xl"} py={12}>
            <VStack spacing={8}>
                {/* <Text
                    fontSize={{ base: "30", md: "20" }}
                    fontWeight="bold"
                    textAlign="center"
                    // color="teal.500"
                    // textTransform="uppercase"
                    letterSpacing="wide"
                    lineHeight="shorter"
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                > */}
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} fontWeight={"semibold"} fontFamily={"optima"}>
                    Product Lineup 🛍️
                </Heading>
                {/* </Text> */}
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
                    w={"full"}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                >
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </SimpleGrid>

                {products.length === 0 && (
                    <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                        Inventory empty 😵{"  "}
                        <Link to={"/create"}>
                            <Text as='span' color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                                List your first product
                            </Text>
                        </Link>
                    </Text>
                )}

            </VStack>
        </Container>
    )
};
export default HomePage;