import type { NextPage } from "next";
import { Box, Button, Center, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";
import Layout from "components/layouts/Layout";
import Image from "next/image";
import logo from "public/logo.png";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [info, setInfo] = useState<string | null>(null);

  const handleSwitch = (type: string) => {
    router.push(`/${type}/pokemon/`, undefined, { shallow: false });
  };
  useEffect(() => {
    const handleRouteChange = () => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? "with" : "without"
      //   } shallow routing ${state}`
      // );
      setInfo(`Navigating page...`);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      setInfo(null);
    };
  }, []);
  return (
    <Center height="90vh">
      <Flex align="center" justify="center" direction="column" w="100%">
        {/* <Image src={logo} alt="logo" width={500} height={200} /> */}
        <Text fontSize="2xl" fontWeight="bolder" m={2} color="tomato">
          TYPES OF PRE-RENDERING
        </Text>
        {info === null ? (
          <Flex direction="column" gap="10px">
            <Button colorScheme="teal" onClick={() => handleSwitch("ssg")}>
              SSG PRE-RENDERING
            </Button>
            <Button colorScheme="teal" onClick={() => handleSwitch("ssr")}>
              SSR PRE-RENDERING
            </Button>
          </Flex>
        ) : (
          <Button
            isLoading
            loadingText={info}
            colorScheme="teal"
            variant="outline"
          >
            Submit
          </Button>
        )}
      </Flex>
      <Flex gap="5px" position="absolute" left="5px" bottom="5px">
        <Text> developed by: </Text>
        <Text fontWeight="bolder">Jade Kenneth S. Darunday</Text>
      </Flex>
    </Center>
  );
};

export default Home;
Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};
