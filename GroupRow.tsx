import React, { Component } from 'react';
import { TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { render } from 'react-dom';
import { PlayerStats } from './GroupInterface';
import Chip from '@mui/material/Chip';

interface GroupRowProps {
  player: PlayerStats;
}

interface GroupRowState {}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 1,
  },
}));

export class GroupRow extends Component<GroupRowProps, GroupRowState> {
  constructor(props) {
    super(props);
  }

  isQualified(player) {
    return (
      player.won > 1 ||
      (player.won == 1 && player.games > 2 && player.pa - player.pf == 1)
    );
  }

  render() {
    return (
      <StyledTableRow>
        <StyledTableCell>
          <div className="flex flex-row">
            <img
              src={this.props.player.image}
              className="circular-image mr-1"
            />
            <span className="mr-1 ml-1"> {this.props.player.name} </span>
            {this.isQualified(this.props.player) && (
              <Chip label="Qualified" color="primary" size="small" />
            )}
          </div>
        </StyledTableCell>
        <StyledTableCell>{this.props.player.games}</StyledTableCell>
        <StyledTableCell>{this.props.player.won}</StyledTableCell>
        <StyledTableCell>{this.props.player.pf}</StyledTableCell>
        <StyledTableCell>{this.props.player.pa}</StyledTableCell>
      </StyledTableRow>
    );
  }
}
