import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import pokeball from "public/pokeball.png";
import ThemeChanger from "./ThemeChanger";
import { motion } from "framer-motion";
import { TypesDetail } from "pages/ssr/pokemon";

interface EachPokemonProps<T> {
  children: string;
  pokemonData: T;
  number: number;
  type: "ssr" | "ssg";
}
//constraints -> mentioing that each object must contains types and image
//specifying types and image
const EachPokemon = <T extends { types: Array<TypesDetail>; image: string }>({
  children,
  pokemonData,
  number,
  type,
}: EachPokemonProps<T>) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      h="180px"
      w="200px"
      m={2}
      borderRadius="sm"
      overflow="hidden"
    >
      <ThemeChanger pokemonType={pokemonData.types[0].type.name}>
        <Link
          href={{
            pathname: `/${type === "ssr" ? "ssr" : "ssg"}/pokemon/${number}`,
          }}
        >
          <a>
            <Flex
              flexDirection="column-reverse"
              p={2}
              h="100%"
              fontFamily="sans-serif"
              overflow="hidden"
              color="white"
            >
              <Flex
                flex="2"
                h="100%"
                w="100%"
                align="center"
                direction="row-reverse"
                justify="center"
                position="relative"
              >
                <Box position="absolute" right="-15px" bottom="-20px">
                  <Image src={pokeball} alt="ball" width={100} height={100} />
                </Box>
                <Image
                  src={pokemonData.image}
                  alt={`${children}`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/fR2PQAIWgMc+QDkCgAAAABJRU5ErkJggg=="
                  width={130}
                  height={130}
                />
                <Spacer />
                <Flex direction="column" gap="5px">
                  {pokemonData.types.map((s) => {
                    const { type } = s;
                    return (
                      <>
                        <Text
                          p={1}
                          textAlign="center"
                          bg="whiteAlpha.500"
                          borderRadius="50px"
                        >
                          {type.name}
                        </Text>
                      </>
                    );
                  })}
                </Flex>
              </Flex>
              <Flex flex="1">
                <Text
                  fontSize="2xl"
                  fontWeight="bolder"
                  textTransform="capitalize"
                >
                  {children}
                </Text>
                <Spacer />
                <Text fontSize="2xl" color="#E05B4C">
                  #0{number}
                </Text>
              </Flex>
            </Flex>
          </a>
        </Link>
      </ThemeChanger>
    </MotionBox>
  );
};

export default EachPokemon;
