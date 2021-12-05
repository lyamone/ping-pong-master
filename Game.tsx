import React, { Component } from 'react';
import { Game } from './GroupInterface';
import { useState } from 'react';

interface GameProps {
  game: Game;
  groups: GroupStats[];
}

interface GameState {}

export default function Game(props) {
  const [game, setGame] = useState(props.game);
  const [groups, setGroups] = useState(props.groups);
  const gameWithImages = groups.map((groups) => {
    return 1;
  });

  return (
    <ul className="flex flex-row p-1">
      <li>{game.player1}</li>
      <li>{game.player1Pf}</li>
      <li>{game.player2Pf}</li>
      <li>{game.player2}</li>
    </ul>
  );
}
