import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Features from "../Features";
import video from "../../assets/icons/hd-video.svg"
import audio from "../../assets/icons/noise.svg"
import cal from "../../assets/icons/calender.svg"
import security from "../../assets/icons/security.svg"
import arrow from "../../assets/images/arrow-down.png"
import profiles from "../../assets/images/profile-group.png"

const WhyClearlink = () => {
    return (
        <Flex
            // w={"100vw"}
            px={"7vw"}
            py={"96px"}
            gap={"80px"}
            flexDir={"column"}
            position={"relative"}
        >
            <Box
                w={"55vw"}
                display={"flex"}
                flexDir={"column"}
                gap={"20px"}
                alignItems={"flex-start"}
            >
                <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={"12px"}
                >
                    <Text
                        color={"var(--Blue-700, #175CD3)"}
                        fontSize={"18px"}
                        fontWeight={600}
                    >
                        The ClearLink Advantage
                    </Text>
                    <Text
                        color={"var(--Gray-800, #1D2939)"}
                        fontSize={"48px"}
                        fontWeight={600}
                    >
                        Why choose ClearLink?
                    </Text>
                </Box>
                <Text
                    color={"var(--Gray-500, #667085)"}
                    fontSize={"18px"}
                    fontWeight={400}
                    lineHeight={"28px"}
                    w={"80%"}
                >
                    In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:
                </Text>
            </Box>
            <Flex
                flexDir={"row"}
                w={"85vw"}
                justify={"space-between"}
                alignItems={"center"}
            >
                <Flex
                    w={"800px"}
                    align={"flex-start"}
                >
                    <Grid
                        templateColumns={"repeat(2, 1fr)"}
                        gap={"60px 40px"}
                    >
                        <GridItem>
                            <Features
                                featureIcon={video}
                                featureTitle={"Crystal-clear HD video"}
                                featureSub={"No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."}
                            />
                        </GridItem>
                        <GridItem>
                            <Features
                                featureIcon={audio}
                                featureTitle={"Noise-canceling audio"}
                                featureSub={"Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."}
                            />
                        </GridItem>
                        <GridItem>
                            <Features
                                featureIcon={cal}
                                featureTitle={"Scheduling made easy"}
                                featureSub={"Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."}
                            />
                        </GridItem>
                        <GridItem>
                            <Features
                                featureIcon={security}
                                featureTitle={"Bank-grade security"}
                                featureSub={"Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."}
                            />
                        </GridItem>
                    </Grid>
                </Flex>
                <Box>
                    <Image
                        src={arrow}
                        w={"283.993px"}
                        h={"243.003px"}
                        // transform="rotate(-154.745deg)"
                        position={"absolute"}
                        right={"306.285px"}
                        // left={"20px"}
                        top={"150px"}
                    />
                    <Image
                        src={profiles}
                        w={"544px"}
                        h={"527px"}
                    />
                </Box>
            </Flex>
        </Flex>
    )
}

export default WhyClearlink;