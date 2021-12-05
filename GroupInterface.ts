export interface PlayerStats {
  name: string;
  games: number;
  won: number;
  pf: number;
  pa: number;
  image?: string;
}

export interface GroupStats {
  id: number;
  players: PlayerStats[];
}

export interface Game {
  player1: string;
  player2: string;
  player1Pf: number;
  player2Pf: number;
}

export type Standings = GroupStats[];
