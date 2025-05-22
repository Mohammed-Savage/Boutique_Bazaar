import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react'

const HomePage = () => {
    return (
        <Container maxW={"container.xl"} py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize={{ base: "30", md: "20" }}
                    fontWeight="bold"
                    textAlign="center"
                    // color="teal.500"
                    // textTransform="uppercase"
                    letterSpacing="wide"
                    lineHeight="shorter"
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    Product Lineup 🛍️
                </Text>
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={10}
                    w={"full"}
                    justifyContent="center"
                    justifyItems="center"
                    alignItems="center"
                >
                </SimpleGrid>
                
                <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
                    Inventory empty 😵{"  "}
                    <Link to={"/create"}>
                        <Text as='span' color={"blue.500"} _hover={{ textDecoration: "underline" }}>
                            Create your first product
                        </Text>
                    </Link>
                </Text>
            </VStack>
        </Container>
    )
};
export default HomePage;