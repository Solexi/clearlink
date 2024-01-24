import {Accordion, AccordionItem, AccordionButton, AccordionPanel, Icon, Image, Text, Flex } from "@chakra-ui/react"
import plus from "../../assets/images/plus-circle.png";
import minus from "../../assets/images/minus-circle.png";

interface FAQAccordionProps {
    question: string;
    answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = (
    {
        question,
        answer
    }: FAQAccordionProps
) => {
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <Flex
                            flexDir={"row"}
                            w={"100%"}
                            justify={"space-between"}
                            // align={"center"}
                            gap={isExpanded ? "24px" : ""}
                            bg={isExpanded ? "var(--Gray-50, #F9FAFB)" : ""}
                            border={isExpanded ? "1px solid var(--Gray-200, #EAECF0)" : ""}
                            p={"32px"}
                            borderRadius={isExpanded ? "16px" : ""}
                        >
                            <AccordionButton p={0}>
                                <Text
                                    // as="span"
                                    flex='1'
                                    textAlign='left'
                                    color="var(--Gray-900, #101828)"
                                    fontSize="18px"
                                    fontWeight={600}
                                >
                                    {question}
                                </Text>
                                {isExpanded ? (
                                    <Icon
                                        as={Image}
                                        src={minus}
                                        w={"24px"}
                                        h={"24px"}
                                        fontSize='12px'
                                    />
                                ) : (
                                    <Icon
                                        as={Image}
                                        src={plus}
                                        fontSize='12px'
                                        w={"24px"}
                                        h={"24px"}
                                    />
                                )}
                            </AccordionButton>
                        </Flex>
                        <AccordionPanel pb={4}>
                            {answer}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    )
}

export default FAQAccordion