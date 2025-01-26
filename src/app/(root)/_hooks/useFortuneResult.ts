import { useState } from "react";
import { getPokemon } from "@/utils/api";
import { FORTUNE_LEVELS, MAX_POKEMON_ID } from "@/constants";
import { FortuneResult } from "@/types";

const getRandomPokemonId = (maxId: number = MAX_POKEMON_ID) => {
  return Math.floor(Math.random() * maxId) + 1;
};

const useFortuneResult = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [fortune, setFortune] = useState<FortuneResult>();

  const drawFortune = async () => {
    setIsDrawing(true);
    const pokemonId = getRandomPokemonId();
    const pokemon = await getPokemon(pokemonId);

    const randomLevel =
      FORTUNE_LEVELS[Math.floor(Math.random() * FORTUNE_LEVELS.length)];
    setFortune({ level: randomLevel, pokemon });
    setIsDrawing(false);
  };

  return { isDrawing, fortune, drawFortune };
};

export default useFortuneResult;