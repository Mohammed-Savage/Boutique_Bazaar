import { Box, Button, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });

    const handleAddProduct = () => {
        // Logic to add the product
        console.log("Product added:", newProduct);
        // Reset the form
        setNewProduct({
            name: "",
            description: "",
            price: "",
            image: "",
        });
    };

    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} fontWeight={"semibold"} fontFamily={"optima"}>
                    {/* 𝓒𝓻𝓮𝓪𝓽𝓮 𝓝𝓮𝔀 𝓟𝓻𝓸𝓭𝓾𝓬𝓽 */}
                    Create New Product
                </Heading>

                <Box w={"full"} bg={useColorModeValue("white", "purple.900")} p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Description'
                            name='description'
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />

                        <Button colorScheme='blue' onClick={handleAddProduct} w='full' fontFamily={"monospace"}>
                            {/* 𝓐𝓭𝓭 𝓟𝓻𝓸𝓭𝓾𝓬𝓽 */}
                            Add Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};
export default CreatePage;
// This code defines a functional component named CreatePage using React. The component returns a simple div element containing the text "CreatePage". This component can be used in a larger application, such as a web page or a section of a user interface, to represent a specific page or feature related to creating something, like a new item or entry. The component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.