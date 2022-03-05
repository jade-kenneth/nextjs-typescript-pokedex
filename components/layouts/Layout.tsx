import { Box, Flex, Grid } from "@chakra-ui/react";

import Header from "components/Header";
import Image from "next/image";
import React from "react";
import pokeball from "public/pokeball.png";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid templateRows="10vh auto" position="relative" zIndex="0">
      <Header />
      <Flex
        position="absolute"
        left="0px"
        top="50%"
        width="200px"
        height="200px"
        zIndex="-1"
        align="center"
        justify="center"
      >
        <Image src={pokeball} alt="ball" layout="fill" />
      </Flex>
      <Flex
        position="absolute"
        right="20%"
        top="0px"
        width="200px"
        height="200px"
        zIndex="-1"
        align="center"
        justify="center"
      >
        <Image src={pokeball} layout="fill" alt="ball" />
      </Flex>
      <Flex
        position="absolute"
        right="0px"
        bottom="0px"
        width="200px"
        height="200px"
        zIndex="-1"
        align="center"
        justify="center"
      >
        <Image src={pokeball} layout="fill" alt="ball" />
      </Flex>
      <Box>{children}</Box>
    </Grid>
  );
};

export default Layout;
