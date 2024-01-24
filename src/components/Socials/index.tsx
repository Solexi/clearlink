import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import linkedin from "../../assets/icons/linkein.svg";
import face from "../../assets/icons/facebook.svg";
import twit from "../../assets/icons/twitter.svg";
import git from "../../assets/icons/github.svg";
import yout from "../../assets/icons/youtube.svg";
import ins from "../../assets/icons/instagram.svg";

const Socials = () => {
    return (
        <Flex
            bg={"var(--Gray-50, #F9FAFB)"}
            px={"7vw"}
            py={"48px"}
            flexDir={"row"}
            justify={"space-between"}
        >
            <Text
                color={"var(--Gray-500, #667085)"}
                fontWeight={400}
                lineHeight={"24px"}
                fontSize={"16px"}
            >
                © 2023 ClearLink. All rights reserved.
            </Text>
            <Flex
                flexDir={"row"}
                gap={"24px"}
                align={"center"}
            >
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={linkedin}
                />
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={twit}
                />
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={face}
                />
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={ins}
                />
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={git}
                />
                <Icon
                    as={Image}
                    w={"24px"}
                    h={"24px"}
                    src={yout}
                />
            </Flex>
        </Flex>
    )
}

export default Socials