
import React from 'react';

import mute from '../assets/chord-mute.png';
import open from '../assets/chord-open.png';
import fret from '../assets/chord-fret.png';

const Left = [
  '23px',
  '59px',
  '95px',
  '131px',
  '167px',
  '202px'
];

const LeftMute = [
  '30px',
  '66px',
  '102px',
  '138px',
  '174px',
  '210px'
];

const Top = [
  '40px',
  '87px',
  '124px',
  '161px',
  '196px',
  '230px'
];


type ChordIcon = {
  note: number;
  index: number;
}

const ChordIcon = ({
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

export default ChordIcon;