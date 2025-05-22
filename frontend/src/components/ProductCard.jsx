import { Box, Heading, Image, Text, HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { FcDeleteRow } from "react-icons/fc";
import React from 'react'

const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "#162456");

    return (
        <Box
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.3s ease-in-out"}
            _hover={{
                transform: "translateY(-5px)",
                transform: "scale(1.05)",
                shadow: "xl",
            }}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} />
            <Box p={4}>
                <Heading as={"h3"} size={"md"} mb={2}>
                    {product.name}
                </Heading>
                <Text fontSize={"md"} color={textColor} mb={4}>
                    {product.description}
                </Text>
                <Text fontWeight={'bold'} fontSize={"xl"} color={textColor} mb={4}>
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(product.price)}
                    {/* ${product.price} */}
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<FaEdit />} colorScheme='blue' />
                    <IconButton icon={<FcDeleteRow />}
                        colorScheme='red'
                    />
                </HStack>
            </Box>
        </Box>
    );
}

export default ProductCard;
