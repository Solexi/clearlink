import { Box, Divider, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import plus from "../../assets/images/plus-circle.png";
import minus from "../../assets/images/minus-circle.png";
import { useState } from "react";

const FAQs = () => {
    const [showAnswers, setShowAnswers] = useState<boolean[]>([false, false, false]);

    const toggleAnswer = (index: number) => {
        setShowAnswers((prev: unknown) => {
            const updatedAnswers = [...prev as boolean[]];
            updatedAnswers[index] = !updatedAnswers[index];
            return updatedAnswers;
        });
    };

    return (
        <Flex
            px={"7vw"}
            py={"96px"}
            flexDir={"row"}
            justify={"space-between"}
        >
            <Box
                w={"34vw"}
                display={"flex"}
                flexDir={"column"}
                gap={"20px"}
            >
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={"12px"}
                >
                    <Text
                        color={"var(--Blue-700, #175CD3)"}
                        fontSize={"16px"}
                        fontWeight={600}
                    >
                        Support
                    </Text>
                    <Text
                        color={" var(--Gray-800, #1D2939)"}
                        fontSize={"42px"}
                        fontWeight={600}
                        letterSpacing={"-0.96px"}
                        lineHeight={"50px"}
                    >
                        FAQs
                    </Text>
                </Box>
                <Text
                    color={"var(--Gray-500, #667085)"}
                    fontSize={"18px"}
                    fontWeight={400}
                    lineHeight={"28px"}
                    w={"80%"}
                >
                    Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please<Link href="#" textDecor={"underline"}> chat to our friendly team. </Link>
                </Text>
            </Box>
            <Flex
                w={"44vw"}
                flexDir={"column"}
                gap={"4px"}
            >
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[0] ? "24px" : ""}
                        bg={showAnswers[0] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[0] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[0] ? "16px" : ""}
                        transition={"0.5s ease-in-out"}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                How many participants can join a ClearLink video conference?
                            </Text>
                            {showAnswers[0] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[0] ? minus : plus}
                            onClick={() => toggleAnswer(0)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[1] ? "24px" : ""}
                        bg={showAnswers[1] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[1] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[1] ? "16px" : ""}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                Can I use ClearLink on multiple devices?
                            </Text>
                            {showAnswers[1] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[1] ? minus : plus}
                            onClick={() => toggleAnswer(1)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[2] ? "24px" : ""}
                        bg={showAnswers[2] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[2] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[2] ? "16px" : ""}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                Is ClearLink compatible with other video conferencing platforms?
                            </Text>
                            {showAnswers[2] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[2] ? minus : plus}
                            onClick={() => toggleAnswer(2)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[3] ? "24px" : ""}
                        bg={showAnswers[3] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[3] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[3] ? "16px" : ""}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                How does ClearLink ensure the security of my video conferences?
                            </Text>
                            {showAnswers[3] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[3] ? minus : plus}
                            onClick={() => toggleAnswer(3)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[4] ? "24px" : ""}
                        bg={showAnswers[4] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[4] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[4] ? "16px" : ""}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                Do I need to download any software to use ClearLink?
                            </Text>
                            {showAnswers[4] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[4] ? minus : plus}
                            onClick={() => toggleAnswer(4)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
                <Flex
                    flexDir={"column"}
                >
                    <Flex
                        flexDir={"row"}
                        w={"100%"}
                        justify={"space-between"}
                        // align={"center"}
                        gap={showAnswers[5] ? "24px" : ""}
                        bg={showAnswers[5] ? "var(--Gray-50, #F9FAFB)" : ""}
                        border={showAnswers[5] ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                        p={"32px"}
                        borderRadius={showAnswers[5] ? "16px" : ""}
                    >
                        <Flex
                            flexDir={"column"}
                            gap={"8px"}
                        >
                            <Text color="var(--Gray-900, #101828)" fontSize="18px" fontWeight={600}>
                                What kind of customer support does ClearLink provide?
                            </Text>
                            {showAnswers[5] && (
                                <Text color="var(--Gray-500, #667085)" fontSize="16px" fontWeight={400}>
                                    ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.
                                </Text>
                            )}
                        </Flex>
                        <Icon
                            as={Image}
                            src={showAnswers[5] ? minus : plus}
                            onClick={() => toggleAnswer(5)}
                            w={"24px"}
                            h={"24px"}
                        />
                    </Flex>
                    <Divider
                        w={"100%"}
                        bg={"var(--Gray-200, #EAECF0)"}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default FAQs