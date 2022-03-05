import { Box, Button, Flex, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import pokeball1 from "public/pokeball1.png";

interface PaginationProps {
  numberPerPage: number;
  totalPokemon: number;
  paginate: (number: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  numberPerPage,
  totalPokemon,
  paginate,
  currentPage,
}) => {
  let pageNumbers: number[] = [];
  const totalNumberOfPage = Math.ceil(totalPokemon / numberPerPage);
  for (let i = 1; i <= totalNumberOfPage; i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    if (currentPage < pageNumbers[totalNumberOfPage - 1]) {
      currentPage++;
      paginate(currentPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > pageNumbers[0]) {
      currentPage--;
      paginate(currentPage);
    }
  };
  return (
    <Flex justify="center" align="center" w="100%" gap="5px">
      <Button colorScheme="yellow" onClick={handlePrev}>
        Prev
      </Button>
      <Flex
        p={3}
        borderRadius="md"
        position="relative"
        w="120px"
        h="120px"
        color="red"
        align="center"
        justify="center"
      >
        <Flex
          align="center"
          justify="center"
          w="100%"
          h="100%"
          position="absolute"
        >
          <Image src={pokeball1} alt="ball" width="100%" height="100%" />
        </Flex>
        <Text position="absolute" fontSize="0.8rem">
          {currentPage}
        </Text>
      </Flex>
      <Button colorScheme="yellow" onClick={handleNext}>
        Next
      </Button>
    </Flex>
  );
};

export default React.memo(Pagination);
