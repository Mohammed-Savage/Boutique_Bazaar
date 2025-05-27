import { Container, Flex, Text, HStack, Button, useColorMode, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { GiStripedSun } from "react-icons/gi";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={"1140px"} px={4}
        transition="border 0.2s"
        border="3px solid transparent"
        borderRadius="md"        // Optional: rounded corners
        bg={colorMode === "light" ? "white" : "#162456"} // Background color based on mode
        color={colorMode === "light" ? "gray.800" : "white"} // Text color based on mode
        _hover={{ borderColor: "blue.500" }} // Border color on hover
        _focus={{ borderColor: "blue.500" }} // Border color on focus
        boxShadow="md"           // Optional: shadow for effect
    >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row",
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
                fontFamily={"ocr-a st"}
                letterSpacing={"wider"}
                // Optional styling. Feel free to change it.
                textShadow={"0 0 10px rgba(0, 0, 0, 0.5)"}
                _hover={{
                    textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                    transition: "text-shadow 0.3s ease-in-out",
                }}
                _focus={{
                    outline: "none",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                }}
                _active={{
                    transform: "scale(0.95)",
                    transition: "transform 0.1s ease-in-out",
                }}
            >
                <Link to={"/"}>🎁 Product Inventory</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Tooltip label="Add a New Product" fontSize='md'>
                        <Button variant="ghost">
                            <FaCartPlus fontSize={20} />
                        </Button>
                    </Tooltip>
                </Link>
                <Tooltip label={colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"} fontSize='md'>
                    <Button onClick={toggleColorMode} variant="ghost">
                        {colorMode === "light" ? <RxMoon size='20' color="blue" /> : <GiStripedSun size='20' color="yellow" />}
                    </Button>
                </Tooltip>
            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;