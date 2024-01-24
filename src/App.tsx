import { Box, Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import "@fontsource/inter";
import pattern from "../src/assets/images/bgpattern.png";
import Intro from './components/Intro';
import Companies from './components/Companies';
import WhyClearlink from './components/WhyClearlink';
import Reviews from './components/Reviews';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Socials from './components/Socials';

const App = () => {

  return (
    <Box
      w={"100%"}
      bg={"#FFFFFF"}
      fontFamily={"Inter"}
    >
      <Flex
        w={"100%"}
        flexDir={"column"}
        h={"868px"}
        bgImage={pattern}
        // align={"center"}
        // px={"128px"}
      >
        <Navbar />
        <Intro />
        <Companies />
        <WhyClearlink />
        <Reviews />
        <FAQs />
        <CTA />
        <Footer />
        <Socials />
      </Flex>
    </Box>
  )
}

export default App
