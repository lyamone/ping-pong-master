export const isQualified = (player) => {
  return (
    player.won > 1 ||
    (player.won == 1 && player.games > 2 && player.pa - player.pf == 1)
  );
};

export const randomPlayer = (players) => {
  return players[Math.floor(Math.random() * players.length)];
};
