export type Phase = 'Round16' | 'Quarter' | 'Semi' | 'Final';

export interface PlayoffGame {
  player1: number;
  player1Score: number;
  player2: number;
  player2Score: number;
  phase: Phase;
  id: number;
  parentId?: number;
}

export interface Players {
  id: number;
  image: string;
  name: string;
}

export interface PlayoffInterface {
  leftSide: PlayoffGame[];
  rifgthSide: PlayoffGame[];
}
