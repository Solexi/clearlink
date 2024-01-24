import { Button, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
// import chevron from "../../assets/images/chevron-down.png";
import logo from "../../assets/images/Group.png";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
    return (
        <Flex
            // position={"sticky"}
            // top={10}
            mt={"40px"}
            // w={"100vw"}
            px={"8vw"}
        >
            <Flex
                as="nav"
                dir="row"
                align="center"
                w={"100%"}
                justifyContent="space-between"
                px="32px"
                py={"16px"}
                borderRadius={"100px"}
                bg={"var(--Gray-100, #F2F4F7);"}
                border={"1px solid #D0D5DD"}
                zIndex={100}
            >
                <Flex
                    align={"center"}
                    gap={"10px"}
                >
                    <Image
                        src={logo}
                        w={"25.384px"}
                        h={"28px"}
                    />
                    <Text
                        fontSize={"24px"}
                        fontWeight={600}
                        m={"0px"}
                        color={"#101828"}
                    // lineHeight={"normal"}
                    >
                        ClearLink<span style={{ color: "#528BFF" }}>.</span>
                    </Text>
                </Flex>
                <Flex
                    flexDir={"row"}
                    // justify={"space-evenly"}
                    gap={"40px"}
                    color={"#667085"}
                    fontWeight={600}
                    fontSize={"18px"}
                    _hover={
                        {
                            cursor: 'pointer'
                        }
                    }
                >
                    <Flex
                        gap={"6px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Link
                            href="#"
                            _hover={{
                                textDecor: "none",
                            }}
                        >
                            Products
                        </Link>
                        <Icon
                            as={FaChevronDown}
                            w={"18px"}
                            h={"18px"}
                        />
                    </Flex>
                    <Flex
                        gap={"6px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Link
                            href="#"
                            _hover={{
                                textDecor: "none",
                            }}
                        >
                            Solutions
                        </Link>
                        <Icon
                            as={FaChevronDown}
                            w={"18px"}
                            h={"18px"}
                        />
                    </Flex>
                    <Flex
                        gap={"6px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Link
                            href="#"
                            _hover={{
                                textDecor: "none",
                            }}
                        >
                            Resources
                        </Link>
                        <Icon
                            as={FaChevronDown}
                            w={"18px"}
                            h={"18px"}
                        />
                    </Flex>
                    <Flex
                        gap={"6px"}
                        flexDir={"row"}
                        align={"center"}
                    >
                        <Link
                            href="#"
                            _hover={{
                                textDecor: "none",
                            }}
                        >
                            Pricing
                        </Link>
                    </Flex>
                </Flex>
                <Flex
                    gap={"8px"}
                >
                    <Button
                        borderRadius={"100px"}
                        border={"1px solid #98A2B3"}
                        h={"46px"}
                        w={"144px"}
                        color={"#101828"}
                    >
                        Talk to sales
                    </Button>
                    <Button
                        borderRadius={"100px"}
                        bg={"#175CD3"}
                        h={"46px"}
                        w={"167px"}
                        color={"#FFFFFF"}
                        _hover={{
                            color: "#175CD3",
                            bg: "#DFDFDF",
                            border: "1px solid #175CD3",
                            transition: "0.3s ease-in-out"
                        }}
                    >
                        Sign up for free
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar;