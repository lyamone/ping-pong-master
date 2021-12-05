import React, { useState } from 'react';
import * as playoffsData from './playoffs.json';

const PlayoffGame = ({ game }) => {
  const [playoffs, setPlayoff] = useState(playoffsData);
  const players = playoffs.players;

  function getPlayerImage(playerId) {
    const player = players.filter((player) => player.name === playerId);
    return player[0]
      ? player[0].image
      : 'https://firebasestorage.googleapis.com/v0/b/pinake-220016.appspot.com/o/ping-pong%2Fprofile-anon.png?alt=media&token=fb0bc9d6-a796-471b-a2dc-c4244d4c99b6';
  }

  return (
    <div className="b-1 plafoff-game p-1 mtb-10p flex flex-col">
      <div
        className={[
          'flex flex-column wrap',
          game.reverse ? 'flow-row-reverse' : '',
        ].join(' ')}
      >
        <div
          className={[
            'flex flex-row place-items-center',
            game.reverse ? 'flow-row-reverse' : '',
          ].join(' ')}
        >
          <div className={[game.reverse ? 'order-1' : 'mr-1'].join(' ')}>
            <img
              className="circular-image mr-1"
              src={getPlayerImage(game.player1)}
            />
          </div>
          <div
            className={['mr-1', game.reverse ? 'order-1 mr-1' : ''].join(' ')}
          >
            {game.player1}
          </div>
          <div className={['mr-1', game.reverse ? 'order-2' : ''].join(' ')}>
            {' '}
            {game.player1Score}
          </div>
        </div>
        <div
          className={[
            'flex flex-row place-items-center mt-1',
            game.reverse ? 'flow-row-reverse' : '',
          ].join(' ')}
        >
          <div className={[game.reverse ? 'order-1' : 'mr-1'].join(' ')}>
            <img
              className="circular-image mr-1"
              src={getPlayerImage(game.player2)}
            />
          </div>
          <div
            className={['mr-1', game.reverse ? 'order-1 mr-1' : ''].join(' ')}
          >
            {game.player2}
          </div>
          <div className={['mr-1', game.reverse ? 'order-2' : ''].join(' ')}>
            {' '}
            {game.player2Score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayoffGame;
