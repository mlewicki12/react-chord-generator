
import React from 'react';
import { useStyles } from '../../styles.js';
import { exportComponentAsPNG } from 'react-component-export-image';
import { TuningText, ChordIcon } from './overlay';

import chart from './assets/chord-chart.png';

type Chord = {
  name: string;
  tuning: string[];
  notes: number[];
};

const Chord = ({
  name, tuning, notes
}: Chord) => {
  const ref = React.createRef<HTMLDivElement>();
  const classes = useStyles();

  return (
    <div
      className={classes.chordDiagram}
      ref={ref} onClick={() => exportComponentAsPNG(ref, {fileName: `${name}-chord-generator`})}>
      <h1 className={classes.chordName}>{name}</h1>
      <img
        src={chart}
        alt='Chord chart'
        className={classes.chordDiagramImage}
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