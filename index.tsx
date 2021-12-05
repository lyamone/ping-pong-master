import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Group from './Group';
import Game from './Game';
import Playoffs from './Playoffs';
import * as standings from './groups.json';
import { Standings } from './GroupInterface';
import ReactDOM = require('react-dom');
import darkScrollbar from '@mui/material/darkScrollbar';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const App = () => {
  const [groups, setGroups] = useState(standings.groups);
  const [games, setGames] = useState(standings.games);
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: darkScrollbar(),
            },
          },
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <h1 className="text-center">Yuki Ping Pong Masters 24</h1>
      <Playoffs />
      <div className="flex flex-row space-around wrap">
        {groups.map((group) => {
          return <Group groupNumber={group.id} groupStats={group.players} />;
        })}
      </div>
      <div className="flex flex-row pr-1">
        <Typography variant="h4">Results</Typography>
      </div>
      <div className="flex flex-row wrap space-evenly">
        {games.map((game) => {
          return <Game game={game} groups={groups} />;
        })}
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>,
  document.getElementById('root')
);
