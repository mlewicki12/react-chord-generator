
import React from 'react';
import TuningText from '../tuning-text';
import ChordIcon from '../chord-icon';
import { exportComponentAsPNG } from 'react-component-export-image';

import useStyles from '../../../styles';

import chart from '../assets/chord-chart.png';
import useMidi from '../../../hooks/midi';

// BrianShankMusic.com | Validation
export const validateChord = (notes: number[]) => {
  return getOffset(notes, true) !== -1;
}

const getOffset = (notes: number[], test?: boolean) => {
  const findRange = (notes: number[]) => {
    console.log(notes);
    return [notes[0], notes[notes.length - 1]];
  }

  const notesClean = notes.filter(item => item !== -1 && item !== 0).sort((a, b) => a - b);
  const [min, max] = findRange(notesClean);

  // no need to offset fret
  if(max <= 4) {
    return 0;
  // fret needs to start at min
  } else if(max - min === 4) {
    // map the 1 return to 0 bc it doesn't affect anything
    if(min === 1) {
      return 0;
    }

    return min;
  // fret starts at min - 1
  } else if(max - min < 4) {
    return min - 1;
  // different case
  } else {
    if(!test) {
      console.error('can\'t properly calculate fret, aborting');
    }

    return -1;
  }
}

type ChordChart = {
  name: string;
  tuning: string[];
  notes: number[];
};

const ChordChart = ({
  name, tuning, notes
}: ChordChart) => {
  const ref = React.createRef<HTMLDivElement>();
  const classes = useStyles();

  const calculateNote = (note: number, offset: number) => {
    // don't modify if note is already 0 or mute
    if(note === -1 || note === 0) {
      return note;
    }

    // don't modify if offset is 0
    if(offset === 0) {
      return note;
    }

    // subtract offset and add 1 to account for offset being on the 1st fret
    return note - offset + 1;
  }

  const fret = getOffset(notes);
  if(fret === -1) {
    return (<></>);
  }
  return (
    <div
      className={classes.ChordChartWrapper}
      ref={ref} onClick={() => exportComponentAsPNG(ref, {fileName: `${name}-chord-generator`})}>
      <h1 className={classes.ChordChartName}>{name}</h1>
      <img
        src={chart}
        alt='Chord chart'
        style={{position: 'absolute', top: '5px'}}
      />
      {fret !== 0 &&
        <h3 className={classes.ChordChartFret}>
          {fret}
        </h3>
      }
      {tuning.map((note, index) =>
        <TuningText
          note={note}
          index={index}
        />
      )}
      {notes.map((note, index) =>
        <ChordIcon
          note={calculateNote(note, fret)}
          index={index}
        />
      )}
    </div>
  )
}

export default ChordChart;