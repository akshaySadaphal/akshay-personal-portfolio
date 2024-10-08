import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Input,
  Spacer,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import headerSection from "../Home/HeaderS";
import HeaderSection from "../Home/HeaderS";
// import { useMediaQuery } from '@chakra-ui/react';
import { MdMenu } from "react-icons/md";
import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import AkshayResume from "../../Assets/Akshay_Resume.pdf";
import { useMediaQuery } from "react-responsive";

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

const Navbar = ({ props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { scrollsection, about, work, conatct, home, tech, skills } = props;

  const links = [
    {
      path: home,
      title: "HOME",
    },
    {
      path: about,
      title: "ABOUT",
    },
    {
      path: work,
      title: "PROJECTS",
    },
    {
      path: tech,
      title: "TECH STACK",
    },
    {
      path: skills,
      title: "SKILLS",
    },
    {
      path: conatct,
      title: "CONTACT",
    },
  ];

  const Nav_style = {
    // background:"#edf2f8",
    // opacity:" 95%",
    height: "5rem",
    display: "flex",
    position: "fixed",
    width: "100%",
    overflow: "hidden",
    top: 0,
  };
  const handleOnscrollMobile = (path) => {
    scrollsection(path);
    onClose();
  };

  return (
    <>
      <Desktop>
        {" "}
        <Box
          fontFamily="poppins"
          style={Nav_style}
          bgColor={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          fontSize="1.2em"
          zIndex="2"
          position="absolute"
          justifyContent="center"
          alignItems="center"
        >
          <Box fontFamily="poppins" ref={home} m={"auto"} w="95%">
            <Flex justifyContent="space-between" alignItems="center">
              <Link to="/akshay-portfolio">
                <Box w="15%" onClick={() => handleOnscrollMobile(home)}>
                  <Flex justifyContent="space-between">
                    <Box fontFamily="poppins">
                      <Flex fontFamily="poppins">
                        {" "}
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          A
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          KSHAY
                        </Heading>
                      </Flex>
                    </Box>
                    <Spacer />{" "}
                    <Box ml={2} fontFamily="poppins">
                      <Flex fontFamily="poppins">
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          S
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          ADAPHAL
                        </Heading>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Link>
              <Spacer />
              <Box w="62%">
                <Flex justifyContent="space-between">
                  {links.map((link) => (
                    <Text
                      fontWeight={"bold"}
                      fontSize={"14px"}
                      fontFamily="poppins"
                      cursor="pointer"
                      onClick={() => scrollsection(link.path)}
                      p="10px"
                      _hover={{
                        backgroundColor: "#dc143c",
                        padding: "10px",
                        borderRadius: "7px",
                        color: "white",
                      }}
                    >
                      {" "}
                      {link.title}
                    </Text>
                  ))}
                  <a
                    href={AkshayResume}
                    rel="noopener noreferrer"
                    target="_blank"
                    download
                  >
                    <Button
                      onClick={() => {
                        window.open(AkshayResume);
                      }}
                      h="40px"
                      fontFamily="Poppins"
                      w="100px"
                      // fontWeight="bold"
                      fontSize="16px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                      {/* <Icon size="" as={ChevronRightIcon} /> */}
                      RESUME
                    </Button>
                  </a>
                  <Button
                    mr={-5}
                    onClick={toggleColorMode}
                    color={colorMode === "light" ? "#0f1624" : "facebook"}
                  >
                    {colorMode === "light" ? (
                      <Icon as={MoonIcon} />
                    ) : (
                      <Icon as={SunIcon} />
                    )}
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Desktop>
      <Tablet>
        <Box
          zIndex="2"
          className={styles.tab}
          bgColor={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          fontSize="1.2em"
          z-index="999"
          justifyContent="center"
          alignItems="center"
        >
          <Box ref={home} w="95%">
            <Flex justifyContent="space-between" alignItems="center">
              <Link to="/akshay-portfolio">
                <Box w="31%">
                  <Flex justifyContent="space-between">
                    <Box fontFamily="poppins">
                      <Flex>
                        {" "}
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          A
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          KSHAY
                        </Heading>
                      </Flex>
                    </Box>
                    <Spacer />{" "}
                    <Box ml={2}>
                      <Flex>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          S
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          ADAPHAL
                        </Heading>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Link>
              <Box>
                <Flex alignItems="center">
                  <MdMenu onClick={onOpen} size={"3rem"} />
                  <Button
                    ml={2}
                    padding="10px"
                    onClick={toggleColorMode}
                    color={colorMode === "light" ? "#0f1624" : "facebook"}
                  >
                    {colorMode === "light" ? (
                      <Icon w={7} h={7} as={MoonIcon} />
                    ) : (
                      <Icon w={7} h={7} as={SunIcon} />
                    )}
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Center>
                  <Link to="/akshay-portfolio">
                    <Box w="31%" onClick={onClose}>
                      <Flex justifyContent="space-between">
                        <Box>
                          <Flex>
                            {" "}
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Black
                                  : styles.logo_Pink
                              }
                            >
                              A
                            </Heading>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Pink
                                  : styles.logo_White
                              }
                            >
                              KSHAY
                            </Heading>
                          </Flex>
                        </Box>
                        <Spacer />{" "}
                        <Box ml={2}>
                          <Flex>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Black
                                  : styles.logo_Pink
                              }
                            >
                              S
                            </Heading>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Pink
                                  : styles.logo_White
                              }
                            >
                              ADAPHAL
                            </Heading>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Link>
                </Center>
                <hr />
              </DrawerHeader>

              <DrawerBody>
                {links.map((link) => (
                  <Center>
                    <Heading
                      fontFamily="poppins"
                      cursor="pointer"
                      onClick={() => handleOnscrollMobile(link.path)}
                      mt={7}
                      size="md"
                      p="10px"
                      _hover={{
                        backgroundColor: "#dc143c",
                        padding: "10px",
                        borderRadius: "7px",
                        color: "white",
                      }}
                    >
                      {" "}
                      {link.title}
                    </Heading>
                  </Center>
                ))}

                <Center>
                  <a
                    href={AkshayResume}
                    rel="noopener noreferrer"
                    target="_blank"
                    download
                  >
                    <Button
                      mt={7}
                      onClick={() => {
                        window.open(AkshayResume);
                      }}
                      h="40px"
                      fontFamily="Poppins"
                      w="100px"
                      fontSize="16px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                      RESUME
                    </Button>
                  </a>
                </Center>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Tablet>
      <Mobile>
        {/* <Box zIndex="2" style={Nav_style} bgColor={colorMode === 'light' ? '#edf2f8' : '#0f1624'} fontSize="1.2em"  justifyContent="center" alignItems="center">
  </Box> */}
        <Box
          zIndex="2"
          className={styles.mobile}
          bgColor={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          fontSize="1.2em"
          z-index="999"
          justifyContent="center"
          alignItems="center"
        >
          <Box ref={home} w="85%">
            <Flex justifyContent="space-between" alignItems="center">
              <Link to="/akshay-portfolio">
                <Box w="31%">
                  <Flex justifyContent="space-between">
                    <Box fontFamily="poppins">
                      <Flex>
                        {" "}
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          A
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          KSHAY
                        </Heading>
                      </Flex>
                    </Box>
                    <Spacer />{" "}
                    <Box ml={2}>
                      <Flex>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Black
                              : styles.logo_Pink
                          }
                        >
                          S
                        </Heading>
                        <Heading
                          fontFamily="poppins"
                          className={
                            colorMode === "light"
                              ? styles.logo_Pink
                              : styles.logo_White
                          }
                        >
                          ADAPHAL
                        </Heading>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Link>
              <Box>
                <Flex alignItems="center">
                  <MdMenu onClick={onOpen} size={"3rem"} />
                  <Button
                    ml={2}
                    padding="10px"
                    onClick={toggleColorMode}
                    color={colorMode === "light" ? "#0f1624" : "facebook"}
                  >
                    {colorMode === "light" ? (
                      <Icon w={7} h={7} as={MoonIcon} />
                    ) : (
                      <Icon w={7} h={7} as={SunIcon} />
                    )}
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Center>
                  <Link to="/akshay-portfolio">
                    <Box w="31%" onClick={onClose}>
                      <Flex justifyContent="space-between">
                        <Box>
                          <Flex>
                            {" "}
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Black
                                  : styles.logo_Pink
                              }
                            >
                              A
                            </Heading>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Pink
                                  : styles.logo_White
                              }
                            >
                              KSHAY
                            </Heading>
                          </Flex>
                        </Box>
                        <Spacer />{" "}
                        <Box ml={2}>
                          <Flex>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Black
                                  : styles.logo_Pink
                              }
                            >
                              S
                            </Heading>
                            <Heading
                              fontFamily="poppins"
                              className={
                                colorMode === "light"
                                  ? styles.logo_Pink
                                  : styles.logo_White
                              }
                            >
                              ADAPHAL
                            </Heading>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Link>
                </Center>
                <hr />
              </DrawerHeader>

              <DrawerBody>
                {links.map((link) => (
                  <Center>
                    <Heading
                      fontFamily="poppins"
                      cursor="pointer"
                      onClick={() => handleOnscrollMobile(link.path)}
                      mt={7}
                      size="md"
                      p="10px"
                      _hover={{
                        backgroundColor: "#dc143c",
                        padding: "10px",
                        borderRadius: "7px",
                        color: "white",
                      }}
                    >
                      {" "}
                      {link.title}
                    </Heading>
                  </Center>
                ))}
                <Center>
                  <a
                    href={AkshayResume}
                    rel="noopener noreferrer"
                    target="_blank"
                    download
                  >
                    <Button
                     onClick={() => {
                      window.open(AkshayResume);
                    }}
                      mt={7}
                      h="40px"
                      fontFamily="Poppins"
                      w="100px"
                      // fontWeight="bold"
                      fontSize="16px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                      {/* <Icon size="" as={ChevronRightIcon} /> */}
                      RESUME
                    </Button>
                  </a>
                </Center>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Mobile>
    </>
  );
};

export default Navbar;
