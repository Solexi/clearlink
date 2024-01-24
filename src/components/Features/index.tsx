import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";

interface FeaturesProps {
    featureIcon: string;
    featureTitle: string;
    featureSub: string;
}

const Features: React.FC<FeaturesProps> = (
    {
        featureIcon,
        featureTitle,
        featureSub
    }: FeaturesProps
) => {
    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            w={"21vw"}
            h={"200px"}
            gap={"20px"}
        >
            <Icon
                as={Image}
                src={featureIcon}
                w={"56px"}
                h={"56px"}
            />
            <Box
                display={"flex"}
                flexDir={"column"}
                gap={"8px"}
            >
                <Text
                    color={"var(--Gray-900, #101828)"}
                    fontSize={"20px"}
                    fontWeight={600}
                >
                    {featureTitle}
                </Text>
                <Text
                    color={"var(--Gray-600, #475467)"}
                    fontSize={"16px"}
                    fontWeight={400}
                >
                    {featureSub}
                </Text>
            </Box>
        </Box>
    )
}

export default Features