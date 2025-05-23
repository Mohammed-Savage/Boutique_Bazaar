import { Box, Heading, Image, Text, HStack, IconButton, useColorModeValue, Tooltip, Flex, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, ModalFooter, Button, useDisclosure, Skeleton, } from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { FcDeleteRow } from "react-icons/fc";
import { useProductStore } from '../store/product.js';
import { useState } from 'react'

const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const [isLoaded, setIsLoaded] = useState(false);

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "#162456");
    // const { bg: bg2 } = useColorModeValue("gray.100", "gray.700");
    // const { bg: bg3 } = useColorModeValue("gray.200", "gray.600");
    // const { bg: bg4 } = useColorModeValue("gray.300", "gray.500");
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
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        onClose();
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
                description: "Product updated successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

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
            <Skeleton isLoaded={isLoaded} height="192px" width="100%" fadeDuration={0.5} startColor='gray.100' endColor='gray.200'>
                <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"} loading='lazy' onLoad={() => setIsLoaded(true)} />
            </Skeleton>
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
                        <IconButton icon={<FaEdit />} onClick={onOpen} colorScheme='blue' aria-label='Edit Product' />
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
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input
                                placeholder='Product Description'
                                name='description'
                                value={updatedProduct.description}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            />
                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input
                                placeholder='Image URL'
                                name='image'
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose} >Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default ProductCard;