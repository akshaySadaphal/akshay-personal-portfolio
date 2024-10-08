import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  StylesProvider,
  Text,
} from "@chakra-ui/react";
import styles from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "react-responsive";
import GitHubCalendar from 'react-github-calendar';
import { GithubCalender } from "../GitCalender/GithubCalender";
import { GitStat } from "../GitStat/gitstat";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const About = () => {
  return (
    <>
      <Desktop>
        <Box pt={10} mb={"250px"} pb={10}  textAlign="center">
          <Heading
            
            className={styles.Heading}
            mt={10}
            size="2xl"
            fontFamily="poppins"
          >
            {" "}
            <span style={{ color: "#dc143c" }}> Who </span>I am
          </Heading>
          
          <Flex ml={20} mt={20} mr={10} >
            <Center>
              <Box 
               
              className={styles.img}>
                {" "}
              </Box>
            </Center>

            <Spacer />
            <Box
              w="50%"
              mt={5}
              ml={10}
              textAlign="left"
              fontFamily="poppins"
              mr={5}
            >
                {/* size={["4xl","3xl","4xl"]} */}
              <Text fontSize={"15px"}  >
                My name's AKSHAY SADAPHAL and i enjoy creating things that live on
                the internet.
              </Text>
              <Text mt={5}  fontSize={"15px"}>
                I'm a Full-Stack Web Developer with the ability to learn and
                collaborate in rapidly changing environments and compositions.
                Worked through 1000+ hours of Bootcamp structure learning
                JavaScript, Angular, React.Js, TypeScript, dot Net,Sql server, HTML5 and
                CSS3, Bootstrap, Tailwind.
              </Text>
              <Text mt={5} mb={20}  fontSize={"15px"}>
                I am passionate about solving technical problems, researching
                and developing new sites and technologies. I undertake and
                challenge myself to always improve, by being proactive,
                diligent, responsible, and committed to finding the perfect
                solution to any problem.
              </Text>
            </Box>
            
          </Flex>
        
          <GithubCalender />
         <GitStat />
        </Box>
      </Desktop>
      
      <Tablet>
      <Box pt={5} pb={10} textAlign="center">
          <Heading
            
            className={styles.TabHeading}
            mt={5}
            size="2xl"
            fontFamily="poppins"
          >
            {" "}
            <span style={{ color: "#dc143c" }}> Who </span>I am
          </Heading>
          <Center>
            <Stack mt={20} p={3}>
             <Center>
                <Box mb="-200px"  className={styles.MObimg}>
               
                </Box>
                </Center>
             

              <Box
                w="100%"
                p={10}
                
                
                fontFamily="poppins"
              >
                <Text textAlign="justify" fontSize="18px">
                  My name's AKSHAY SADAPHAL and i enjoy creating things that live on
                  the internet.
                </Text>
                <Text mt={5}  fontSize="18px">
                  I'm a Full-Stack Web Developer with the ability to learn and
                  collaborate in rapidly changing environments and compositions.
                  Worked through 1000+ hours of Bootcamp structure learning
                  JavaScript, Angular, React.Js, TypeScript, dot Net,Sql server, HTML5 and
                  CSS3, Bootstrap, Tailwind.
                </Text>
                <Text mt={5} fontSize="18px">
                  
                  I am passionate about solving technical problems, researching
                  and developing new sites and technologies. I undertake and
                  challenge myself to always improve, by being proactive,
                  diligent, responsible, and committed to finding the perfect
                  solution to any problem.
                </Text>
              </Box>
            </Stack>
          </Center>
        </Box>
   
      </Tablet>
      <Mobile>
        <Box
        w="120%" pt={5} pb={10} textAlign="center">
          <Heading
            
            className={styles.MobileHeading}
            mt={5}
            size="2xl"
            fontFamily="poppins"
          >
            {" "}
            <span style={{ color: "#dc143c" }}> Who </span>I am
          </Heading>
          <Center>
            <Stack mt={20} p={3}>
             
                <Box mb="-200px"  className={styles.MObimg}>
                </Box>
             

              <Box
                w="100%"
                p={10}
                
                
                fontFamily="poppins"
              >
                <Text textAlign="justify" fontSize="18px">
                  My name's AKSHAY SADAPHAL and i enjoy creating things that live on
                  the internet.
                </Text>
                <Text mt={5}  fontSize="18px">
                  I'm a Full-Stack Web Developer with the ability to learn and
                  collaborate in rapidly changing environments and compositions.
                  Worked through 1000+ hours of Bootcamp structure learning
                  JavaScript, Angular, React.Js, TypeScript, dot Net,Sql server, HTML5 and
                  CSS3, Bootstrap, Tailwind.
                </Text>
                <Text mt={5} fontSize="18px">
                  I am passionate about solving technical problems, researching
                  and developing new sites and technologies. I undertake and
                  challenge myself to always improve, by being proactive,
                  diligent, responsible, and committed to finding the perfect
                  solution to any problem.
                </Text>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};
