"use client"

import useFetchGames from "@/hooks/useFetchGames";
import { useGamesStore } from "@/store/useGamesStore";
import React, { useEffect } from "react";

const LoadGames = () => {
  const games = useFetchGames();
  const gamesStore = useGamesStore();

  useEffect(() => {
    if (!gamesStore.games.length && games) {
      gamesStore.setGames(games);
    }
  }, [games, gamesStore]);


  return <></>;
};

export default LoadGames;
