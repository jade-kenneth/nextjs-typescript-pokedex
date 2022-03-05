import Image from "next/image";
import Details from "components/Details";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import Layout from "components/layouts/Layout";
import { useRouter } from "next/router";
import ThemeChanger from "components/ThemeChanger";
import SwitchButtonAndLoader from "components/SwitchButtonAndLoader";
export async function getStaticPaths() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"
  );
  const data = await response.json();

  const paths = data.results.map((pokemon, idx) => {
    return {
      params: { pokemonId: `${idx + 1}` },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`
  );
  const data = await response.json();

  return {
    props: {
      pokemonDetail: data,
    },
  };
}
const PokemonData = ({ pokemonDetail }) => {
  const router = useRouter();
  const { pokemonId } = router.query;
  return (
    <Flex h="85vh" direction="column" align="center" justify="space-between">
      {router.isFallback ? (
        <Text>Loading...</Text>
      ) : (
        <Box
          h="90%"
          width="300px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="5px 5px 2px gray"
          color="white"
        >
          <ThemeChanger pokemonData={pokemonDetail}>
            <Flex
              align="center"
              height="100%"
              justify="space-between"
              direction="column"
            >
              <Flex direction="column" justify="center" flex="1" w="90%">
                <Flex>
                  <Text
                    fontWeight="bolder"
                    fontSize="2xl"
                    textTransform="capitalize"
                  >
                    {pokemonDetail.name}
                  </Text>
                  <Spacer />
                  <Text
                    fontWeight="bolder"
                    fontSize="2xl"
                    textTransform="capitalize"
                  >
                    #0{pokemonId}
                  </Text>
                </Flex>
                <Flex direction="row" gap="5px">
                  <Text borderRadius="50px" px={2} bg="whiteAlpha.300">
                    {pokemonDetail.types[0].type.name}
                  </Text>

                  {pokemonDetail?.types[1]?.type.name && (
                    <Text borderRadius="50px" px={2} bg="whiteAlpha.300">
                      {pokemonDetail.types[1].type.name}
                    </Text>
                  )}
                </Flex>
              </Flex>
              <Center flex="2" mb="-30px">
                <Image
                  src={`${pokemonDetail.sprites.other["home"].front_default}`}
                  alt={`${pokemonDetail.name}`}
                  width={150}
                  height={150}
                />
              </Center>

              <Box flex="4" h="100%" w="100%" color="black">
                <Details pokeDetails={pokemonDetail} />
              </Box>
            </Flex>
          </ThemeChanger>
        </Box>
      )}
      <SwitchButtonAndLoader type="previous " hidden={true} />
    </Flex>
  );
};

export default PokemonData;
PokemonData.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
