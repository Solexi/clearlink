import { Flex, Box, Text, Icon, Image, Button } from "@chakra-ui/react";
import check from "../../assets/images/check-icon.png";
import screen from "../../assets/images/screen.png";

const features = [
    {
        id: 0,
        feature: "30 days free trial"
    },
    {
        id: 1,
        feature: "Cancel at any time"
    },
    {
        id: 2,
        feature: "Access to all features"
    },
    {
        id: 3,
        feature: "Peronalized onboarding"
    },
]

const CTA = () => {
    return (
        <Flex
            pl={"7vw"}
            py={"96px"}
            // gap={"80px"}
            justify={"space-between"}
            flexDir={"row"}
            // overflow={"clip"}
        >
            <Box
                display={"flex"}
                w={"35vw"}
                flexDirection={"column"}
                gap={"40px"}
            >
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={"32px"}
                >
                    <Text
                        fontSize={"40px"}
                        fontWeight={600}
                        color={"var(--Gray-900, #101828)"}
                        lineHeight={"50px"}
                        letterSpacing={"-0.96px"}
                    >
                        Ready to clear the path to perfect communication?
                    </Text>
                <Flex
                    flexDir={"column"}
                    gap={"20px"}
                    pl={"16px"}
                >
                    {features.map((cta) => (
                        <Flex
                            key={cta.id}
                            flexDir={"row"}
                            gap={"12px"}
                        >
                            <Icon
                                as={Image}
                                src={check}
                                w={"28px"}
                                h={"28px"}
                            />
                            <Text
                                fontSize={"18px"}
                                fontWeight={400}
                                color={"var(--Gray-600, #475467)"}
                                lineHeight={"32px"}
                            >
                                {cta.feature}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
                </Box>
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
                        Start your free trial
                    </Button>
                </Flex>
            </Box>
            <Box
                // w={"100%"}
                h={"100%"}
                overflow={"clip"}
                // display={"flex"}

            >
                <Image
                    src={screen}
                    w={"50vw"}
                    // h={"682px"}
                    // borderRadius={"12px"}

                />
            </Box>
        </Flex>
    )
}

export default CTA;