
import React from 'react';
import { exportComponentAsPNG } from 'react-component-export-image';

import chart from './assets/chord-chart.png';
import mute from './assets/chord-mute.png';
import open from './assets/chord-open.png';
import fret from './assets/chord-fret.png';

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

const TuningText = ({
  note, index
}: TuningText) => {
  const left = LeftMute[index];

  return (
    <p style={{position: 'absolute', top: '267px', left: left, textAlign: 'center', fontFamily: 'Roboto'}}>
      {note}
    </p>
  )
}

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

type Chord = {
  name: string;
  tuning: string[];
  notes: number[];
};

const Chord = ({
  name, tuning, notes
}: Chord) => {
  const ref = React.createRef<HTMLDivElement>();
  return (
    <div
      style={{height: '325px', maxWidth: '250px', position: 'relative', margin: 0, backgroundColor: 'white', cursor: 'pointer'}}
      ref={ref} onClick={() => exportComponentAsPNG(ref, {fileName: `${name}-chord-generator`})}>
      <h1 style={{position: 'absolute', top: '-5px', width: '100%', textAlign: 'center', zIndex: 2, fontFamily: 'Roboto'}}>{name}</h1>
      <img
        src={chart}
        alt='Chord chart'
        style={{position: 'absolute', top: '25px'}}
      />
      {tuning.map((note, index) =>
        <TuningText
          note={note}
          index={index}
        />
      )}
      {notes.map((note, index) =>
        <ChordIcon
          note={note}
          index={index}
        />
      )}
    </div>
  );
}

export default Chord;