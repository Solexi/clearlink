import { Flex, Box, Text, Image, Icon } from "@chakra-ui/react";
import shopify from "../../assets/images/shopify.png";
import shopifyImages from "../../assets/images/shopify-images.png";
import star from "../../assets/icons/star.svg";
import arrowL from "../../assets/icons/arrowL.svg";
import arrowR from "../../assets/icons/arrowR.svg";
import sarah from "../../assets/images/sarah.png";

const Reviews = () => {
    return (
        <Flex
            bg={"var(--Gray-50, #F9FAFB)"}
            px={"7vw"}
            py={"96px"}
            gap={"80px"}
            flexDir={"row"}
        >
            <Box
                display={"flex"}
                flexDir={"column"}
                gap={"48px"}
                flex={"1 0 0"}
                w={"25vw"}
            >
                <Image
                    src={shopify}
                    w={"110px"}
                    h={"28.9931px"}
                />
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
                    color={"var(--Gray-900, #101828)"}
                    fontSize={"36px"}
                    fontWeight={600}
                    lineHeight={"40px"}
                    letterSpacing={"-0.2px"}
                    alignSelf={"stretch"}
                >
                    ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
                </Text>
                <Flex
                    flexDir={"row"}
                    gap={"12px"}
                    alignItems={"flex-start"}
                    alignSelf={"stretch"}
                >
                    <Flex
                        flexDir={"row"}
                        gap={"16px"}
                        flex={"1 0 0"}
                        alignItems={"flex-start"}
                    >
                        <Image
                            src={sarah}
                            w={"56px"}
                            h={"56px"}
                        />
                        <Flex
                            flexDir={"column"}
                            gap={"2px"}
                        >
                            <Text
                                color={"var(--Gray-900, #101828)"}
                                fontSize={"17px"}
                                fontWeight={600}
                            >
                                Sarah Thompson
                            </Text>
                            <Text
                                color={"var(--Gray-600, #475467)"}
                                fontSize={"14px"}
                                lineHeight={"28px"}
                                fontWeight={400}
                            >
                                Product Manager, Shopify
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        flexDir={"row"}
                        alignItems={"flex-start"}
                        gap={"32px"}
                    >
                        <Icon
                            as={Image}
                            src={arrowL}
                            w={"56px"}
                            h={"56px"}
                        />
                        <Icon
                            as={Image}
                            src={arrowR}
                            w={"56px"}
                            h={"56px"}
                        />
                    </Flex>
                </Flex>
            </Box>
            <Flex
                flex={"1 0 0"}
            >
                <Image
                    src={shopifyImages}
                    w={"40vw"}
                    h={"auto"}
                />
            </Flex>
        </Flex>
    )
}

export default Reviews;