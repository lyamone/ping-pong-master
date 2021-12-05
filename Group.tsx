import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

import * as standings from './groups.json';

import { PlayerStats, Standings } from './GroupInterface';
import { GroupRow } from './GroupRow';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, Typography } from '@mui/material';

interface GroupProps {
  groupNumber: number;
  groupStats: PlayerStats[];
}

const Group = (props: GroupProps) => {
  const [groupStats, setGroupStats] = useState(props.groupStats);
  const [groupNumber, setGroupNumber] = useState(props.groupNumber);
  // Sort group by game won.
  const sortedGroup = props.groupStats.sort(
    (p1: PlayerStats, p2: PlayerStats) => p2.won - p1.won
  );

  const groupRows = sortedGroup.map((playerStats: PlayerStats) => {
    return <GroupRow player={playerStats} key={playerStats.name} />;
  });

  return (
    <div className="flex flex-column p-1">
      <div className="ptb-1">
        <Typography variant="subtitle1"> GROUP {groupNumber}</Typography>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 550, border: 1, borderColor: 'secondary.main' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell> Games </TableCell>
              <TableCell> Won </TableCell>
              <TableCell> Pf </TableCell>
              <TableCell> Pa </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{groupRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Group;
