
import React from 'react';

import ChordChart, { validateChord } from './chord-chart';
import { Card, CardActionArea, CardActions, Checkbox, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder, PlayArrow } from '@material-ui/icons';
import useStyles from '../../styles';

type Chord = {
  name: string;
  tuning: string[];
  notes: number[];
};

const Chord = ({
  name, tuning, notes
}: Chord) => {
  const classes = useStyles();

  if(!validateChord(notes)) {
    return null;
  }

  return (
    <Card style={{width: '250px', margin: '10px'}}>
      <CardActionArea>
        <ChordChart
          name={name}
          tuning={tuning}
          notes={notes} />
      </CardActionArea>
      <CardActions className={classes.ChordCardActions}>
        <IconButton aria-label='play'>
          <PlayArrow />
        </IconButton>
        <Checkbox aria-label='add to favourites' icon={<FavoriteBorder />} checkedIcon={<Favorite />} name='favourite' />
      </CardActions>
    </Card>
  );
}

export default Chord;