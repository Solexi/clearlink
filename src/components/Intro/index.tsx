import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import robot from "../../assets/icons/robot.svg";
import star from "../../assets/icons/star.svg";
import avGroup from "../../assets/images/avatar-group.png";
import ava1 from "../../assets/images/avatar1.png";
import ava2 from "../../assets/images/avatar2.png";
import ava3 from "../../assets/images/avatar3.png";
import ava4 from "../../assets/images/avatar4.png";
import ava5 from "../../assets/images/avatar5.png";
import ava6 from "../../assets/images/avatar6.png";
import voice from "../../assets/icons/mic.svg";
import video from "../../assets/icons/video.svg";
import screen from "../../assets/icons/screen.svg";
import react from "../../assets/icons/react.svg";
import chat from "../../assets/icons/chat.svg";
import settings from "../../assets/icons/settings.svg";

const Intro = () => {
    return (
        <Flex
            mt={"160px"}
            flexDir={"row"}
            justifyContent="space-between"
            px={"8vw"}
        >
            <Box
                w={"50vw"}
            >
                <Text
                    fontSize={"58px"}
                    fontWeight={600}
                    lineHeight={"60px"}
                    color={"#1D2939"}
                    letterSpacing={"-1.28px"}
                    textDecor={"none solid rgb(29, 41, 57)"}
                >
                    Uniting the world, one video call at a time
                </Text>
                <Text
                    w={"31vw"}
                    color={"#667085"}
                    fontSize={"16px"}
                    fontWeight={400}
                    mt={"24px"}
                    lineHeight={"25px"}
                >
                    Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.
                </Text>
                <Flex
                    w={"457px"}
                    flexDir={"row"}
                    justify={"space-between"}
                    my={"48px"}
                >
                    <Button
                        borderRadius={"100px"}
                        bg={"#175CD3"}
                        color={"#FFFFFF"}
                        h={"60px"}
                        w={"221px"}
                        _hover={{
                            color: "#000000",
                            bg: "#DFDFDF",
                            border: "1px solid",
                            transition: "0.3s ease-in-out"
                        }}
                    >
                        Start your free trial
                    </Button>
                    <Flex
                        flexDir={"row"}
                        gap={"12px"}
                        alignItems={"center"}
                    >
                        <Icon
                            as={Image}
                            src={robot}
                            w={"20px"}
                            h={"20px"}
                        />
                        <Text
                            fontSize={"18px"}
                            fontWeight={600}
                            color={"var(--Blue-700, #175CD3)"}
                            lineHeight={"28px"}
                        >
                            Discover AI assistant
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    w={"327px"}
                    flexDir={"row"}
                    justify={"space-between"}
                >
                    <Image
                        src={avGroup}
                        w={"152px"}
                        h={"40px"}
                    />
                    <Box
                        w={"159px"}
                    >
                        <Flex
                            flexDir={"row"}
                            gap={"8px"}
                        >
                            <Flex
                                flexDir={"row"}
                                gap={"4px"}
                            >
                                <Icon
                                    as={Image}
                                    src={star}
                                    w={"20px"}
                                    h={"20px"}
                                />
                                <Icon
                                    as={Image}
                                    src={star}
                                    w={"20px"}
                                    h={"20px"}
                                />
                                <Icon
                                    as={Image}
                                    src={star}
                                    w={"20px"}
                                    h={"20px"}
                                />
                                <Icon
                                    as={Image}
                                    src={star}
                                    w={"20px"}
                                    h={"20px"}
                                />
                                <Icon
                                    as={Image}
                                    src={star}
                                    w={"20px"}
                                    h={"20px"}
                                />
                            </Flex>
                            <Text
                                fontSize={"16px"}
                                fontWeight={600}
                                color={"var(--Gray-700, #344054)"}
                            >
                                5.0
                            </Text>
                        </Flex>
                        <Text
                            fontWeight={500}
                            fontSize={"16px"}
                            color={"var(--Gray-600, #475467)"}
                            lineHeight={"24px"}
                        >
                            from 3,000+ reviews
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box
                w={"584px"}
                h={"488px"}
                borderRadius={"16px"}
                border={"1px solid var(--Blue-200, #B2DDFF)"}
                p={"32px"}
                bg={"var(--Blue-50, #EFF8FF)"}
                boxShadow={"0px 32px 64px -12px rgba(16, 24, 40, 0.14)"}
                gap={"40px"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Grid
                    templateColumns={"repeat(3, 1fr)"}
                    gap={"14px"}
                >
                    <GridItem
                        bg={"var(--Orange-dark-300, #FF9C66)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava2}
                            w={"100%"}
                            h={"100%"}
                        />
                    </GridItem>
                    <GridItem
                        bg={"var(--Primary-300, #D6BBFB)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava4}
                            w={"100%"}
                            h={"100%"}
                        />
                    </GridItem>
                    <GridItem
                        bg={"var(--Moss-300, #ACDC79)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava1}
                            w={"100%"}
                            h={"100%"}
                        />
                    </GridItem>
                    <GridItem
                        bg={"var(--Gray-blue-300, #B3B8DB)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava3}
                            w={"100%"}
                            h={"100%"}
                        />
                    </GridItem>
                    <GridItem
                        bg={" var(--Warning-300, #FEC84B)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava6}
                            w={"100%"}
                            h={"100%"}
                            borderRadius={"12px"}
                        />
                    </GridItem>
                    <GridItem
                        bg={"var(--Ros-300, #FEA3B4)"}
                        w={"160px"}
                        h={"160px"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src={ava5}
                            w={"100%"}
                            h={"100%"}
                        />
                    </GridItem>
                </Grid>
                <Flex
                    gap={"16px"}
                >
                    <Icon
                        as={Image}
                        src={voice}
                        w={"44px"}
                        h={"44px"}
                    />
                    <Icon
                        as={Image}
                        src={video}
                        w={"44px"}
                        h={"44px"}
                    />
                    <Icon
                        as={Image}
                        src={screen}
                        w={"44px"}
                        h={"44px"}
                    />
                    <Icon
                        as={Image}
                        src={react}
                        w={"44px"}
                        h={"44px"}
                    />
                    <Icon
                        as={Image}
                        src={chat}
                        w={"44px"}
                        h={"44px"}
                    />
                    <Icon
                        as={Image}
                        src={settings}
                        w={"44px"}
                        h={"44px"}
                    />
                </Flex>
            </Box>
        </Flex>
    )
}

export default Intro;