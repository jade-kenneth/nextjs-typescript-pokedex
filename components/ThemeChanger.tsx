import { Box } from "@chakra-ui/react";
import React from "react";

interface ThemeChangerProps {
  pokemonType: string;
  children: React.ReactElement;
}
const ThemeChanger = ({ pokemonType, children }: ThemeChangerProps) => {
  return (
    <>
      <Box
        bg={
          pokemonType === "electric"
            ? "#F7E403"
            : pokemonType === "psychic"
            ? "#E86487"
            : pokemonType === "fighting"
            ? "#F55A03"
            : pokemonType === "poison"
            ? "#A846B5"
            : pokemonType === "fire"
            ? "#E16235"
            : pokemonType === "water"
            ? "#3B7DCE"
            : pokemonType === "ground"
            ? "#DDBE72"
            : pokemonType === "normal"
            ? "#66C6B0"
            : pokemonType === "rock"
            ? "#B8A02A"
            : pokemonType === "ice"
            ? "#73C3C8"
            : pokemonType === "dragon"
            ? "#753AEC"
            : pokemonType === "dark"
            ? "#644F48"
            : pokemonType === "bug"
            ? "#A9B621"
            : pokemonType === "steel"
            ? "#8E9CBC"
            : pokemonType === "ghost"
            ? "#725792"
            : pokemonType === "fairy"
            ? "#EC77C2"
            : "#2CDBB0"
        }
        h="100%"
        w="100%"
      >
        {children}
      </Box>
    </>
  );
};

export default React.memo(ThemeChanger);
