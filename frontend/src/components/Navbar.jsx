import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { RxMoon } from "react-icons/rx";
import { GiStripedSun } from "react-icons/gi";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW={"1140px"} px={4}>
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
            >
                <Link to={"/"}>🎁 Product Inventory</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <FaCartPlus fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <RxMoon size='20' color="blue" /> : <GiStripedSun size='20' color="yellow" />}
                </Button>
            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;