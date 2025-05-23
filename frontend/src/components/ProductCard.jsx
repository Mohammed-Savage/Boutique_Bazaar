import { Box, Heading, Image, Text, HStack, IconButton, useColorModeValue, Tooltip, Flex, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { FcDeleteRow } from "react-icons/fc";
import { useProductStore } from '../store/product.js';
import React from 'react'

const ProductCard = ({ product }) => {

    const { deleteProduct, updateProduct } = useProductStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    }
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "#162456");

    return (
        <Box
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.3s ease-in-out"}
            tabIndex={0} // Makes the box focusable with keyboard
            _hover={{
                boxShadow: "2xl",
                cursor: "pointer",
                transform: "translateY(-5px) scale(1.05)",
                // opacity: 0.3,
            }}
            _focus={{
                outline: "none",
                boxShadow: "outline",
                transform: "translateY(-3px) scale(1.03)",
            }}
            _active={{
                transform: "scale(0.98)",
                boxShadow: "md",
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
                <HStack spacing={2} justifyContent={"space-between"}>
                    <Tooltip label='Edit Product' aria-label='Edit Product' fontSize='md'>
                        <IconButton icon={<FaEdit />} onClick={onOpen} colorScheme='blue' />
                    </Tooltip>
                    <Tooltip label='Delete Product' aria-label='Delete Product' fontSize='md'>
                        <IconButton icon={<FcDeleteRow />} onClick={() => handleDeleteProduct(product._id)}
                            colorScheme='red'
                        />
                    </Tooltip>
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4} align="stretch">
                            <Input
                                placeholder='Product Name'
                                name='name'
                                />
                            <Input
                                placeholder='Product Description'
                                name='description'
                                />
                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                />
                                </VStack>
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3}>
                                        Update
                                    </Button>
                                    <Button variant='ghost' onClick={onClose} >Cancel</Button>
                                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}

export default ProductCard;

// Update line 90 to remove align="stretch" if it looks bad or is breaking our app.