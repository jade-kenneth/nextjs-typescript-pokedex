import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.png";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <Flex align="center" justify="space-between" width="95%" mx="auto">
      {/* <Text
        fontFamily="sans-serif"
        textAlign="left"
        fontWeight="bolder"
        fontSize="1.5rem"
      >
        Pokédex
      </Text> */}
      <Image src={logo} alt="logo" width={200} height={80} />
    </Flex>
  );
};

export default Header;
