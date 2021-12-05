import React, { Component } from 'react';
import { useState, useMemo } from 'react';
import { GroupStats } from './GroupInterface';
import * as playoffsData from './playoffs.json';
import PlayoffGame from './PlayoffGame';
import { randomPlayer } from './helper';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const PlayoffGames = ({ games }) => {
  return games.map((game) => {
    return <PlayoffGame game={game} key={game.id} />;
  });
};

const qualifiedPlayers = [
  'Lucas',
  'Lucio',
  'Victor',
  'Victorius',
  'Cristian',
  'Dennis',
  'Boris',
  'Nelson',
  'Pol',
  'Jose Argentum',
  'Ruben',
  'Tomeu',
  'Jesus',
  'Eleni',
  'Pascal',
  'Jose/Ines',
];

export default function Playoffs() {
  const [playoffs] = useState(playoffsData);
  const [playersToChoose, setPlayersToChoose] = useState(qualifiedPlayers);
  const [playersAssigned, setPlayersAssigned] = useState(true);
  const showButton = localStorage.getItem('comandi');
  const games16 = useMemo(() => {
    return []
      .concat(getGamesByRound(playoffs.leftSide, 'Round16'))
      .concat(getGamesByRound(playoffs.rightSide, 'Round16'));
  }, [playoffs]);

  const gamesQuarters = useMemo(() => {
    return []
      .concat(getGamesByRound(playoffs.leftSide, 'Quarter'))
      .concat(getGamesByRound(playoffs.rightSide, 'Quarter'));
  }, [playoffs]);

  const gamesSemi = useMemo(() => {
    return []
      .concat(getGamesByRound(playoffs.leftSide, 'Semi'))
      .concat(getGamesByRound(playoffs.rightSide, 'Semi'));
  }, [playoffs]);

  function getGamesByRound(games, phase) {
    return games.filter((game) => game.phase === phase);
  }

  function assignPlayers() {
    console.log(playersToChoose);
    let playersList = playersToChoose;
    setPlayersAssigned(false);
    for (let idx = 0; idx < 8; idx++) {
      games16[idx].player1 = randomPlayer(playersList);
      playersList = playersList.filter((p) => p != games16[idx].player1);
      console.log(playersList);
      games16[idx].player2 = randomPlayer(playersList);
      playersList = playersList.filter((p) => p != games16[idx].player2);
      console.log(playersList);
    }
    setPlayersAssigned(true);
    // setPlayersToChoose([]);
  }

  return (
    <div>
      <Typography variant="h4">Playoffs</Typography>
      {/* <div className="flex flex-row mt-1">
        {showButton && (
          <Button variant="contained" onClick={() => assignPlayers()}>
            Sortear
          </Button>
        )}
      </div> */}
      {playersAssigned && (
        <div className="flex flex-row w-full">
          <div className="flex flex-column w-40 wrap playoff-column">
            <div className="flex flex-column w-33 h-full">
              <PlayoffGames games={games16.slice(0, 4)} />
            </div>
            <div className="flex flex-column w-33 h-full place-content-space-around">
              <PlayoffGames games={gamesQuarters.slice(0, 2)} />
            </div>
            <div className="flex flex-column w-33 h-full place-content-center">
              <PlayoffGames games={gamesSemi.slice(0, 1)} />
            </div>
          </div>

          <div className="flex flex-column w-20 wrap playoff-column">
            <div className="flex flex-column m-1 p-1 h-full place-content-center">
              <Typography variant="h5" className="text-center"> Final</Typography>
              <PlayoffGames games={[playoffs.final]} />
            </div>
          </div>

          <div className="flex flex-column w-40 wrap playoff-column">
            <div className="flex flex-column w-33 h-full place-content-center">
              <PlayoffGames games={gamesSemi.slice(1, 2)} />
            </div>
            <div className="flex flex-column w-33 order-2 h-full">
              <PlayoffGames games={games16.slice(4, 8)} />
            </div>
            <div className="flex flex-column w-33 order-1 h-full place-content-space-around">
              <PlayoffGames games={gamesQuarters.slice(2, 4)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
