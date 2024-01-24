import { Box, Flex, Image, Text } from "@chakra-ui/react";
import shopify from "../../assets/images/shopify.png";
import coin from "../../assets/images/coinbase.png";
import drop from "../../assets/images/dropbox.png";
import icom from "../../assets/images/intercom.png";
import marvel from "../../assets/images/marvel.png";
import auto from "../../assets/images/automattic.png";


const Companies = () => {
    return (
        <Box
            // w={"100%"}
            px={"8.5vw"}
            py={"96px"}
            display={"flex"}
            flexDir={"column"}
            justifyItems={"flex-start"}
            alignContent={"center"}
            bg={"var(--Base-White, #FFF)"}
            gap={"48px"}
        >
            <Text
                color={"var(--Gray-600, #475467)"}
                textAlign={"center"}
                fontWeight={500}
                fontSize={"20px"}
            >
                Join 1,500+ companies already video conferencing the ClearLink way
            </Text>
            <Flex
                flexDir={"row"}
                gap={"69px"}
                align={"center"}
                justify={"center"}
            >
                <Image
                    src={shopify}
                    w={"141.997px"}
                    h={"32.9861px"}
                />
                <Image
                    src={coin}
                    w={"168.993px"}
                    h={"22.9861px"}
                />
                <Image
                    src={drop}
                    w={"149.653px"}
                    h={"26.9965ffpx"}
                />
                <Image
                    src={icom}
                    w={"141.927px"}
                    h={"30.9896px"}
                />
                <Image
                    src={marvel}
                    w={"90.9896px"}
                    h={"30.9896px"}
                />
                <Image
                    src={auto}
                    w={"198.681px"}
                    h={"8.99306px"}
                />
            </Flex>
        </Box>
    )
}

export default Companies;