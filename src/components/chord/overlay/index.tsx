

import React from 'react';
import { useStyles } from '../../../styles.js';

import mute from '../assets/chord-mute.png';
import open from '../assets/chord-open.png';
import fret from '../assets/chord-fret.png';

const LeftMute = [
  '30px',
  '66px',
  '102px',
  '138px',
  '174px',
  '210px'
];

const Left = [
  '23px',
  '59px',
  '95px',
  '131px',
  '167px',
  '204px'
];

const Top = [
  '60px',
  '107px',
  '144px',
  '181px',
  '216px',
  '250px'
];

type TuningText = {
  note: string;
  index: number;
}

export const TuningText = ({
  note, index
}: TuningText) => {
  const left = LeftMute[index];
  const classes = useStyles();

  return (
    <p
      className={classes.chordTuningText}
      style={{top: '267px', left: left}}>
      {note}
    </p>
  )
}

type ChordIcon = {
  note: number;
  index: number;
}

export const ChordIcon = ({
  note, index
}: ChordIcon) => {
  const icon =
    note === -1 ? mute
    : note === 0 ? open
    : fret;

  const left = icon === fret ? Left[index] : LeftMute[index];
  const top = Top[Math.max(note, 0)];

  return (
    <img
      src={icon}
      alt='Fret icon'
      style={{position: 'absolute', top: top, left: left}}
    />
  );
}